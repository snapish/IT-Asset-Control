import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<KeypadComponent>) { }
  entered = "";
  ngOnInit() {
  }
  addEntry(n: number){
    if(this.entered.length < 4){
    this.entered += n.toString();
    }
  }
  back(){
    this.entered = this.entered.slice(0, this.entered.length-1);
  }
  enter(){
    this.dialogRef.close(this.entered);
  }
}
