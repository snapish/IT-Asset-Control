import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-production2',
  templateUrl: './production2.component.html',
  styleUrls: ['./production2.component.css']
})
export class Production2Component implements OnInit {

  constructor(private dialogRef: MatDialogRef<Production2Component>) { }

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
