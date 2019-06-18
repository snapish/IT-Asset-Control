import { Component, OnInit } from '@angular/core';
import { Production1Component } from '../production1/production1.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

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
