import { Globals } from 'src/app/global';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { MapComponent } from '../map/map.component';
import { LocationService } from '../location.service';
import { MapComponent } from '../map/map.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})

export class QueueComponent implements OnInit {
  coords;
  form;
  coordArray= [];
  constructor(private dialog: MatDialog, private map: MapComponent,private dialogRef: MatDialogRef<QueueComponent>, @Inject(MAT_DIALOG_DATA) data, private fb: FormBuilder, private global :Globals)
   {this.coords = data.coords;}
 

  ngOnInit() {}
  //   this.form = this.fb.group({
  //     coords: [this.coords, []],
  
  // });
  // }

  // save(){
  //   this.dialogRef.close(this.form.value)
  // }
//idk why i named it newboxes but its too late now isnt it
  newBoxes(e) {
    
    const dialogConfig = new MatDialogConfig(); //options for dialog boxes
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    if(e != null){ //if something was passed (will be a coordinate, something is only passed when replacinig)
      this.global.replace = e;  //honestly looking at this now i dont know if i need the global variables but it works so im not ganna touch it
      var replaceIndex = this.coordArray.indexOf(e);// get the index that theyre replacing 
      const dialogRef = this.dialog.open(MapComponent, dialogConfig);//open map dialog
      dialogRef.afterClosed().subscribe( data =>{  if(data != null){ //when the dialog is clsoed
        this.coordArray[replaceIndex] = data} //replace that index
      })   
    }
    else{ // if youre not replacing something
    const dialogRef = this.dialog.open(MapComponent, dialogConfig); 
    dialogRef.afterClosed().subscribe( data =>{  if(data != null){
      this.coordArray.push(data)} //add (not replacing)
    })
  }
  }
}
