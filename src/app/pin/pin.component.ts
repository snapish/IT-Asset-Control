import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QueueComponent } from '../queue/queue.component';
import { KeypadComponent } from './keypad/keypad.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  constructor(private queue :QueueComponent, private dialog: MatDialog, private dialogRef: MatDialogRef<PinComponent>, @Inject(MAT_DIALOG_DATA) data, private cookie : CookieService) {
  }

  pins = ["1111", "2222"];//approved pins
  users= ["Elliot", "Erick"];// users, their index is the same as their pin
  enteredPin: string;
  approved: boolean = false;
  ngOnInit() {
    if(this.cookie.get("User") == ""){ // if the cookie is expired or doesnt exist, prompt keypad
   
    this.enteredPin = "" 
    const dialogConfig = new MatDialogConfig(); //options for dialog boxes
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true; //so they can't exit
    const dialogRef = this.dialog.open(KeypadComponent, dialogConfig); //open the keypad 
    dialogRef.afterClosed().subscribe(data => { this.enteredPin = data; this.checkPin() });  

    }
    else if (this.cookie.get("User") != ""){
      this.approved = true;
    }
  }
  /**
   * Checks if the pin entered from the keypad is an approved pin or not
   */
  checkPin() {
    for (let ind = 0; ind < this.pins.length; ind++) {
      if (this.enteredPin == this.pins[ind]) {
        this.approvePin(this.users[ind]);
        this.approved  = true;
        break;
      }
    }
    if (!this.approved) {
      this.badPin();
    }


  }
  approvePin(user:string) {
    this.cookie.set('User', user, 1)
    this.queue.ngOnInit()
  }

  /**
   * Gets called when someone enters a bad PIN into the keypad.
   * Deletes the cookie, and reopens the dialog
   */
  badPin() {
    this.cookie.deleteAll();
    const dialogConfig = new MatDialogConfig(); //options for dialog boxes
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(KeypadComponent, dialogConfig); //open the map component
    dialogRef.afterClosed().subscribe(data => { this.enteredPin = data; this.checkPin() });
  
  }

}
