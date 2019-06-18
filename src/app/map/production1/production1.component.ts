import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-production1',
  templateUrl: './production1.component.html',
  styleUrls: ['./production1.component.css']
})
export class Production1Component implements OnInit {
  coordinate: string;
  constructor(  ){ }

  ngOnInit() {
  }
  onNoClick(): void {
  //  this.dialogRef.close();
  }

 closeDialog(){
 // return this.dialogRef.close(this.coordinate)
 }
  
  getLocation(e){
    this.coordinate = (e.target.id).toUpperCase();

  }
}
