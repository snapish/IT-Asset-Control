import { ExportComponent } from './../export/export.component';
import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore.service';
import { Items } from './Items';
import { MatTableModule, MatDialog, MatDialogConfig } from '@angular/material'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { LocationService } from '../location.service';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from 'angularfire2/firestore';
import { KeypadComponent } from '../pin/keypad/keypad.component';
import { PinComponent } from '../pin/pin.component';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import * as firebase from 'firebase';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],

})

export class InventoryComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  items: Items[];
  myDate = new Date();
  v = true;
  itemsource;
  editMode = false;
  displayColumns = ['Name', 'Quantity', 'Description', 'LastRestock', 'LastRestockQuantity', 'Serial', 'Restock'];

  constructor(private exp: ExportComponent, private pin: PinComponent, private db: AngularFirestore, public firebaseService: FirestoreService,
     private dialog: MatDialog, private loc: LocationService, private cookie: CookieService) { }

  ngOnInit() {
    this.firebaseService.getInventory().subscribe(data => { this.items = data; this.itemsource = new MatTableDataSource(data); this.itemsource.sort = this.sort; });
  }

  scaleColor(qty: number, last: number) {

    var perc = (qty / last) * 100
    if (perc >= 85) {
      return "#00ff00"
    }
    if (perc >= 70) {
      return "#6fff00"
    }
    if (perc >= 55) {
      return "#bcff00"
    }
    if (perc >= 40) {
      return "#fff700"
    }
    if (perc >= 25) {
      return "#ffc400"
    }
    if (perc >= 10) {
      return "#ff7700"
    }
    return "#ff0000"
  }
  invDelete() {
    let colRef = this.db.collection('Inventory'); // inventory reference
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => { //for each document in the collectoin
        this.db.collection('Inventory').doc(doc.ref.id).delete();
      })
    })
    alert("Cleared Inventory")
  }
  mngDelete() {
    let colRef = this.db.collection('Manage'); // inventory reference
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => { //for each document in the collectoin
        this.db.collection('Manage').doc(doc.ref.id).delete();
      })
    })
    alert("Cleared Manage")
  }
  queDelete() {
    let colRef = this.db.collection('Queue'); // inventory reference
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => { //for each document in the collectoin
        this.db.collection('Queue').doc(doc.ref.id).delete();
      })
    })
    alert("Cleared Queue")
  }

  decDelete() {
    let colRef = this.db.collection('Decomission'); // inventory reference
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => { //for each document in the collectoin
        this.db.collection('Decomission').doc(doc.ref.id).delete();
      })
    })
    alert("Cleared Decomissioned items")
  }
  massDelete() {
    var enteredPin = ""
    const dialogConfig = new MatDialogConfig(); //options for dialog boxes
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true; //so they can't exit
    const dialogRef = this.dialog.open(KeypadComponent, dialogConfig); //open the keypad 
    dialogRef.afterClosed().subscribe(data => {
      enteredPin = data;
      if (this.pin.pins.includes(enteredPin)) {
        var table = prompt("Delete all from which table")
        switch (table) {
          case 'Inventory':
            this.invDelete()
            break;
          case 'Manage':
            this.mngDelete()
            break;
          case 'Queue':
            this.queDelete()
            break;
          case 'Decomission':
            this.decDelete()
            break;
        }
      }
    })
  }
  queueItem(e, name: string, qty: number, serial: string): any {
    var newID = 0;
    let colRef = this.db.collection('Queue');
    let qry = colRef.ref.orderBy('ID', 'asc').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().ID > newID) {
            newID = doc.data().ID + 1;
          }
        });
      }).then(() => {
        this.firebaseService.queueEntry(name, qty, this.cookie.get("User"), newID, serial);
      })

  }
  
  decomission(e, serial, quantityLeft) {
    var qty;
    qty = prompt("How many are you decomissioning", "1"); //prompt asking how many of the item to send to yeesus
    if (qty != null && qty != 0 && qty > 0 && qty <= quantityLeft) { // if they entered a number over 0 and its less than or equal to the number remaining
      var notes = prompt("Notes about the decomission")
      if (notes == null) {
        notes = ""
      }
      let colRef = this.db.collection('Inventory'); // inv ref
      let decRef = this.db.collection('Decomission'); // decom ref
      let qry = colRef.ref.get().then(snapshot => {
        snapshot.forEach(doc => { //for each document in the collectoin
          if (doc.data().Serial == serial) { // find the matching entry
            colRef.doc(doc.id).update({ //update the quantity
              Quantity: quantityLeft - qty
            })
            decRef.add({ //add to the decom table
              Quantity: qty,
              Description: doc.data().Description,
              Name: doc.data().Name,
              Serial: doc.data().Serial,
              Notes: notes,
              Location: "N/A", //came from inventory
              User: this.cookie.get("User"),
              Date: this.myDate
            })
          }
        })
      })
    }
  }
  restock(e, serial) {
    var s: string = (e.currentTarget.attributes['id'].value);
    var a = s.split(' ');
    var qty;
    qty = prompt("How many are you buying", "1");
    if (qty != null && qty != 0 && qty > 0) {
      qty = parseInt(qty); // gets number from box
      var url = a[0];
      var name = a[1];
      var mydate = new Date();
      let colRef = this.db.collection('Inventory');
      let qry = colRef.ref.get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            if (doc.data().Serial == serial) {

              colRef.doc(doc.id).update({
                LastRestockQuantity: qty,
                LastRestock: mydate,
                Quantity: qty + doc.data().Quantity
              })
            }
          })
        })

      window.open(url)
    }
    else if (qty != null) { //alert box returns null on cancel
      alert("Bad entry try again sir")
    }
  }
 

  deleteRow($event, x) {
    //  console.log(x)
    var allboxesArr = $('.editbox').toArray()
    let colRef = this.db.collection('Inventory'); //from the inventory
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().Name == x.Name && doc.data().Serial == x.Serial && doc.data().Quantity == x.Quantity && doc.data().Description == x.Description && doc.data().LastRestock == x.LastRestock && doc.data().LastRestockQuantity == x.LastRestockQuantity) {
          doc.ref.delete()
        }
      })
    })
    //find the doc with the matching name qty desc lastrestock lrq serial
    //remove it

  }
  exportAsCSV(table){
    this.exp.convertToCSV(table);
  }
  exportAsJSON(table){
    this.exp.convertToJSON(table);
  }
  applyFilter(filterValue: string) {
    this.itemsource.filter = filterValue.trim().toLowerCase();
  }
  saveChanges() {
    var allboxes = $('.editbox')
    var allboxesArr = $('.editbox').toArray()
    var badEntryFlag = false;
    var container = []
    allboxes.each(v => {
      var boxVal = $($('.editbox')[v]).val().toString()
      if ($($('.editbox')[v]).hasClass('descriptionbox') && !/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal)) {
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ')
      } else if ($($('.editbox')[v]).hasClass('descriptionbox')){
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

      if ($($('.editbox')[v]).hasClass('serialbox') && (!/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal))) {//lol, serial box
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ')
      } else if ($($('.editbox')[v]).hasClass('serialbox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

      if ($($('.editbox')[v]).hasClass('namebox') && (!/^[0-9A-Za-z\s\-\_]+$/.test(boxVal) || boxVal.trim() == "")) {//if we're talking to the name box, and the string is contains non-alphanumeric chars, and its empty
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red')
      } else if ($($('.editbox')[v]).hasClass('namebox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

      if ($($('.editbox')[v]).hasClass('quantitybox') && !/^[0-9]+$/.test(boxVal)) {// quantity must be a number and nothing else
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ')
      } else if ($($('.editbox')[v]).hasClass('quantitybox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

      if ($($('.editbox')[v]).hasClass('lastrestockquantitybox') && !/^[0-9]+$/.test(boxVal)) {// quantity must be a number and nothing else
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ')
      } else if ($($('.editbox')[v]).hasClass('lastrestockquantitybox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

      if ($($('.editbox')[v]).hasClass('lastrestockbox') && /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(boxVal)) {//im too tired to make my own regex for this, heres one i found on stackoverflow. Matches dates
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red')
      } else if ($($('.editbox')[v]).hasClass('lastrestockbox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

    })
    if (!badEntryFlag) {
      console.log('full send boys')
      var ind = 0;

      for (let x = 0; x < allboxesArr.length; x += 6) {
        var temp = []
        temp.push($(allboxesArr[x]).val().toString())
        temp.push(parseInt($(allboxesArr[x + 1]).toString()))
        temp.push($(allboxesArr[x + 2]).val().toString())
        temp.push($(allboxesArr[x + 3]).val().toString())
        temp.push(parseInt($(allboxesArr[x + 4]).val().toString()))
        temp.push($(allboxesArr[x + 5]).val().toString())

        container.push(temp)
      }

      console.log(container)
      let colRef = this.db.collection('Inventory'); //from the inventory
      let qry = colRef.ref.get().then(snapshot => {
        snapshot.forEach(doc => { //for each doc. A row is a doc in this scenario, this was a huge realization https://i.ytimg.com/vi/LLpIMRowndg/maxresdefault.jpg
          for (let x = 0; x < container.length; x++) {
            if (container[x][0] == doc.data().Name) {
              doc.ref.update({
                Name: $(allboxesArr[ind]).val().toString(),
                Quantity: parseInt($(allboxesArr[ind + 1]).val().toString()),
                Description: $(allboxesArr[ind + 2]).val().toString(),
                LastRestock: firebase.firestore.Timestamp.fromDate(new Date(Date.parse(($(allboxesArr[ind + 3]).val().toString())))),
                LastRestockQuantity: parseInt($(allboxesArr[ind + 4]).val().toString()),
                Serial: $(allboxesArr[ind + 5]).val().toString()

              })
            }
          }
          ind += 6 //go to next row
        })
      })
      alert('Inventory updated!')
      this.editMode = false;
    }
  }
}
