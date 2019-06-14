import { Component, OnInit } from '@angular/core';
import {NgVirtualKeyboardModule} from '@protacon/ng-virtual-keyboard';
import { ActivatedRoute } from "@angular/router/";
import { HttpClient,HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})

export class ScanComponent implements OnInit {
param1 = "";

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.param1 = this.route.snapshot.paramMap.get('param1');
    console.log(this.param1)
  //  this.param2 = this.route.snapshot.paramMap.get('param2');
}

}
