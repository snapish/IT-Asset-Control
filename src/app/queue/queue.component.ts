import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  coordinateArray = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  newBoxes() {
    const dialogConfig = new MatDialogConfig();

    //dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    this.dialog.open(MapComponent , dialogConfig);
  }

}
