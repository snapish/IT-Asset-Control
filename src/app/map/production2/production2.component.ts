import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Production1Component } from '../production1/production1.component';

@Component({
  selector: 'app-production2',
  templateUrl: './production2.component.html',
  styleUrls: ['./production2.component.css']
})
export class Production2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  coordinate: string = "";
  getLocation(e){
    this.coordinate = (e.target.id).toUpperCase();

  }
  closeDialog(){
   
   }
    
}
