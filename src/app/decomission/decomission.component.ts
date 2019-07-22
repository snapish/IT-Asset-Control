import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { ExportComponent } from '../export/export.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-decomission',
  templateUrl: './decomission.component.html',
  styleUrls: ['./decomission.component.css']
})
export class DecomissionComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  editMode = false;
  items;
  decomSource;
  constructor(private exp: ExportComponent, private firestore: FirestoreService, private cookie: CookieService, private db: AngularFirestore) { }

  ngOnInit() {
    var date = new Date();
    var user = this.cookie.get("User")
    this.firestore.getDecom().subscribe(data => { this.items = data; this.decomSource = new MatTableDataSource(data); this.decomSource.sort = this.sort; });
  }

  displayColumns = ['Name', 'Quantity','Location', 'User', 'Notes', 'Date', 'Actions', ];
  exportAsCSV(table) {
    this.exp.convertToCSV(table);
  }
  exportAsJSON(table) {
    this.exp.convertToJSON(table);
  }
  applyFilter(filterValue: string) {
    this.decomSource.filter = filterValue.trim().toLowerCase();
  }
  recomission($event, item) {
    var deleted = false;
    var docFound = false;;
    let colRef = this.db.collection('Decomission');
    let invRef = this.db.collection('Inventory');
    let qry = colRef.ref.get().then(snapshot => { // for each doc in decom
      snapshot.forEach(doc => {

        if (doc.data().Name == item.Name && doc.data().Serial == item.Serial && doc.data().Location == item.Location && doc.data().Notes == item.Notes) { //match the doc to the item
          invRef.ref.get().then(snap => {
            console.log('yaw')
            snap.forEach(invDoc => { // for each inventory item
              if (invDoc.data().Name == item.Name) {
                var qty = parseInt(item.Quantity) + parseInt(invDoc.data().Quantity)
                if (!deleted) {
                  invDoc.ref.update({
                    Quantity: qty
                  })
                  doc.ref.delete()
                  docFound = true;
                  deleted = true
                }
              }
            })
          }).then(a =>{
            if (!docFound) {
              var del = confirm("Item not found in Inventory. Do you want to delete it?")
              if (del) {
                let colRef = this.db.collection('Decomission');
                let qry = colRef.ref.get().then(snapshot => {
                  snapshot.forEach(doc => {
                    if (doc.data().Name == item.Name && doc.data().Serial == item.Serial && doc.data().Location == item.Location && doc.data().Notes == item.Notes) {
                      doc.ref.delete();
                    }
                  })
                })
              }
            }
          })
        }
      })
      
      })
    }
  deleteRow($event, item) {

    let colRef = this.db.collection('Decomission');
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log(item.Name)
        if (doc.data().Name == item.Name && doc.data().Serial == item.Serial && doc.data().Location == item.Location && doc.data().Notes == item.Notes) {
          doc.ref.delete();
        }
      })
    })

  }
  saveChanges() {
    var allboxes = $('.editbox')
    var allboxesArr = $('.editbox').toArray()
    var badEntryFlag = false;
    var container = []
    allboxes.each(v => {
      var boxVal = $($('.editbox')[v]).val().toString()
      if ($($('.editbox')[v]).hasClass('notesbox') && !/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal)) {
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ')
      } else if ($($('.editbox')[v]).hasClass('notesbox')){
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

      if ($($('.editbox')[v]).hasClass('locationbox') && (!/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal))) {//lol, serial box
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ')
      } else if ($($('.editbox')[v]).hasClass('locationbox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

      if ($($('.editbox')[v]).hasClass('namebox') && (!/^[0-9A-Za-z\s\-\_\/]+$/.test(boxVal) || boxVal.trim() == "")) {//if we're talking to the name box, and the string is contains non-alphanumeric chars, and its empty
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red')
      } else if ($($('.editbox')[v]).hasClass('namebox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

      if ($($('.editbox')[v]).hasClass('quantitybox') && !/^[0-9]+$/.test(boxVal)) {// quantity must be a number and nothing else
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ')
      } else if ($($('.editbox')[v]).hasClass('quantitybox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

     

      if ($($('.editbox')[v]).hasClass('datebox') && /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(boxVal)) {//im too tired to make my own regex for this, heres one i found on stackoverflow. Matches dates
        badEntryFlag = true;
        $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red')
      } else if ($($('.editbox')[v]).hasClass('datebox')) {
        $($('.editbox')[v]).css('box-shadow', 'none')
      }

    })
    if (!badEntryFlag) {
      console.log('full send boys')
      var ind = 0;

      for (let x = 0; x < allboxesArr.length; x += 5) {
        var temp = []
        temp.push($(allboxesArr[x]).val().toString())
        temp.push(parseInt($(allboxesArr[x + 1]).toString()))
        temp.push($(allboxesArr[x + 2]).val().toString())
        temp.push($(allboxesArr[x + 3]).val().toString())
        temp.push($(allboxesArr[x + 4]).val())

        container.push(temp)
      }

      console.log(container)
      let colRef = this.db.collection('Decomission'); //from the inventory
      let qry = colRef.ref.get().then(snapshot => {
        snapshot.forEach(doc => { //for each doc. A row is a doc in this scenario, this was a huge realization https://i.ytimg.com/vi/LLpIMRowndg/maxresdefault.jpg
          for (let x = 0; x < container.length; x++) {
            if (container[x][0] == doc.data().Name) {
              doc.ref.update({
                Name: $(allboxesArr[ind]).val().toString(),
                Quantity: parseInt($(allboxesArr[ind + 1]).val().toString()),
                Location:  $(allboxesArr[ind + 2]).val().toString(),
                Notes: $(allboxesArr[ind + 3]).val().toString(),
                Date: firebase.firestore.Timestamp.fromDate(new Date(Date.parse(($(allboxesArr[ind + 4]).val().toString())))),
             

              })
            }
          }
          ind += 5 //go to next row
        })
      })
      alert('Decom updated!')
      this.editMode = false;
    }
  }
}
