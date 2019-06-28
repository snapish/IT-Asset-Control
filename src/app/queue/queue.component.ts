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
  
  displayColumns = [ 'Name', 'Quantity', 'Location', 'User', 'Notes', 'Date',];
  queueSource;
  user ;
  noteValue = [];
  selection = new SelectionModel<any>(true, []);
  constructor(private cookie: CookieService, private dialog: MatDialog, private map: MapComponent, private dialogRef: MatDialogRef<QueueComponent>, @Inject(MAT_DIALOG_DATA) data, private firebaseService: FirestoreService, private global: Globals) { this.coords = data.coords; }


  ngOnInit() {
    this.firebaseService.getQueue().subscribe(data => { this.items = data; this.queueSource = new MatTableDataSource(data); this.queueSource.sort = this.sort; });
    if(this.cookie.get("User") == "" || this.cookie.get("User") == null){
      this.user = "Mystery"
    }
    else{
    this.user = this.cookie.get("User");
    }
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
  fullSend(){

  }
  sendIt(name:string, location : string, notes: string, quantity : number){
    this.firebaseService.manageEntry(name, this.cookie.get("User"), location, notes, quantity);
    //manage needs date, user, item name, location, notes

    //pin authentication ---woo---
    //decom table+page ---woo---
    //queue to manage button ---woo---
    //queue button to inv ---woo---
    //set up manage page ---partial woo---
    //jquery plug in for map ---oh yeah, $ez---
    //url passing 
    //fix the adding page ---sad noise---
    //auto fill mass entry 
  }
}

//monday
//6:20-7:33 
//7:50-8:19

//wednesday
//7:10-2:20