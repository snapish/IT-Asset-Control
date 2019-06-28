import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Production1Component } from '../production1/production1.component';
import { QueueComponent } from 'src/app/queue/queue.component';
import { MapComponent } from '../map.component';
import { LocationService } from 'src/app/location.service';
//import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<OfficesComponent>) { }
  config = {
    fade: true,
    alwaysOn: false, //false
    neverOn: false,

    // fill
    fill: true,
    fillColor: '#ffa200',
    fillOpacity: 0.4, //.4

    // stroke
    stroke: true,
    strokeColor: '#4d0ec0',
    strokeOpacity: 1,
    strokeWidth: 1,

    // shadow:
    shadow: true,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 10
  }
  ngOnInit() {
  }
  coordinate: string = "";
  getLocation(e){
    this.coordinate = (e.target.id).toUpperCase();
    
  }
  closeDialog(){
 //   this.queue.coordinateArray.push(this.dialogRef.close(this.coordinate));
    return console.log(this.dialogRef.close(this.coordinate))
   }
   onNoClick(): void {
    this.dialogRef.close();
  }

}
