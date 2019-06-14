import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppComponent } from '../app.component';
import {LocationService} from 'src/app/location.service'
import * as $ from 'jquery';
//declare var $ : any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  
  constructor(private dialog: MatDialog) { }
  coordinate: string = "";
  section :string = "shipping";
  ngOnInit() {
 
  }  
  openDialog(section:string): void {
    this.section = section;
    console.log(this.section)
    const dialogRef = this.dialog.open(MapComponent, {
      width: '90%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


  

   // $('#ab2').css({'border': '7px solid red'});

  //   $(function() {
  //     $('.map').maphilight();
  // });
  

}
