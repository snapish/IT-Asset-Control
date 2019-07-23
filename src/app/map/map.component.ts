import { Component, OnInit, Input, ApplicationRef, ChangeDetectorRef, EventEmitter, ChangeDetectionStrategy, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { OfficesComponent } from './offices/offices.component';
import { Production1Component } from './production1/production1.component';
import { Production2Component } from './production2/production2.component';
import { ShippingComponent } from './shipping/shipping.component';
import { QueueComponent } from '../queue/queue.component';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import {Globals} from 'src/app/global'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  coords;
  form;
  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<MapComponent>, @Inject(MAT_DIALOG_DATA) data, private fb: FormBuilder, private globals :Globals) { this.coords = data }//was data.coords not ""
  test = environment;

  coordinate = "";
  coordinateArray = [];

  ngOnInit() {
    this.form = this.fb.group({
      coords: [this.coords, []],
    });
    this.globals.replace = "";
  }

  save() {
    this.dialogRef.close(this.form.value)
  }

  locationPicker(s) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = "70%";
    
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












  /*
    openDialogOffices(): void {
  
  
      const dialogRef = this.dialog.open(OfficesComponent, {
        width: '90%',
        
        data: {}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.officeCoord = result;
        console.log(this.officeCoord)
        this.coordinateArray.push(this.officeCoord)
        console.log(this.coordinateArray)
        return this.officeCoord;
        
      });
    }
  
  
    openDialogProduction1() {
      const dialogRef = this.dialog.open(Production1Component, {
        width: '90%',
        data: {},
  
      });
      dialogRef.afterClosed().subscribe(result => {
        this.production1Coord = result;
        console.log(this.production1Coord)
        return this.production1Coord;
      });
    }
  
    openDialogProduction2(): void {
      const dialogRef = this.dialog.open(Production2Component, {
        width: '90%',
        data: {}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.production2Coord = result;
        console.log(this.production2Coord)
        return this.production2Coord;
      });
    }
    openDialogShipping(): void {
      const dialogRef = this.dialog.open(ShippingComponent, {
        width: '90%',
        data: {}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.shippingCoord = result;
        console.log(this.shippingCoord)
        return this.shippingCoord;
      });
    }
  */

  getLocation(e) {
    this.coordinate = (e.target.id).toUpperCase();

  }

  // $('#ab2').css({'border': '7px solid red'});

  //   $(function() {
  //     $('.map').maphilight();
  // });


}
