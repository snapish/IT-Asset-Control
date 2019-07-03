import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore.service';
import { Items } from './Items';
import { MatTableModule, MatDialog} from '@angular/material'
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { LocationService } from '../location.service';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'inventory',
 templateUrl: './inventory.component.html',
 styleUrls: ['./inventory.component.css'],
  
})

export class InventoryComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort; 
  items : Items[];
  itemsource;
  displayColumns = ['Name', 'Quantity','Description', 'LastRestock', 'LastRestockQuantity', 'Serial', 'Restock'];

  constructor(private db: AngularFirestore,public firebaseService: FirestoreService, private dialog: MatDialog, private loc: LocationService, private cookie : CookieService) {  }

  ngOnInit() {
    
    this.firebaseService.getInventory().subscribe(data => {this.items = data; this.itemsource = new MatTableDataSource(data);this.itemsource.sort = this.sort;});
    //this.firebaseService.getQueue();
  }

   scaleColor(qty:number, last:number) {
     
    var perc = (qty/last) * 100
    if(perc >= 85){
      return "#00ff00"
    }
    if(perc >= 70){
      return "#6fff00"
    }
    if(perc >= 55){
      return "#bcff00"
    }
    if(perc >= 40){
      return "#fff700"
    }
    if(perc >= 25){
      return "#ffc400"
    }
    if(perc >= 10){
      return "#ff7700"
    }
    return "#ff0000"
  }

  queueItem(e, name: string, qty: number):any{
    var newID = 0;
    let colRef = this.db.collection('Queue');
    let qry = colRef.ref.orderBy('ID','asc').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if(doc.data().ID > newID ){
            newID = doc.data().ID + 1;
          }
        });
      })
      this.firebaseService.queueEntry(name, qty, this.cookie.get("User"), newID);
 
  }
  applyFilter(filterValue: string) {
    this.itemsource.filter = filterValue.trim().toLowerCase();
  }
  restock(e: any){
    this.firebaseService.getQueue();
    var s:string = (e.currentTarget.attributes['id'].value); 
    var a = s.split(' ');
    var qty;
   qty = prompt("How many are you buying", "1");
    if (qty != null && qty != 0 && qty > 0) {
     qty = parseInt(qty); // gets number from box
    var url = a[0];
    var name = a[1];
    this.firebaseService.restockEntry(name, qty)
    //this.firebaseService.getInventory().
    window.open(url) 
    }
    else if(qty != null){ //alert box returns null on cancel
      alert("Bad entry try again sir")
    }
  }
}
