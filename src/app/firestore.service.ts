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
  
  manageItems : Observable<any[]>;
  manageCollection : AngularFirestoreCollection;
  
  decomItems : Observable<any[]>;
  decomCollection : AngularFirestoreCollection;
  
  constructor(private db: AngularFirestore, private datePipe: DatePipe) {
    this.items = db.collection('Inventory').valueChanges();
    this.restocks = db.collection('Restock').valueChanges();
    this.restockCollection = this.db.collection('Restock');
    this.itemCollection = this.db.collection('Inventory');
    this.queueCollection = this.db.collection('Restock');
    this.manageCollection = this.db.collection('Manage');
    this.decomCollection = this.db.collection('Decomission');
    this.queueItems = this.db.collection('Queue').valueChanges();
    this.manageItems = this.db.collection('Manage').valueChanges();
    this.decomItems = this.db.collection('Decomission').valueChanges();
    
  }
  /**
   * Add an entry into the Invetory table 
   * @param name Name of item getting sent to inventory
   * @param qty How many youre adding
   * @param desc Description of the item
   * @param issn Serial number
   * @param orderUrl URL you want reorder button to go to
   */
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


  queueEntry(name: string, qty: number, user: string){
    return this.db.collection('Queue').add({
      Date: this.mydate,
      Name: name,
      Quantity: qty,
      User: user,
    });
  }
  manageEntry(itemName:string, user: string, location: string, notes :string, quantity: number){
    //would be good to have a query to check if an item of that same name exists at that location
    //and if so, just bump qty instead of new entry
    return this.db.collection('Manage').add({
      Name : itemName,
      Quantity: quantity,
      Location: location,
      Notes: notes,
      User: user
    })
  }
  decomEntry(name: string, location :string, user : string, notes: string, date: Date){
    return this.db.collection('Decomission').add({
      Name: name,
      Location: location,
      User: user,
      Notes: notes,
      Date: date

    })
  }
  getManage(){
    return this.manageItems;
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
  getDecom(){
    return this.decomItems;
  }
  decomission(){
    //ask for a reason why
    //remove from inventory, and manage
    //either remove it or cut and paste into decom table
  }

}