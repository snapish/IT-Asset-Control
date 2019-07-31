import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router/";
import { HttpClient, HttpParams } from '@angular/common/http';
import { FirestoreService } from '../firestore.service';
import { CookieService } from 'ngx-cookie-service';
import { PinComponent } from '../pin/pin.component';
import { async } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})

export class ScanComponent implements OnInit {
  param1 = "";
  newID = 0;


  constructor(private afs: AngularFirestore, private db: FirestoreService, private cookie: CookieService, private pin: PinComponent) {

  }
  urlParams;
  ngOnInit() {
    this.urlParams = this.getParams()
      
   
      this.sendUrlQueue();
 
  }
 

  /**
   * Gets the parameters in the URL
   */
   getParams() {
    const url = window.location.href;
    let paramValue = [];
    if (url.includes('?')) { //if the url has paramaters
      var count = (url.match(new RegExp("&", "g")) || []).length + 1 //get the number ofparams
      var httpParams = new HttpParams({ fromString: url.split('?')[1] }); //get the params
      for (let ind = 1; ind < count + 1; ind++) {//for ech param
        var p: string = "param" + ind 
        paramValue.push(httpParams.get(p))
        httpParams = new HttpParams({ fromString: url.split('&')[ind] });
      }
    }
    return paramValue;
  }
  /**
   * Gets the URL parameters, and adds the item into the queue with the quantity but only if it exists in the inventory. 
   */
  sendUrlQueue() {
    this.delay(1500).then(() => { //wait for page to load basically
var exists = false; 
var match ;
      let colRef = this.afs.collection('Inventory');
    let qry = colRef.ref.get()
      .then(snapshot => {
        snapshot.forEach(doc => { 
          if (doc.data().Name == this.urlParams[0]) { //find a matching doc in the inv
            exists = true;
            match = doc.data()
          }
        });
      }).then(() =>{
        if (this.urlParams.length == 2 && exists){ //need 2 params. Name, quantity
          while (!this.pin.approved) {
            if (this.db.newID == 0) {
              this.db.newID = 1;
            }
            this.db.queueEntry(this.urlParams[0], this.urlParams[1], this.cookie.get("User"), this.db.newID, match.Serial) //the name of the item, the quantity, who done it, the id, and the serial #
            break;
          }
        }
      })
    })
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
}
}
