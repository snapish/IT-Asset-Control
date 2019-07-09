import { Component } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { AddComponent } from "./add/add.component";
@Component({
  selector: 'app-root', // waht html tag it will be <app-root>
  templateUrl: './app.component.html', //what html file to use
  styleUrls: ['./app.component.css'] //the style sheet
})
export class AppComponent {
  addedBoxes: boolean =false;
  items: Array<any>;

  title = 'PROJECT NIGHTHAWK'; //default property from angular, idk why they named it project nighthawk
  constructor(private Firestore: FirestoreService, private add: AddComponent){  //any services, modules, or classes (most import stuff really) goes here so the component can use it
   
 
}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  addFirstBoxes(e){
   if(e.index == 2 && !this.addedBoxes){
    this.add.createTextBoxes(5);
    this.addedBoxes= true;
   }
  }
  
}
