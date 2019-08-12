import { AppComponent } from './../app.component';
import { ChangepinComponent } from './changepin/changepin.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QueueComponent } from '../queue/queue.component';
import { KeypadComponent } from './keypad/keypad.component';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
/**
 * This is the component that checks the pins entered in the keypad, and then approves or re-prompts the pin
 */
export class PinComponent implements OnInit {
  constructor(private queue: QueueComponent, private dialog: MatDialog, private dialogRef: MatDialogRef<PinComponent>, @Inject(MAT_DIALOG_DATA) data,
   private cookie: CookieService, private db: AngularFirestore, private app: AppComponent) {
  }
  pins = [];//approved pins
  users = [];// users, their index is the same as their pin

  enteredPin: string;
  approved: boolean = false;
  ngOnInit() {
    this.approved =false;
    let colRef = this.db.collection('Pins'); //from the pins
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.users.push(doc.data().Name); //fill up the arrays with names
        this.pins.push(doc.data().Pin); //fill up array with pin
      })
    }).then(() => {

      if (this.cookie.get("User") == "") { // if the cookie is expired or doesnt exist, prompt keypad
        this.enteredPin = ""
        const dialogConfig = new MatDialogConfig(); //options for dialog boxes
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true; //so they can't exit
        const dialogRef = this.dialog.open(KeypadComponent, dialogConfig); //open the keypad 
        dialogRef.afterClosed().subscribe(data => { this.enteredPin = data; this.checkPin();  });

      }
      else if (this.cookie.get("User") != "") {
        this.approved = true;
      }
    })
  }
  /**
   * Checks if the pin entered from the keypad is an approved pin or not
   */
  checkPin() {
    for (let ind = 0; ind < this.pins.length; ind++) { //for each pin
      if (this.enteredPin == this.pins[ind]) { //if the current entered pin is in the array
        this.cookie.set('User', this.users[ind], 1)
        this.queue.ngOnInit() // reloads tables so it shows user name in them
        this.app.ngOnInit()
        this.approved = true;
        break;
      }
    }
    if (!this.approved) {
      this.badPin();
      return false
    }
   
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
  /**
   * Brings up a dialog to change the pins of any people in the table
   * @param $event $event object
   */
  editPin($event) {
    if ($event.ctrlKey) {
      const dialogConfig = new MatDialogConfig(); //options for dialog boxes
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(ChangepinComponent, dialogConfig); //open the keypad 
      dialogRef.afterClosed().subscribe(data => {
      this.enteredPin = data; this.ngOnInit();  //revalidate the pin after dialog is closed
      });
    }
  }
}
