import { Component, OnInit, Input, ApplicationRef, ChangeDetectorRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppComponent } from '../app.component';
import {LocationService} from 'src/app/location.service'
import * as $ from 'jquery';
import {NgZone} from '@angular/core';
import { Observable } from 'rxjs';
import { OfficesComponent } from './offices/offices.component';
import { Production1Component } from './production1/production1.component';
import { Production2Component } from './production2/production2.component';
import { ShippingComponent } from './shipping/shipping.component';

//declare var $ : any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  
  constructor(private dialog: MatDialog, private ref: ApplicationRef) { }
  coordinate: string = "";
  officeCoord;
  production1Coord;
  production2Coord;
  shippingCoord;
  
  ngOnInit() {
  
  }  


  openDialogOffices(): void {
    const dialogRef = this.dialog.open(OfficesComponent, {
      width: '90%',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.coordinate = result;
      console.log(this.coordinate)
    });
  }





  openDialogProduction1(): void {
    const dialogRef = this.dialog.open(Production1Component, {
      width: '90%',
      data: {coordinate: this.coordinate}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.coordinate = result;
      console.log(this.coordinate)
    });
  }

  openDialogProduction2(): void {
    const dialogRef = this.dialog.open(Production2Component, {
      width: '90%',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogShipping(): void {
    const dialogRef = this.dialog.open(ShippingComponent, {
      width: '90%',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.coordinate = result;
      console.log(this.coordinate)
    });
  }


  getLocation(e){
    this.coordinate = (e.target.id).toUpperCase();

  }

   // $('#ab2').css({'border': '7px solid red'});

  //   $(function() {
  //     $('.map').maphilight();
  // });
  

}
