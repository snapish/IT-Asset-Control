import { Component, OnInit } from '@angular/core';
import { NgVirtualKeyboardModule } from '@protacon/ng-virtual-keyboard';
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
    if (url.includes('?')) {
      var count = (url.match(new RegExp("&", "g")) || []).length + 1
      var httpParams = new HttpParams({ fromString: url.split('?')[1] });
      for (let ind = 1; ind < count + 1; ind++) {
        var p: string = "param" + ind
        paramValue.push(httpParams.get(p))
        httpParams = new HttpParams({ fromString: url.split('&')[ind] });
      }
    }
    return paramValue;
  }
  sendUrlQueue() {
    this.delay(1500).then(() => {
      if (this.urlParams.length == 3) { //&& this.db.nameExistsInTable('Inventory', this.urlParams[0])
        while (!this.pin.approved) {
          if (this.db.newID == 0) {
            this.db.newID = 1;
          }
          
          this.db.queueEntry(this.urlParams[0], this.urlParams[1], this.cookie.get("User"), this.db.newID, this.urlParams[2]) //the name of the item, the nunmber 
          break;
        }
      }
    })
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
}
}
