import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-production2',
  templateUrl: './production2.component.html',
  styleUrls: ['./production2.component.css']
})
export class Production2Component implements OnInit {

  constructor(private dialogRef: MatDialogRef<Production2Component>) { }
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
