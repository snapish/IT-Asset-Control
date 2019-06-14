import { Component, OnInit, Input, ViewEncapsulation, HostBinding, Directive, ElementRef, AfterViewInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { delay } from 'q';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  encapsulation: ViewEncapsulation.None //for the css file to see elements added later than load time
})

export class AddComponent implements AfterViewInit {

  //something i wanted to do was get it to auto add values based on the database, not sure if time
  constructor(private Firestore: FirestoreService) { }

  ngAfterViewInit() {

}

  createTextBoxes(n: number): any { 
    var br = document.createElement("br");//make a new line node
    document.getElementById("boxesDiv").appendChild(br); //add it to whatever element
    var node;
    for (let index = 0; index < n; index++) { //make N text boxes
      node = document.createElement("input"); // of type input 
      document.getElementById("boxesDiv").appendChild(node); //slap them onto the element with that ID
  //  document.getElementsByTagName("input")[index].setAttribute('class', 'txt');
    }
    document.getElementsByTagName("input")[0].setAttribute('placeholder', 'Item Name');
    document.getElementsByTagName("input")[1].setAttribute('placeholder', 'Quantity');
    document.getElementsByTagName("input")[2].setAttribute('placeholder', 'Description');
    document.getElementsByTagName("input")[3].setAttribute('placeholder', 'Serial Number');
    document.getElementsByTagName("input")[4].setAttribute('placeholder', 'URL ("g" for google)');
    document.getElementsByTagName("input")[0].setAttribute('class', 'name');
    document.getElementsByTagName("input")[1].setAttribute('class', 'quantity');
    document.getElementsByTagName("input")[2].setAttribute('class', 'description');
    document.getElementsByTagName("input")[3].setAttribute('class', 'serial');
    document.getElementsByTagName("input")[4].setAttribute('class', 'URL');

    
    // on key up events lie below
    

    document.addEventListener('keydown', function ($event) { //keydown to make next line work
      var arr = document.getElementsByTagName('input');// make an html collection

      if ( $event.key == "Backspace" || $event.key == 'Delete') { // if the key they pressed was tab
        for (let i = 4; i < arr.length; i+=5) { //check every 5th box, starting at the URL box
          if(document.getElementsByTagName('input')[i].value == "Google Search"){
            document.getElementsByTagName('input')[i].value = ""; //change it to nothing 
          } 
        }
      }


      if ( $event.key == "Tab") { // if the key they pressed was tab
        var filledCount = 0; // for counting how many text boxes have something in them
        for (let i = 4; i < arr.length; i+=5) { //check every 5th box, starting at the URL box
          if(document.getElementsByTagName('input')[i].value == "g"){
            document.getElementsByTagName('input')[i].value = "Google Search"; //filler
          } 
        }
        
        for (let index = 0; index < arr.length; index++) { //check every text box
          if (arr[index].value != "") { // if it has something in it
            filledCount++; // tick this up one
          }
        }
        if (filledCount == arr.length) { //if all the boxes had something in them
          var br = document.createElement("br");//make a new line node
          document.getElementById("boxesDiv").appendChild(br); //add it to whatever element
          var node;
          for (let index = 0; index < 5; index++) { //make 5 text boxes
            node = document.createElement("input"); // of type input 
            document.getElementById("boxesDiv").appendChild(node); //slap them onto the element with that ID
          }
          arr = document.getElementsByTagName('input'); //temp array getting all the text boxes
          for (let x = 0; x < arr.length; x+=5) { 
            document.getElementsByTagName("input")[x].setAttribute('class', 'name');
            document.getElementsByTagName("input")[x].setAttribute('placeholder', 'Item Name');
            document.getElementsByTagName("input")[x+1].setAttribute('class', 'quantity');
            document.getElementsByTagName("input")[x+1].setAttribute('placeholder', 'Quantity');
            document.getElementsByTagName("input")[x+2].setAttribute('class', 'description');
            document.getElementsByTagName("input")[x+2].setAttribute('placeholder', 'Description');
            document.getElementsByTagName("input")[x+3].setAttribute('class', 'serial');
            document.getElementsByTagName("input")[x+3].setAttribute('placeholder', 'Serial Number');
            document.getElementsByTagName("input")[x+4].setAttribute('class', 'URL');
            document.getElementsByTagName("input")[x+4].setAttribute('placeholder', 'Order URL');
          }
        }
      }
    });
  }

  // delays for ms 
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log()); 
  }

  addToInv() {
    var badEnrtyFlag = false;
    var qtyEntry = 0;
    var inputArray = document.querySelectorAll('input'); // something to iterate with respect to
    var textboxContent = []; // array to fill with textbox content
    var query = "";
    var temp = "";
    //checking if the last 5 boxes are empty
    if(inputArray.length > 5){
    if( (inputArray[inputArray.length-1].value =="" && inputArray[inputArray.length-2].value =="" && inputArray[inputArray.length-3].value =="" && inputArray[inputArray.length-4].value =="" && inputArray[inputArray.length-5].value =="")){
        //super tired when i wrote this it can probably get cleaned up
      document.getElementsByTagName('input')[document.getElementsByTagName('input').length -1].remove();  
      document.getElementsByTagName('input')[document.getElementsByTagName('input').length -1].remove();  
      document.getElementsByTagName('input')[document.getElementsByTagName('input').length -1].remove();  
      document.getElementsByTagName('input')[document.getElementsByTagName('input').length -1].remove();  
      document.getElementsByTagName('input')[document.getElementsByTagName('input').length -1].remove();  
    }
  }
    inputArray = document.querySelectorAll('input'); // reset it, in the case a row got removed 
    for (let index = 0; index < inputArray.length; index++) {
      //text box must contain letters, numbers, dashes, spaces, no emojis
      if (/^[0-9A-Za-z\s\-\_]+$/.test(document.getElementsByTagName('input')[index].value) && document.getElementsByTagName('input')[index].value != "") {
        textboxContent.push(document.getElementsByTagName('input')[index].value); //add that value to the array of values
        document.getElementsByTagName('input')[index].setAttribute("style", "background-color: white"); //set it to red 
      }
      else if (document.getElementsByTagName('input')[index].value == "" && document.getElementsByTagName('input')[index].className != "URL") { //if the box was blank
        document.getElementsByTagName('input')[index].setAttribute("style", "background-color: red"); //set it to red 
        badEnrtyFlag = true; // flag for l8r
        break;//get out of loop because something is messed up no point going on just like life
      }

    }
    if (!badEnrtyFlag) { // if all the entries were fine
      var query = "";
      for (let i = 0; i < inputArray.length; i+=5) { // not i++, working with groups of 5 boxes
        if(inputArray[i+4].value == "Google Search"){ 
        temp = inputArray[i].value.replace(" ", "-");
        query= "https://google.com/search?q=" + temp;
        }
        else{
          query = inputArray[i+4].value;
        }
        qtyEntry = parseInt(inputArray[i+1].value); //change qty textbox to a number 
        this.Firestore.inventoryEntry( //enter into db
          inputArray[i].value,
           qtyEntry, 
           inputArray[i+2].value, 
           inputArray[i+3].value, 
           query );
      
      }
    }
  }


}
