import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit, Input, ViewEncapsulation, HostBinding, Directive, ElementRef, AfterViewInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { delay, reject } from 'q';
import * as $ from 'jquery';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  encapsulation: ViewEncapsulation.None //for the css file to see elements added later than load time
})

export class AddComponent implements AfterViewInit {

  //something i wanted to do was get it to auto add values based on the database, not sure if time
  constructor(private Firestore: FirestoreService, private afs: AngularFirestore) {

  }
  temp: any = [];
  ngAfterViewInit() {

  }

  createTextBoxes(n: number): any {
    var br = document.createElement("br");//make a new line node
    document.getElementById("boxesDiv").appendChild(br); //add it to whatever element
    var node;
    for (let index = 0; index < n; index++) { //make N text boxes
      node = document.createElement("input")// of type input 
      node.setAttribute("class", "input");
      $('#boxesDiv').append(node); //slap them onto the element with that ID

    }
    $('.input')[0].setAttribute('placeholder', 'Item Name');
    $('.input')[0].addEventListener('keyup', ($event) => this.suggestByName($event))
    $('.input')[1].setAttribute('placeholder', 'Quantity');
    $('.input')[2].setAttribute('placeholder', 'Description');
    $('.input')[3].setAttribute('placeholder', 'Serial Number');
    $('.input')[4].setAttribute('placeholder', 'URL ("g" for google)');

    $('#confirmed').hide()


    // on key down events lie below
    
    
    document.addEventListener('keydown', ($event) => {  //keydown to make next line work
      var arr = $('.input:enabled').toArray();// make an html collection
      if ($event.key == "Backspace" || $event.key == 'Delete') { // if they pressed a get-rid-of-character-button
        $('.input').each(function () { //for each input box
          if ($($event.target).val() == "Google Search") { // if the box text is google search
            $($event.target).val(""); //set it to nothing
          }
        })
      }
      
      if ($event.key == "Tab") { // if the key they pressed was tab
        var filledCount = 0; // for counting how many text boxes have something in them
        $('.input').each(function () {
  
          if ($(this).val() == "g") { // if the box text is g
            $(this).val("Google Search"); //set it to google search
          }
          if ($(this).val() != "") { // if the box text has osmething in it
            filledCount++; // tick this up one
          }
        })
      }
      if (filledCount == arr.length) { //if all the boxes had something in them
        var br = document.createElement("br");//make a new line node

        $('#boxesDiv').append(br);
        for (let index = 0; index < 5; index++) { //make 5 text boxes
          var node = document.createElement("input"); // of type input
          $(node).addClass('input');
          $('#boxesDiv').append(node)
        }
        //down here is just setting class names and placeholder text
       // arr = document.getElementsByClassName('input'); //temp array getting all the text boxes
        var arr1 = $('.input:enabled').toArray(); //temp array getting all the text boxes
        for (let x = 0; x < arr1.length; x += 5) {
          $('.input')[x].addEventListener('keyup', ($event) => this.suggestByName($event))
          $('.input')[x].setAttribute('placeholder', 'Item Name');
          $('.input')[x + 1].setAttribute('placeholder', 'Quantity');
          $('.input')[x + 2].setAttribute('placeholder', 'Description');
          $('.input')[x + 3].setAttribute('placeholder', 'Serial Number');
          $('.input')[x + 4].setAttribute('placeholder', 'Order URL ("g" for google)');
        }
      }
    }) //end event handeler

  }
  // delays for ms 
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log());
  }
  suggestByName($event) {
    var inp = $($event.target).val().toString()

    if ($event.keyCode != 13) {
      $('#autofill').attr('placeholder', '')
      if (/[a-zA-Z0-9-_ ]/.test(inp)) { // if the key pressed was a number letter space hyphen or letter
        this.temp = [];
        if ($('#autofill').length == 0) {
          var node = document.createElement('input')
          node.className = 'placeholder'
          node.disabled = true
          node.id = "autofill"
          $('#autofillDiv').append(node)
        }
        let colRef = this.afs.collection('Inventory');
        let qry = colRef.ref.get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              if (doc.data().Name.startsWith(inp)) {
                this.temp.push(doc.data())
              }
            });
          }).then(() => {
            if (this.temp[0] != undefined)
              $('.placeholder').val(this.temp[0].Name)
          })

      }
    }
    else {

      if (this.temp[0] != null) {
        $($event.target).val(this.temp[0].Name) 
        $($event.target).next('.input').next('.input').val(this.temp[0].Description).next('.input').val(this.temp[0].Serial).next('.input').val(this.temp[0].OrderUrl)
        $($event.target).next('.input').focus()
      }
    }

    //called every time key down
    //jquery get textbox value, check if something contains it in inventory
    //create an input thats disabled with the text of whatever it contains
    //if they press tab, it gives that text to the parent input
  }
  addToInv() {
    var badEnrtyFlag = false;
    var qtyEntry = 0;
    var inputArray = document.querySelectorAll('input'); // something to iterate (not to be confused with integrate) with respect to
    var query = "";
    var temp = "";
    //checking if the last 5 boxes are empty
    if (inputArray.length > 5) {
      if ((inputArray[inputArray.length - 1].value == "" && inputArray[inputArray.length - 2].value == "" && inputArray[inputArray.length - 3].value == "" && inputArray[inputArray.length - 4].value == "" && inputArray[inputArray.length - 5].value == "")) {
        //remove the last 5 boxes on the page before continuing
        for (let ind = 0; ind < 5; ind++) {
          // document.getElementsByClassName('input')[document.getElementsByClassName('input').length - 1].remove();
          $('.input')[($('.input').length - 1)].remove();
        }
      }
      console.log($('.input:enabled').toArray()[0].getAttribute('value'))
      inputArray = document.querySelectorAll('input')//$('.input:enabled').toArray(); // reset it, in the case a row got removed 
      for (let index = 0; index < inputArray.length; index++) {
        console.log(index)
        
        //text box must contain letters, numbers, dashes, spaces, no emojis ERICK (-_-)

        if (/^[0-9A-Za-z\s\-\_]+$/.test($('.input:enabled')[index].getAttribute("value")) && $('.input:enabled')[index].getAttribute("value") != "" &&  $('.input:enabled')[index].getAttribute("value") !=null  ) {
          $('.input')[index].setAttribute("style", "background-color: white"); //set it to white, if it was previously red, no spoilers but thats coming up soon
        }
        else if ($('.input')[index].getAttribute("value") == "" && $('.input')[index].className != "URL") { //if the box was blank
          $('.input:enabled')[index].setAttribute("style", "background-color: red"); //set it to red 
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

          inputArray[i].remove();
          inputArray[i + 1].remove();
          inputArray[i + 2].remove();
          inputArray[i + 3].remove();
          inputArray[i + 4].remove();
          $('br').remove()
        }

        $('#confirmed').fadeIn("slow")
        this.delay(2000).then(() => {
          $('#confirmed').fadeOut("slow")

        })

        for (let index = 0; index < 5; index++) { //make 5 text boxes
          var node = document.createElement("input"); // of type input
          $(node).addClass('input');
          $('#boxesDiv').append(node)
        }
        var arr = document.getElementsByClassName('input'); //temp array getting all the text boxes
        for (let x = 0; x < arr.length; x += 5) {

          $('.input')[x].setAttribute('placeholder', 'Item Name')
          $('.input')[x + 1].setAttribute('placeholder', 'Quantity')
          $('.input')[x + 2].setAttribute('placeholder', 'Description')
          $('.input')[x + 3].setAttribute('placeholder', 'Serial Number')
          $('.input')[x + 4].setAttribute('placeholder', 'Order URL ("g" for google)')
        }
      }
    }
  }


}
