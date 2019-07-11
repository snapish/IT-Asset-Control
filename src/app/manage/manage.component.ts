import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { MatTableDataSource, MatSort, MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MapComponent } from '../map/map.component';
import { QueueComponent } from '../queue/queue.component';
import { Globals } from '../global';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  myDate = new Date();
  constructor(private db: AngularFirestore, private cookie: CookieService, private firebaseService: FirestoreService, private dialog: MatDialog, private map: MapComponent, private dialogRef: MatDialogRef<ManageComponent>, @Inject(MAT_DIALOG_DATA) data, private global: Globals) {

  }
  items;
  manageSource;
  coordArray = [];
  displayColumns = ['Name', 'Quantity', 'Location', 'User', 'Notes', 'Date','Actions'];


  ngOnInit() {
    this.firebaseService.getManage().subscribe(data => { this.items = data; this.manageSource = new MatTableDataSource(data); this.manageSource.sort = this.sort; });

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

}
