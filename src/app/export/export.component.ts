import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
/**
 * Contains all the code for converting table data into a JSON or CSV object and then downloading it. 
 * There is a method for converting and one for exporting/downloading for each format
 */
export class ExportComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }
  /**
   * Exports a table from the database to a JSON file
   * @param toExport name of table to export
   */
  convertToJSON(toExport) {
    let documentArr = []; //temp array
    let colRef = this.db.collection(toExport); // table ref
    let qry = colRef.ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        documentArr.push(doc.data()) //add the document to the array
      })
    }).then(() => { //after the arrray is full
      let data = JSON.stringify(documentArr) //make a Jason string of the doc array
      let uri = 'data:application/json;charset=utf-8,' + encodeURIComponent(data); //some encoding thing idk i found this on the internet
      let exportName = toExport + ".json" //filename
      let linkElement = document.createElement('a'); 
      linkElement.setAttribute('href', uri);
      linkElement.setAttribute('download', exportName); 
      linkElement.click() //runs the href of the element
    })
  }
  /**
   * Converts the table to a csv string, then calls the export function after converting
   * @param toExport Name of the table to be exported
   */
  convertToCSV(toExport) {
    let documentArr = []
    let colRef = this.db.collection(toExport); // table ref
    let qry = colRef.ref.get().then(snapshot => { 
      snapshot.forEach(doc => {
        let tempData = doc.data() //make a mutable version of the data to edit
        if(toExport == 'Inventory'){ //need to do this check because inventory is the only table with a last restock date field
          var newDate  = new Date(parseInt((doc.data().LastRestock.toString().split(','))[0].replace(/\D/g,''))).toDateString() //new date string, from the documents restock date, picked apart for just the seconds
          tempData.LastRestock = newDate; //change the date to a exportable format
        }
        else{//otherwise it has a date, instead of lastrestock
          var newDate  = new Date(parseInt((doc.data().Date.toString().split(','))[0].replace(/\D/g,''))).toDateString() //new date string, from the documents restock date, picked apart for just the seconds
          tempData.Date = newDate; //change the date to a exportable format
        }
        documentArr.push(tempData) //add the document to the array of documents
      })
    }).then(a=>{ // after the document array creation is done
      this.exportToCSV(documentArr, toExport) //full send 
    })
  }
  /**
   * Called by the converted to download the csv file
   * @param data the array of documents being sent
   * @param name name of the table, for file naming
   */
  exportToCSV(data, name){
    const replacer = (key, value) => value === null ? '' : value; 
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var a = document.createElement('a');
    var blob = new Blob([csvArray], {type: 'text/csv' }),
    url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = name+".csv";
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
  
}