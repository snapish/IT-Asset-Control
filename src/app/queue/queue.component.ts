import { Globals } from 'src/app/global';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { MapComponent } from '../map/map.component';
import { LocationService } from '../location.service';
import { MapComponent } from '../map/map.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material'
import { FirestoreService } from '../firestore.service';
import { SelectionModel } from '@angular/cdk/collections';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from 'angularfire2/firestore';
import { ExportComponent } from '../export/export.component';
import { Observable } from 'rxjs';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})

export class QueueComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  coords;
  form;
  items;
  coordArray = [];
  subscription: Subscription;
  displayColumns = [ 'Name', 'Quantity', 'Location', 'User', 'Notes', 'Date',];
  queueSource;
  user ;
  notesArray = [];
  selection = new SelectionModel<any>(true, []);
  constructor(private exp: ExportComponent, private db: AngularFirestore, private cookie: CookieService, private dialog: MatDialog, private map: MapComponent, private dialogRef: MatDialogRef<QueueComponent>, @Inject(MAT_DIALOG_DATA) data, private firebaseService: FirestoreService, private global: Globals) { this.coords = data.coords; }

  remainingItems=0;
  ngOnInit() {
    this.firebaseService.getQueue().subscribe(data => { this.items = data; this.queueSource = new MatTableDataSource(data); this.queueSource.sort = this.sort; });
    if(this.cookie.get("User") == "" || this.cookie.get("User") == null){
      this.user = "Mystery"
    }
    else{
    this.user = this.cookie.get("User");
    }
    const source = interval(3000);
    
    this.subscription = source.subscribe(() =>{ 
      if(this.cookie.get("User") == "" || this.cookie.get("User") == null){
      this.user = "Mystery"
    }
    else{
    this.user = this.cookie.get("User");
    }});

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  exportToCSV(table){
    this.exp.convertToCSV(table);
  }
  exportToJSON(table){
    this.exp.convertToJSON(table);
  }
  applyFilter(filterValue: string) {
    this.queueSource.filter = filterValue.trim().toLowerCase();
  }

  /** 
   * Pulls up a dialog box, which has some buttons that pull up another dialog box with image-maps of the building
   * @param e the index being passed, normally from the view, to set the location to
   */
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
  
/**
 * 
 * @param name The name of the item getting sent
 * @param location Where it's getting sent to, from imagemap
 * @param notes Notes about the sent asset from the text box
 * @param quantity Qty to be sent out
 * @param ID Janky primary key for deleting entries
 * @param ind Index of the item in the table/observable
 */
  sendIt(name:string, location : string, notes: string, quantity : number, ID: number, ind:number, serial:string, ){
    if(notes == null){ //firebase gets mad if its null 
      notes = "";
    }
    if(location != null && location != ""){ // failsafe null or "" because i dont actually know what the default is, but it has to have a value
    let colRef = this.db.collection('Queue'); //from the queue
    let qry = colRef.ref.orderBy('ID','asc').get() 
      .then(snapshot => {
        snapshot.forEach(doc => { //for each doc 
          if(doc.data().ID == ID ){  //find the doc's ID that matches the one passed 
            this.notesArray.splice(ind, 1) //remove the item from the array
            this.coordArray.splice(ind, 1) /*side note, not checking against serial here because there might be multiple queue'd items for the same serial, but ID is for each queue */
          
           this.db.collection('Queue').doc(doc.ref.id).delete(); // delete the doc from the queue
           this.firebaseService.manageEntry(name, this.cookie.get("User"), location, notes, quantity, serial, doc.data().ID); // and add it to the manage page
          
          }
        });
      })
    
    }
    else{ //if no location choosened
      alert("Pick a Location for: " + name)
    }
  }
}
