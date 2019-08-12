import { PinComponent } from './../pin.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { QueueComponent } from 'src/app/queue/queue.component';

@Component({
  selector: 'app-changepin',
  templateUrl: './changepin.component.html',
  styleUrls: ['./changepin.component.css']
})
/**
 * handles the editing of pins in the db, thats it. Resets logged in cookie person after you update a pin
 */
export class ChangepinComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ChangepinComponent>, private db: AngularFirestore, private cookie: CookieService, private queue: QueueComponent) { }
  people = []
  pins = []
  ngOnInit() {
    let colRef = this.db.collection('Pins'); //from the pins
    let qry = colRef.ref.get().then(snapshot => { 
      snapshot.forEach(doc => {
        this.people.push(doc.data().Name); //fill the arrays
        this.pins.push(doc.data().Pin); //filling the arrays still
      })
    })
  }
  close() {
    this.dialogRef.close();
   
  }
  update(person, index) {
    var newInd = (parseInt(index) * 2) + 1 
    var oldInd = (parseInt(index) * 2)
    var newPin = $($('.pinbox')[newInd]).val()
    var oldPin = $($('.pinbox')[oldInd]).val()
    var success = false;
    if (/^[0-9]{4,4}$/.test(newPin.toString())) { //must be 4 digits 


      let colRef = this.db.collection('Pins'); //from the pins
      let qry = colRef.ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          if (person == doc.data().Name) {  //find the person we talking to
            if (parseInt(doc.data().Pin) == oldPin) { //my brain tells me to separate these for some reason
              $($('.pinbox')[oldInd]).css('box-shadow: none')
              doc.ref.update({
                Pin: newPin
              })
              $($('.pinbox')[newInd]).val("")
              $($('.pinbox')[oldInd]).val("")
              success=true
              this.cookie.deleteAll()
            }
            else{
              $('.message').hide()
              $('.message').text("Current pin of " + person + " is incorrect")
              $('.message').fadeIn(300)
            }
            
          }
        })
      }).then( () =>{   
        if(success){
        $('.message').hide()
        $('.message').text("Updated " + person + "\'s pin to " + newPin)
        $('.message').fadeIn(300)
      }})
    }
    else {
      $('.message').hide()
      $('.message').text("New PIN must be 4 numbers long")
      $('.message').fadeIn(300)
    }
 
  }
}
