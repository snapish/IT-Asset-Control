import { Component, OnInit, Input, ApplicationRef, ChangeDetectorRef, EventEmitter, ChangeDetectionStrategy, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { OfficesComponent } from './offices/offices.component';
import { Production1Component } from './production1/production1.component';
import { Production2Component } from './production2/production2.component';
import { ShippingComponent } from './shipping/shipping.component';
import { QueueComponent } from '../queue/queue.component';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
/**
 * just used as a thing to pointn to which imagemap to open basically
 */
export class MapComponent implements OnInit {
  coords;
  form;
  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<MapComponent>, @Inject(MAT_DIALOG_DATA) data, private fb: FormBuilder) { this.coords = data }//was data.coords not ""
  test = environment;

  coordinate = "";
  coordinateArray = [];

  ngOnInit() {
    this.form = this.fb.group({
      coords: [this.coords, []],
    });
  }
/**
 * called by the mat dialog opener thing when it closes
 */
  save() {
    this.dialogRef.close(this.form.value)
  }

  locationPicker(s) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "99%"; //need this so the dialog box doesnt open and cut things off

    
    if (s == "offices") { // if they press office button
      // close the current one (area choice)
      const dialogRef = this.dialog.open(OfficesComponent, dialogConfig); //open 
      dialogRef.afterClosed().subscribe(data =>
        // console.log(datab)
        this.dialogRef.close(data)
      )
    }
    else if (s == "production1") {
      const dialogRef = this.dialog.open(Production1Component, dialogConfig); //open 
      dialogRef.afterClosed().subscribe(data =>
        // console.log(datab)
        this.dialogRef.close(data)
      )
    }
    else if (s == "production2") {
      const dialogRef = this.dialog.open(Production2Component, dialogConfig); //open 
      dialogRef.afterClosed().subscribe(data =>
        // console.log(datab)
        this.dialogRef.close(data)
      )
    }
    else if (s == "shipping") {
      const dialogRef = this.dialog.open(ShippingComponent, dialogConfig); //open 
      dialogRef.afterClosed().subscribe(data =>
        // console.log(datab)
        this.dialogRef.close(data)
      )
    }

  }

  getLocation(e) {
    this.coordinate = (e.target.id).toUpperCase();

  }

}
