import { ExportComponent } from './../export/export.component';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { MatTableDataSource, MatSort, MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MapComponent } from '../map/map.component';
import { QueueComponent } from '../queue/queue.component';
import { Globals } from '../global';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  myDate = new Date();
  constructor(private exp: ExportComponent, private db: AngularFirestore, private cookie: CookieService, 
    private firebaseService: FirestoreService, private dialog: MatDialog, private map: MapComponent, 
    private dialogRef: MatDialogRef<ManageComponent>, @Inject(MAT_DIALOG_DATA) data, private global: Globals) {

  }
  editMode = false;
  items;
  manageSource;
  coordArray = [];
  displayColumns = ['Name', 'Quantity', 'Location', 'User', 'Notes', 'Date','Actions'];

  applyFilter(filterValue: string) {
    this.manageSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.firebaseService.getManage().subscribe(data => { this.items = data; this.manageSource = new MatTableDataSource(data); this.manageSource.sort = this.sort; });
  }
  inventory(e, item){
   var description=""
   var url =""
  var matchID =""
   let invRef = this.db.collection('Inventory'); //from the inventory
   let qry2 = invRef.ref.get().then(snapshot => {
     snapshot.forEach(doc => {
       if(item.Name == doc.data().Name){
        matchID = doc.id;
        description = doc.data().Description
        url = doc.data().OrderUrl
      }
  })
}).then(()=>{
  if(url != ""){
    let colRef = this.db.collection('Manage'); //from the inventory
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        if (item.ID == doc.data().ID) {
          invRef.ref.get().then(invdoc =>{
            invdoc.forEach(inventry=>{

              var n: number = parseInt(inventry.data().Quantity) + parseInt(item.Quantity);
              this.db.collection('Inventory').doc(matchID).update({
                Name: item.Name,
                Quantity: n,
                Description: inventry.data().Description,
                LastRestock: inventry.data().LastRestock,
                LastRestockQuantity: inventry.data().LastRestockQuantity,
                OrderUrl: inventry.data().OrderUrl,
                Serial: inventry.data().Serial
              })
            })
            })
          doc.ref.delete()
          
          //find item with the same name, get its url set url var to that
          // check if it exists
        }
      })
    })
  }
  else{
    var del = confirm('something went wrong\nDelete entry without sending to inventory?')

    if(del){
      let colRef = this.db.collection('Manage'); //from the inventory
      let qry = colRef.ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (item.ID == doc.data().ID) {
            doc.ref.delete()
            
            //find item with the same name, get its url set url var to that
            // check if it exists
          }
        })
      })
    }
  }
})
}
  decomission(e, serial, quantity, loc, notes) {
    var qty;
    qty = prompt("How many are you decomissioning", "1"); //prompt asking how many of the item to send to yeesus
    if (qty <= quantity) {
      if (qty != null && qty != 0 && qty > 0) { // if they entered a number over 0 and its less than or equal to the number remaining

        let colRef = this.db.collection('Manage'); // inv ref
        let decRef = this.db.collection('Decomission'); // decom ref
        let qry = colRef.ref.get().then(snapshot => {
          snapshot.forEach(doc => { //for each document in the collectoin
            if (doc.data().Serial == serial && serial != null ) { // find the matching entry
              decRef.add({ //add to the decom table
                Quantity: qty,
                Name: doc.data().Name,
                Serial: doc.data().Serial,
                Notes: notes,
                Location: loc,
                User: this.cookie.get("User"),
                Date: this.myDate
              })
              colRef.doc(doc.id).delete() //delete the doc
            }
          })
        })
      }
    }
    else {
      alert("Enter a valid number")
    }
  }
  //need this to update in the db
  locationPicker(e) {
    const dialogConfig = new MatDialogConfig(); //options for dialog boxes
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    const dialogRef = this.dialog.open(MapComponent, dialogConfig); //open the map component
    dialogRef.afterClosed().subscribe(data => {
      if (data != null) { //if the componenet sent back some kind of data
        this.coordArray[e] = data //e is the index in the coord array that lines up with the queue entry 
      }
    })
  }
  exportAsCSV(table){
    this.exp.convertToCSV(table);
  }
  exportAsJSON(table){
    this.exp.convertToCSV(table);
  }

  saveChanges() {
    var allboxes = $('.editbox')
    var allboxesArr = $('.editbox').toArray()
    var badEntryFlag = false;
    var container = []
    allboxes.each(v => {
      var boxVal = $($('.editbox')[v]).val().toString()
      if ($($('.editbox')[v]).hasClass('notesbox') && !/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal)) {
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ')
      } else if ($($('.editbox')[v]).hasClass('notesbox')){
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

      if ($($('.editbox')[v]).hasClass('datebox') && /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(boxVal)) {//im too tired to make my own regex for this, heres one i found on stackoverflow. Matches dates
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red')
      } else if ($($('.editbox')[v]).hasClass('datebox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

    })
    if (!badEntryFlag) {
      console.log('full send boys')
      var ind = 0;

      for (let x = 0; x < allboxesArr.length; x += 4) {
        var temp = []
        temp.push($(allboxesArr[x]).val().toString())
        temp.push(parseInt($(allboxesArr[x + 1]).toString()))
        temp.push($(allboxesArr[x + 2]).val().toString())
        temp.push($(allboxesArr[x + 3]).val().toString())

        container.push(temp)
      }

      let colRef = this.db.collection('Manage'); //from the inventory
      let qry = colRef.ref.get().then(snapshot => {
        snapshot.forEach(doc => { //for each doc. A row is a doc in this scenario, this was a huge realization https://i.ytimg.com/vi/LLpIMRowndg/maxresdefault.jpg
          for (let x = 0; x < container.length; x++) {
            if (container[x][0] == doc.data().Name) {
              doc.ref.update({
                Name: $(allboxesArr[ind]).val().toString(),
                Quantity: parseInt($(allboxesArr[ind + 1]).val().toString()),
                Notes: $(allboxesArr[ind + 2]).val().toString(),
                Date: firebase.firestore.Timestamp.fromDate(new Date(Date.parse(($(allboxesArr[ind + 3]).val().toString())))),
              })
            }
          }
          ind += 4 //go to next row
        })
      })
      alert('Manage updated!')
      this.editMode = false;
    }
  }
}
