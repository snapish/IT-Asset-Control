import { Component, OnInit, ViewChild } from '@angular/core';
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
  displayColumns = ['Name', 'Quantity', 'Description', 'LastRestock', 'LastRestockQuantity', 'Serial', 'Restock'];

  constructor(private pin: PinComponent, private db: AngularFirestore, public firebaseService: FirestoreService, private dialog: MatDialog, private loc: LocationService, private cookie: CookieService) { }

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
  invDelete(){
    let colRef = this.db.collection('Inventory'); // inventory reference
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => { //for each document in the collectoin
        this.db.collection('Inventory').doc(doc.ref.id).delete();
      })
    })
    alert("Cleared Inventory")
  }
  mngDelete(){
    let colRef = this.db.collection('Manage'); // inventory reference
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => { //for each document in the collectoin
        this.db.collection('Manage').doc(doc.ref.id).delete();
      })
    })
    alert("Cleared Manage")
  }
  queDelete(){
    let colRef = this.db.collection('Queue'); // inventory reference
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => { //for each document in the collectoin
        this.db.collection('Queue').doc(doc.ref.id).delete();
      })
    })
    alert("Cleared Queue")
  }
  
  decDelete(){
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
        switch(table){
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
      })
    this.firebaseService.queueEntry(name, qty, this.cookie.get("User"), newID, serial);

  }
  applyFilter(filterValue: string) {
    this.itemsource.filter = filterValue.trim().toLowerCase();
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
              Quantity: quantityLeft - qty,
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
}
