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

  //something i wanted to do was get it to auto add values based on the database, not sure if time
  constructor(private Firestore: FirestoreService, private afs: AngularFirestore) {

  }
   id=0;
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

          if ($($event.target).val() == "g" && $($event.target).attr('placeholder').includes('URL')) { // if the box text is g
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
  suggestByName($event) {
    var inp = $($event.target).val().toString().toUpperCase() // the value of the text box 
    if ($event.keyCode != 13) { // if they didn't press enter
      $('#autofill').attr('placeholder', '') 
      if (/[a-zA-Z0-9-_ ]/.test(inp)) { // if the key pressed was a number letter space hyphen or letter
        this.temp = []; 
        if ($('#autofill').length == 0) { //if the autofill thing doesn't exist yet (length ==0 is only true when it doesn't exist)
          var node = document.createElement('input') //
          node.className = 'placeholder'
          node.disabled = true
          node.id = "autofill"
          $('#autofillDiv').append(node)
        }
        let colRef = this.afs.collection('Inventory');
        let qry = colRef.ref.get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              if (doc.data().Name.toUpperCase().startsWith(inp)) {
                this.temp.push(doc.data())
              }
            });
          }).then(() => {
            if (this.temp[0] != undefined){
              $('.placeholder').val(this.temp[0].Name)
            }
            else{
              $('.placeholder').val("")
            }
          })

      }
    }
    else { //if they pressed enter

      if (this.temp[0] != null) {
        $($event.target).val(this.temp[0].Name)
        $($event.target).next('.input').next('.input').val(this.temp[0].Description).next('.input').val(this.temp[0].Serial).next('.input').val(this.temp[0].OrderUrl)
        $($event.target).next('.input').focus()
      }
    }
  }
  nextInvID():number{
    let colRef = this.afs.collection('Inventory'); //from the inventory
    let qry = colRef.ref.orderBy('Name', 'asc').get().then(snapshot => {
      snapshot.forEach(doc => { //for each doc 
        if(doc.data().ID != null && this.id < doc.data().ID){
          this.id = doc.data().ID + 1
        } 
        else if(doc.data().ID == null){
          this.id = 1;
        }
        else{
          this.id = 1
        }
      })
    })
    return this.id
  }
  addToInv() {
    var badEnrtyFlag = false;
    var qtyEntry = 0;
    var inputArray = $('.input:enabled'); // something to iterate (not to be confused with integrate) with respect to
    var query = "";
    var addToQuery = "";
    console.log(this.id)
    this.id = this.nextInvID()
    console.log(this.id)
    //checking if the last 5 boxes are empty
    if (inputArray.length > 5) {
      if ((inputArray.val() == "" && inputArray.next().val() == "" && inputArray.next().next().val() == "" && inputArray.next().next().next().val() == "" && inputArray.next().next().next().next().val() == "")) {
        //remove the last 5 boxes on the page before continuing
       inputArray.each(function(i,val){
         $(val).remove()
       })
      }

    }
    else{
      inputArray.each(function (i, value) {
          
          
        if($(value).attr('placeholder').includes('Quantity') && !/^\d+$/.test($(value).val().toString()) ){
          $(value).css('box-shadow', '0px 0px 5px red')
          badEnrtyFlag = true
        }
      
        if (!(/^[0-9A-Za-z\s\-\_]+$/.test($(value).val().toString())) && !badEnrtyFlag) {
          $(value).css('box-shadow', '0px 0px 5px red')
          badEnrtyFlag = true
        }
        else if(!badEnrtyFlag){
          $(value).css('box-shadow','')
        }
      })
    }
        //text box must contain letters, numbers, dashes, spaces, no emojis ERICK (-_-)
      if (!badEnrtyFlag) { // if all the entries were fine
        
        var query = "";
        var name = ""
        var desc = ""
        var sn = ""
        inputArray.each((i,box) => {
         
        
            //name
            if ($(box).attr('placeholder').includes('Name')) {
              name = $(box).val().toString()
              $(box).remove()
            }
            //qty
            if ($(box).attr('placeholder').includes('Quantity')) { //every fifth textbox, but 
              qtyEntry = parseInt($(box).val().toString())
              $(box).remove()
            }
            //description
            if ($(box).attr('placeholder').includes('Description')) {
              desc = $(box).val().toString()
              $(box).remove()
            }
            //serial #
            if ($(box).attr('placeholder').includes('Serial')) {
              sn = $(box).val().toString();
              $(box).remove()
            }
            //url
            if ($(box).attr('placeholder').includes('URL') && $(box).val() == "Google Search") { //if the url box is a google searchy search
              addToQuery = $(box).val().toString().replace(" ", "-");
              query = "https://google.com/search?q=" + addToQuery;
              $(box).remove()
            }
            else if ($(box).attr('placeholder').includes('URL')) {
              query = $(box).val().toString()
              $(box).remove()
            }
            


            //jam the check if it exists shit here
            
            
            var updateFlag = false;
            if ($(box).attr('placeholder').includes('URL') && query != "" && name != "" && typeof qtyEntry == "number") {
              let colRef = this.afs.collection('Inventory'); //from the inventory
              let qry = colRef.ref.orderBy('Name', 'asc').get().then(snapshot => {
                snapshot.forEach(doc => {
                  if(name == doc.data().Name){
                    doc.ref.update({
                      Name: name,
                      Quantity: qtyEntry,
                      Description: desc,
                      LastRestock: firebase.firestore.Timestamp.fromDate(new Date),
                      LastRestockQuantity: qtyEntry,
                      Serial: sn,
                      OrderURL: query
                    })
                    updateFlag = true;
                  }

                })
              })
              if(!updateFlag){
              this.Firestore.inventoryEntry( //enter into db
                name,
                qtyEntry,
                desc,
                sn,
                query,
                )
                 
                  
                  $('br').next().remove()
              }
              }
            })
            
            
            $('#confirmed').fadeIn("slow")
            $('#confirmed').fadeOut(2000)
              
          
            
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
      
      

