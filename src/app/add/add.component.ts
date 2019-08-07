import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit, Input, ViewEncapsulation, HostBinding, Directive, ElementRef, AfterViewInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { delay, reject } from 'q';
import * as $ from 'jquery';
import { $$ } from 'protractor';
import * as firebase from 'firebase';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  encapsulation: ViewEncapsulation.None //for the css file to see elements added later than load time
})

export class AddComponent implements AfterViewInit {

  constructor(private Firestore: FirestoreService, private afs: AngularFirestore) {

  }
  addingToInv = false; //for button disabling, stops rapid clicking to mess up adding
  id = 0;
  suggestArr: any = [];
  ngAfterViewInit() {

  }

  /**
   * Appends n textboxes to the current documents element "boxesDiv"
   * @param n How many text boxes to create
   */
  createTextBoxes(n: number): any {
    var br = document.createElement("br");//make a new line node
    $('#boxesDiv').append(br);
    var node;
    for (let index = 0; index < n; index++) { //make N text boxes
      node = document.createElement("input")// of type input 
      node.setAttribute("class", "input");
      $('#boxesDiv').append(node); //slap them onto the element with that ID

    }
    $('.input')[0].setAttribute('placeholder', 'Item Name');
    $('.input')[0].addEventListener('keyup', ($event) => this.suggestByName($event)) //add auto suggest to the name box
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
        var filledCount = 0; // for counting how many text boxes have a value
        $('.input').each(function () {

          if ($($event.target).val().toString().toLowerCase() == "g" && $($event.target).attr('placeholder').includes('URL')) { // if the box text is "g"
            $($event.target).val("Google Search"); //set it to google search
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
        for (let x = 0; x < $('.input:enabled').toArray().length; x += 5) { //loop over allt he boxes. x+=5 because theres 5 boxes
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
  /**
   * Gets the value of the event target, and checks if there's
   * an entry in the database that starts with that value, then returns
   * the first database entry in alphabetical order
   * @param $event The event object. Normally just pass "$event" (no quotes) 
   */
  suggestByName($event) {

    var inp = $($event.target).val().toString().toUpperCase() // the value of the text box 
    if ($event.keyCode != 13 || $event.keyCode == 8) { // every key press that isnt enter
      this.suggestArr = []; // reset it every time, no leftovers
      $('#autofill').attr('placeholder', '')  //reset again
      if (/[a-zA-Z0-9-_ ]/.test(inp)) { // if the key pressed was a number letter space hyphen or letter
        if ($('#autofill').length == 0) { //if the autofill thing doesn't exist yet (length ==0 is only true when it doesn't exist)
          var node = document.createElement('input')
          node.className = 'placeholder'
          node.disabled = true
          node.id = "autofill"
          $('#autofillDiv').prepend(node)
        }
        let colRef = this.afs.collection('Inventory'); //talking to inventory
        let qry = colRef.ref.orderBy('Name', 'asc').get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              if (doc.data().Name.toUpperCase().startsWith(inp)) { //if the document Name starts with the entered text
                this.suggestArr.push(doc.data()) //add that to the array
              }
            });
          }).then(() => {
            if (this.suggestArr[0] != undefined) { // if anything in the db starts with the entered text
              $('.placeholder').val(this.suggestArr[0].Name) // set it to the first thing 
            }
            else {
              $('.placeholder').val("") //set it to nothing if nothing is matched
            }
          })
      }
      else { // if the box is empty or a bad character is entered. Like the green goblin or something
        $('.placeholder').remove()
      }
    }
    else { //if they pressed enter
      if (this.suggestArr[0] != null) { //and the array has value, not like metaphorically like does a random rock in a field have any value, but like does it have anything in it. Because a random rock in a field could totally have value to it. Maybe a farmer breaks soemthing on it and can't keep farming so he has to switch to something else and turns out he's really good at math and figures out my homework for me or something. Stupid array coldn't do that...
        $($event.target).val(this.suggestArr[0].Name)
        $($event.target).next('.input').next('.input').val(this.suggestArr[0].Description).next('.input').val(this.suggestArr[0].Serial).next('.input').val(this.suggestArr[0].OrderURL) //setting values of the boxes
        $($event.target).next('.input').focus() //move the cursor over
        $('#autofill').remove()//remove autofill box
        this.suggestArr = [];//reset array
      }
    }
  }
  /**
   * Sets an ID to use for each new item in the inventory
   */
  nextInvID(): number {
    let colRef = this.afs.collection('Inventory'); //from the inventory
    let qry = colRef.ref.orderBy('Name', 'asc').get().then(snapshot => {
      snapshot.forEach(doc => { //for each doc 
        if (doc.data().ID != null && this.id < doc.data().ID) {
          this.id = doc.data().ID + 1
        }
        else if (doc.data().ID == null) {
          this.id = 1;
        }
        else {
          this.id = 1
        }
      })
    })
    return this.id
  }
  /**
   * Creates an inventory entry from the text boxes in the Add page
   */
  addToInv() {
    this.addingToInv = true; //disables the button
    var badEnrtyFlag = false; //initializing a flag as false
    var qtyEntry = 0;
    var inputArray = $('.input:enabled'); // something to iterate (not to be confused with integrate) with respect to
    var query = "";
    var addToQuery = "";
    this.id = this.nextInvID()
    //checking if the last 5 boxes are empty
    if (inputArray.length > 5) {
      if ((inputArray.val() == "" && inputArray.next().val() == "" && inputArray.next().next().val() == "" && inputArray.next().next().next().val() == "" && inputArray.next().next().next().next().val() == "")) {
        //remove the last 5 boxes on the page before continuing so it doesnt flag them as bad entries
        inputArray.each(function (i, val) {
          $(val).remove()
        })
      }

    }
    else {
      inputArray.each(function (i, value) { // for each textbox
        if (!(/^[0-9A-Za-z\s\-\_]+$/.test($(value).val().toString())) && !badEnrtyFlag && (i + 1) % 5 != 0) { //test the regex thingy, and if the index isnt on a URL box
          $(value).css('box-shadow', '0px 0px 5px red')
          badEnrtyFlag = true
        }
        if ($(value).attr('placeholder').includes('Quantity') && !/^\d+$/.test($(value).val().toString())) { //iff the qty box contains anything other than numbers
          $(value).css('box-shadow', '0px 0px 5px red')
          badEnrtyFlag = true
        }
        else if (!badEnrtyFlag) {
          $(value).css('box-shadow', '')
        }
      })
    }
    //text box must contain letters, numbers, dashes, spaces, no emojis ERICK (-_-)
    if (!badEnrtyFlag) { // if all the entries were fine

      var query = "";
      var name = ""
      var desc = ""
      var sn = ""
      var container = []
      var entries = []
      inputArray.each((i, box) => { //get all the box values and then remeove the boxes 
        //name
        if ($(box).attr('placeholder').includes('Name')) {
          name = $(box).val().toString()
          entries.push(name)
          $(box).remove()
        }
        //qty
        if ($(box).attr('placeholder').includes('Quantity')) {
          qtyEntry = parseInt($(box).val().toString())
          entries.push(qtyEntry)
          $(box).remove()

        }
        //description
        if ($(box).attr('placeholder').includes('Description')) {
          desc = $(box).val().toString()
          entries.push(desc)
          $(box).remove()
        }
        //serial #
        if ($(box).attr('placeholder').includes('Serial')) {
          sn = $(box).val().toString();
          entries.push(sn)
          $(box).remove()
        }
        //url
        if ($(box).attr('placeholder').includes('URL') && $(box).val() == "Google Search") { //if the url box is a google searchy search
          addToQuery = $(box).val().toString().replace(" ", "-"); //query has to have dashes not spaces
          query = "https://google.com/search?q=" + addToQuery;
          entries.push(query)
          $(box).remove()
        }
        else if ($(box).attr('placeholder').includes('URL') && $(box).val() != "Google Search") {
          query = $(box).val().toString()
          entries.push(query)
          container.push(entries)
          console.log(entries)
          entries = []
          $(box).remove()
        }






      })
      var updateFlag;
      //after we have all the values to enter into the db ->
      for (let ind = 0; ind < container.length; ind++) {
        if (container[ind][0] != null && container[ind][0] != "" && container[ind][1] != null && container[ind][1] != "") {
          let colRef = this.afs.collection('Inventory'); //from the inventory
          updateFlag = false;
          let qry = colRef.ref.orderBy('Name', 'asc').get().then(snapshot => { //want the first thing in order
            snapshot.forEach(doc => {
              if (doc.data() != null && container[ind][0].toString() == doc.data().Name.toString()) { //if theres a doc
                doc.ref.update({ //update it instead of adding
                  Name: doc.data().Name,
                  Quantity: parseInt(container[ind][1]) + parseInt(doc.data().Quantity),
                  Description: container[ind][2],
                  LastRestock: firebase.firestore.Timestamp.fromDate(new Date), //format for firebase entry
                  LastRestockQuantity: container[ind][1],
                  Serial: container[ind][3],
                  OrderURL: container[ind][4]
                })
                updateFlag = true; //say that doc was updated so it doesn't get duplicated
              }

            })

          }).then(() => {
            /*
            had some issues with the update flag and the async-ness of the firebase things
            update flag needs to get set before and after the attempts otherwise the for loop will finish all the top things
            before it finishes the rest of the async stuff. Hence the update flag being reset inside the then(()=>{})
            */
            if (!updateFlag) { //if nothing was updated
              this.Firestore.inventoryEntry( //enter into db
                container[ind][0], //name
                container[ind][1], //qty
                container[ind][2], //desc
                container[ind][3], //serial
                container[ind][4]) //query

            }
            updateFlag = false;
          })
        }
      }

      $('#confirmed').fadeIn("slow") //make a pretty
      $('#confirmed').fadeOut(2000)
      for (let index = 0; index < 5; index++) { //make 5 text boxes
        var node = document.createElement("input"); // of type input
        $(node).addClass('input');
        $('#boxesDiv').append(node) //add it to the div that holds all the boxes
      }

      var arr = document.getElementsByClassName('input'); //temp array getting all the text boxes
      for (let x = 0; x < arr.length; x += 5) {
        $('.input')[x].setAttribute('placeholder', 'Item Name')
        $('.input')[x].addEventListener('keyup', ($event) => this.suggestByName($event))
        $('.input')[x + 1].setAttribute('placeholder', 'Quantity')
        $('.input')[x + 2].setAttribute('placeholder', 'Description')
        $('.input')[x + 3].setAttribute('placeholder', 'Serial Number')
        $('.input')[x + 4].setAttribute('placeholder', 'Order URL ("g" for google)')
      }

    }
    this.addingToInv = false;//let the button be free

    $('br').remove()//remove all the spaces that went between the boxes
    $('#boxesDiv').prepend(document.createElement('br')) //add one space between the button and the boxes


    $('.placeholder').remove()

  }
}



