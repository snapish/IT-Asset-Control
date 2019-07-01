import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { MatTableDataSource, MatSort, MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MapComponent } from '../map/map.component';
import { QueueComponent } from '../queue/queue.component';
import { Globals } from '../global';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private firebaseService : FirestoreService, private dialog: MatDialog, private map: MapComponent, private dialogRef: MatDialogRef<ManageComponent>, @Inject(MAT_DIALOG_DATA) data, private global: Globals) {  
    
  }
  items;  
manageSource;
coordArray = []; 
 displayColumns = [ 'Name', 'Quantity', 'Location', 'User', 'Notes', 'Date',];


  ngOnInit() { 
    this.firebaseService.getManage().subscribe(data => { this.items = data; this.manageSource = new MatTableDataSource(data); this.manageSource.sort = this.sort; });

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
