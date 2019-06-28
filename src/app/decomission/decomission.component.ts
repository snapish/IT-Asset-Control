import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-decomission',
  templateUrl: './decomission.component.html',
  styleUrls: ['./decomission.component.css']
})
export class DecomissionComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

items;
decomSource ;
  constructor(private firestore: FirestoreService, private cookie : CookieService) { }

  ngOnInit() {
    var date = new Date();
    var user = this.cookie.get("User")
    this.firestore.getDecom().subscribe(data => { this.items = data; this.decomSource = new MatTableDataSource(data); this.decomSource.sort = this.sort; });
   // this.firestore.decomEntry("Name", "Office 2", user, "notes",date );
    console.log(this.cookie.get("User"))
  }
  
  displayColumns = [ 'Name', 'Location', 'User', 'Notes', 'Date',];

}
