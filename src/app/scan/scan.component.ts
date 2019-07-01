import { Component, OnInit } from '@angular/core';
import { NgVirtualKeyboardModule } from '@protacon/ng-virtual-keyboard';
import { ActivatedRoute } from "@angular/router/";
import { HttpClient, HttpParams } from '@angular/common/http';
import { FirestoreService } from '../firestore.service';
import { CookieService } from 'ngx-cookie-service';
import { PinComponent } from '../pin/pin.component';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})

export class ScanComponent implements OnInit {
  param1 = "";

  constructor(private db: FirestoreService, private cookie: CookieService, private pin: PinComponent) {

  }
  urlParams;
  ngOnInit() {
    this.urlParams = this.getParams();
    console.log("Paramaters: ", this.urlParams)

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
  async sendUrlQueue() {
    console.log(this.pin.approved)
    if (this.urlParams.length == 2 && this.db.nameExistsInTable('Inventory', this.urlParams[0])) {
      while (!this.pin.approved) {
        this.db.queueEntry(this.urlParams[0], this.urlParams[1], this.cookie.get("User"))
        break;
      }
    }
  }
}
