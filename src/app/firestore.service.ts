import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction,
  Action,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists,
} from 'angularfire2/firestore';
import { Observable, from, observable } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { DatePipe } from '@angular/common';
import { Items } from './inventory/Items';



@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  mydate = new Date();
  x;
  test : any;
  items: Observable<any[]>;
  itemCollection : AngularFirestoreCollection;
  
  restocks : Observable<any[]>;
  restockCollection : AngularFirestoreCollection;
  
  queueItems : Observable<any[]>;
  queueCollection : AngularFirestoreCollection;
  
  constructor(private db: AngularFirestore, private datePipe: DatePipe) {
    this.items = db.collection('Inventory').valueChanges();
    this.restocks = db.collection('Restock').valueChanges();
    this.restockCollection = this.db.collection('Restock');
    this.itemCollection = this.db.collection('Inventory');
    this.queueCollection = this.db.collection('Restock');
    this.queueItems = this.db.collection('Queue').valueChanges();
  }

  inventoryEntry(name: string, qty: number, desc: string, issn: string, orderUrl: string) {
    return this.db.collection('Inventory').add({
      Name: name,
      Description: desc,
      LastRestock: this.mydate,
      LastRestockQuantity: 0,
      Quantity: qty,
      Serial: issn,
      OrderUrl: orderUrl
    });
  }
  restockEntry(name: string, qty: number){
    
//typesafe checks go here
    return this.db.collection('Restock').add({
      Name: name,
      Quantity: qty,
      Date: this.mydate
    });
  }

      //  console.log(this.db.collection('Inventory').doc("eiwef").update({Name: "cookout"}) ) ;
      //  console.log(this.db.collection('Inventory' , ref => ref.where('Name', '>=', 'cookout').where('Name' , '<=', 'cookout' + '\uf8ff')).snapshotChanges());


  queueEntry(direction: string, loc: string, name: string, notes: string, qty: number, user: string){
    
    return this.db.collection('Queue').add({
      Date: this.mydate,
      InOut: direction,
      Location: loc,
      Name: name,
      Notes: notes,
      Quantity: qty,
      User: user,
    });
  }
  getQueue(){
    // console.log(this.db.collection('Inventory', ref => ref.where("Name", '==' , 'Test')))
    // console.log(this.db.collection<object>("Invetory", ref => ref.where("Name", "==", "Test")).doc);

  //this.items.forEach(a => {console.log(a[0].Description)})
     //Array.from(this.db.collection('Inventory' , ref => ref.where('Name', '==', 'Test')).snapshotChanges())
    return this.queueItems;
  }
  getInventory(){
  //  console.log(this.items);
   return this.items;
  }
  getRestock(){
    return this.restocks;
  }


}