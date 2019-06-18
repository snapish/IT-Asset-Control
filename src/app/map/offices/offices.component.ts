import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Production1Component } from '../production1/production1.component';
import { QueueComponent } from 'src/app/queue/queue.component';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<OfficesComponent>) { }

  ngOnInit() {
  }
  coordinate: string = "";
  getLocation(e){
    this.coordinate = (e.target.id).toUpperCase();
  }
  closeDialog(){
 //   this.queue.coordinateArray.push(this.dialogRef.close(this.coordinate));
    return this.dialogRef.close()
   }
   onNoClick(): void {
    this.dialogRef.close();
  }

}
