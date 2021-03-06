import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { AddComponent } from "./add/add.component";
import { InventoryComponent } from './inventory/inventory.component';

@Component({
  selector: 'app-root', // waht html tag it will be <app-root>
  templateUrl: './app.component.html', //what html file to use
  styleUrls: ['./app.component.css'] //the style sheet
})
export class AppComponent {
  addedBoxes: boolean = false;
  selectedIndex = 0;
  User;
  title = 'IT Asset Control'; //default property from angular, idk why they named it project nighthawk
  constructor(private Firestore: FirestoreService, private add: AddComponent, private cookie: CookieService) {  //any services, modules, or classes (most import stuff really) goes here so the component can use it

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.User = this.cookie.get("User")
  }
  /**
   * Deletes the current cookie and reloads the prompt to sign in
   */
  logOut() {
    this.cookie.deleteAll();
    window.location.reload()
  }
  /**
   * Adds boxes to add page when you first navigate to it
   * @param e $event object
   */
  addFirstBoxes(e) {
    this.selectedIndex = e.index //sets the index of the tab you're on
    if (e.index == 2 && !this.addedBoxes) { //when it loads the add page make some text boxes
      this.add.createTextBoxes(5);
      this.addedBoxes = true;//dont do it more than once
    }
  }
  massDelete($event){

  }

}
