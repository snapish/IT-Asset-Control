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
  constructor(private Firestore: FirestoreService) {
    
   }

  ngAfterViewInit() {

  }

  createTextBoxes(n: number): any {
    var br = document.createElement("br");//make a new line node
    document.getElementById("boxesDiv").appendChild(br); //add it to whatever element
    var node;
    for (let index = 0; index < n; index++) { //make N text boxes
      node = document.createElement("input")//.setAttribute("class","input"); // of type input 
     node.setAttribute("class", "input");
      //node.setAttribute("value", "");
      document.getElementById("boxesDiv").appendChild(node); //slap them onto the element with that ID
      
    }
    document.getElementsByClassName("input")[0].setAttribute('placeholder', 'Item Name');
    document.getElementsByClassName("input")[1].setAttribute('placeholder', 'Quantity');
    document.getElementsByClassName("input")[2].setAttribute('placeholder', 'Description');
    document.getElementsByClassName("input")[3].setAttribute('placeholder', 'Serial Number');
    document.getElementsByClassName("input")[4].setAttribute('placeholder', 'URL ("g" for google)');
  /*  document.getElementsByClassName("input")[0].setAttribute('class', 'input');
    document.getElementsByClassName("input")[1].setAttribute('class', 'input');
    document.getElementsByClassName("input")[2].setAttribute('class', 'input');
    document.getElementsByClassName("input")[3].setAttribute('class', 'input');
    document.getElementsByClassName("input")[4].setAttribute('class', 'input');
*/

    // on key down events lie below


    document.addEventListener('keydown', function ($event) { //keydown to make next line work
      var arr = document.getElementsByClassName('input');// make an html collection
      $('.input').each(function(){console.log($(this).val())} )
      // console.log(arr)
      // console.log(document.getElementsByClassName('input')[4])
      // //add check if its url box
      // console.log(arr.length)


      /*note to skippy: might be better to do a check if the focused html element thing is on
      a textbox with the classname URL*/
      if ($event.key == "Backspace" || $event.key == 'Delete') { // if they pressed a get-rid-of-character-button
        for (let i = 4; i < arr.length; i += 5) { //check every 5th box, starting at the URL box, for 
          if (document.getElementsByClassName('input')[i].getAttribute("value") == "Google Search") {
            document.getElementsByClassName('input')[i].setAttribute("value", ""); //change it to nothing 
          }
        }
      }


      if ($event.key == "Tab") { // if the key they pressed was tab
        var filledCount = 0; // for counting how many text boxes have something in them
        for (let i = 4; i < arr.length; i += 5) { //check every 5th box, starting at the URL box
          if (document.getElementsByClassName('input')[i].getAttribute("value") == "g") {
            console.log("saw g was in google search box")
            document.getElementsByClassName('input')[i].setAttribute("value", "Google Search"); //filler
          }
        }

        for (let index = 0; index < arr.length; index++) { //check every text box
          console.log(document.getElementsByClassName("input")[index].getAttribute("value"));

          if (arr[index].getAttribute("value") != null) { // if it has something in it
            filledCount++; // tick this up one
            console.log("count++")
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
          //down here is just setting class names and placeholder text
          arr = document.getElementsByClassName('input'); //temp array getting all the text boxes
          console.log(arr)
          for (let x = 0; x < arr.length; x += 5) {
            document.getElementsByClassName("input")[x].setAttribute('class', 'name');
            document.getElementsByClassName("input")[x].setAttribute('placeholder', 'Item Name');
            document.getElementsByClassName("input")[x + 1].setAttribute('class', 'input');
            document.getElementsByClassName("input")[x + 1].setAttribute('placeholder', 'Quantity');
            document.getElementsByClassName("input")[x + 2].setAttribute('class', 'input');
            document.getElementsByClassName("input")[x + 2].setAttribute('placeholder', 'Description');
            document.getElementsByClassName("input")[x + 3].setAttribute('class', 'input');
            document.getElementsByClassName("input")[x + 3].setAttribute('placeholder', 'Serial Number');
            document.getElementsByClassName("input")[x + 4].setAttribute('class', 'input');
            document.getElementsByClassName("input")[x + 4].setAttribute('placeholder', 'Order URL ("g" for google)');
          }
        }
      }
    }); //end event handeler
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
    if (inputArray.length > 5) {
      if ((inputArray[inputArray.length - 1].value == "" && inputArray[inputArray.length - 2].value == "" && inputArray[inputArray.length - 3].value == "" && inputArray[inputArray.length - 4].value == "" && inputArray[inputArray.length - 5].value == "")) {
        //remove the last 5 boxes on the page before continuing
        for (let ind = 0; ind < 5; ind++) {
          document.getElementsByClassName('input')[document.getElementsByClassName('input').length - 1].remove();
        }
      }
    }
    inputArray = document.querySelectorAll('input'); // reset it, in the case a row got removed 
    for (let index = 0; index < inputArray.length; index++) {
      //text box must contain letters, numbers, dashes, spaces, no emojis ERICK (-_-)
      if (/^[0-9A-Za-z\s\-\_]+$/.test(document.getElementsByClassName('input')[index].getAttribute("value")) && document.getElementsByClassName('input')[index].getAttribute("value") != "") {
        textboxContent.push(document.getElementsByClassName('input')[index].getAttribute("value")); //add that value to the array of values
        document.getElementsByClassName('input')[index].setAttribute("style", "background-color: white"); //set it to white, if it was previously red, no spoilers but thats coming up soon
      }
      else if (document.getElementsByClassName('input')[index].getAttribute("value") == "" && document.getElementsByClassName('input')[index].className != "URL") { //if the box was blank
        document.getElementsByClassName('input')[index].setAttribute("style", "background-color: red"); //set it to red 
        badEnrtyFlag = true; // flag for l8r
        break;//get out of loop because something is messed up no point going on just like life
      }

    }
    if (!badEnrtyFlag) { // if all the entries were fine
      var query = "";
      for (let i = 0; i < inputArray.length; i += 5) { // not i++, working with groups of 5 boxes
        if (inputArray[i + 4].value == "Google Search") {
          temp = inputArray[i].value.replace(" ", "-");
          query = "https://google.com/search?q=" + temp;
        }
        else {
          query = inputArray[i + 4].value;
        }
        qtyEntry = parseInt(inputArray[i + 1].value); //change qty textbox to a number 
        this.Firestore.inventoryEntry( //enter into db
          inputArray[i].value,
          qtyEntry,
          inputArray[i + 2].value,
          inputArray[i + 3].value,
          query);

      }
    }
  }


}
