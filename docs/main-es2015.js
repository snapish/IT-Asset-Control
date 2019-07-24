(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add/add.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add/add.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"body\">\n        <div style=\"margin-left: 5%; margin-right: 5%\">\n                <button mat-raised-button style=\"margin-top: 2%; padding-left: 45%; padding-right: 45%\"\n                        (click)=\"addToInv()\" id=\"addButton\">Add To Inventory</button>\n        </div>\n\n        <div id=\"boxesDiv\">\n                <div id=\"autofillDiv\">\n\n                </div>\n\n        </div>\n        <div id=\"confirmed\">\n                Added items to Inventory\n        </div>\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<body>\r\n      <div class=\"body\">\r\n    <!-- -->\r\n    <mat-tab-group [selectedIndex] = \"selectedIndex\" mat-stretch-tabs (selectedTabChange) = \"addFirstBoxes($event)\" style=\"background-color: rgb(16, 112, 208); \">\r\n      <!-- tab icons https://material.io/tools/icons/?style=baseline -->\r\n        <mat-tab >\r\n          <ng-template mat-tab-label>\r\n              <span *ngIf=\"selectedIndex == 0\" class=\"spans\">\r\n            <mat-icon style=\"vertical-align: -4px\" class=\"example-tab-icon\">storage</mat-icon>\r\n\r\n            Inventory\r\n          </span>\r\n          \r\n              <span *ngIf=\"selectedIndex != 0\" style=\"font-size: 23px ;\">\r\n            <mat-icon style=\"vertical-align: -4px\" class=\"example-tab-icon\">storage</mat-icon>\r\n           Inventory\r\n          </span>\r\n\r\n          </ng-template>\r\n          <inventory></inventory>\r\n          <app-scan></app-scan>\r\n        </mat-tab>\r\n        <mat-tab  class = \"mtab\">\r\n          <ng-template mat-tab-label >\r\n\r\n            <span *ngIf=\"selectedIndex == 1\" class=\"spans\">\r\n            <mat-icon style=\"vertical-align: -3px\" class=\"example-tab-icon\" >create</mat-icon>\r\n                  Manage\r\n              </span>\r\n          \r\n              <span *ngIf=\"selectedIndex != 1\" style=\"font-size: 23px  \">\r\n            <mat-icon style=\"vertical-align: -3px\" class=\"example-tab-icon\" >create</mat-icon>\r\n                  Manage\r\n              </span>\r\n\r\n\r\n          </ng-template>\r\n          <app-manage></app-manage>\r\n          \r\n        </mat-tab>\r\n        <mat-tab class = \"mtab\">\r\n          \r\n          <ng-template mat-tab-label >\r\n            \r\n              <span *ngIf=\"selectedIndex == 2\" class=\"spans\">\r\n            <mat-icon style=\"vertical-align: -4px\" class=\"example-tab-icon\" >add_box</mat-icon>\r\n            Add To Inventory\r\n            </span>\r\n\r\n              <span *ngIf=\"selectedIndex != 2\" style=\"font-size: 23px  \">\r\n            <mat-icon style=\"vertical-align: -4px\" class=\"example-tab-icon\" >add_box</mat-icon>\r\n            Add To Inventory\r\n            </span>\r\n          </ng-template>\r\n          \r\n          <app-add></app-add>\r\n          \r\n        </mat-tab >\r\n        \r\n        <mat-tab class = \"mtab\">\r\n          <ng-template mat-tab-label>\r\n              <span *ngIf=\"selectedIndex == 3\" class=\"spans\">\r\n            <mat-icon style=\"vertical-align: -4px\" class=\"example-tab-icon\">check_circle</mat-icon>\r\n            Queue\r\n              </span>\r\n\r\n            <span *ngIf=\"selectedIndex != 3\" style=\"font-size: 23px  \">\r\n                <mat-icon style=\"vertical-align: -4px\" class=\"example-tab-icon\" >check_circle</mat-icon>\r\n                Queue\r\n                </span>\r\n          </ng-template>\r\n          <app-queue></app-queue>\r\n          <app-pin></app-pin>\r\n        </mat-tab>\r\n\r\n        <mat-tab >\r\n          <ng-template mat-tab-label>\r\n              <span *ngIf=\"selectedIndex == 4\" class=\"spans\">\r\n            <mat-icon style=\"vertical-align: -4px\" class=\"example-tab-icon\">phonelink_off</mat-icon>\r\n              Decomissioned\r\n              </span>\r\n\r\n              <span *ngIf=\"selectedIndex != 4\" style=\"font-size: 23px  \">\r\n            <mat-icon style=\"vertical-align: -4px\" class=\"example-tab-icon\">phonelink_off</mat-icon>\r\n              Decomissioned\r\n              </span>\r\n            </ng-template>\r\n       <app-decomission></app-decomission>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n\r\n<script>\r\n  const firebaseConfig = {\r\n  apiKey: \"AIzaSyDa4HvodLBhScipdlM29xtM6nYIHtzpTJA\",\r\n  authDomain: \"it-asset-control.firebaseapp.com\",\r\n  databaseURL: \"https://it-asset-control.firebaseio.com\",\r\n  projectId: \"it-asset-control\",\r\n  storageBucket: \"it-asset-control.appspot.com\",\r\n  messagingSenderId: \"92479072203\",\r\n  appId: \"1:92479072203:web:549ad23649fe486f\"\r\n};\r\n  // Your web app's Firebase configuration\r\n  var firebaseConfig = {\r\n    apiKey: \"AIzaSyDa4HvodLBhScipdlM29xtM6nYIHtzpTJA\",\r\n    authDomain: \"it-asset-control.firebaseapp.com\",\r\n    databaseURL: \"https://it-asset-control.firebaseio.com\",\r\n    projectId: \"it-asset-control\",\r\n    storageBucket: \"it-asset-control.appspot.com\",\r\n    messagingSenderId: \"92479072203\",\r\n    appId: \"1:92479072203:web:549ad23649fe486f\"\r\n  };\r\n  // Initialize Firebase\r\n  firebase.initializeApp(firebaseConfig);\r\n</script>\r\n </div>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/decomission/decomission.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/decomission/decomission.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <mat-form-field  class=\"filterbar\">\r\n        <mat-icon matPrefix >filter_list</mat-icon>\r\n          <input matInput  (keyup)=\"applyFilter($event.target.value)\" ><mat-placeholder style=\"color: white; font-weight: 300; opacity: .5\">Filter</mat-placeholder>\r\n      </mat-form-field><mat-slide-toggle color = \"warn\" [(ngModel)]=\"editMode\" style=\"float:right;padding-right: 10px; color: white\">Edit Mode</mat-slide-toggle>  \r\n  \r\n      <div *ngIf=\"editMode\" style=\"float: right; margin-top: 10px ; \">   \r\n          <button mat-fab (click) = \"saveChanges()\"color = \"warn\" >Save<br></button>\r\n        </div>\r\n        <br>\r\n    <button  (click) =\"exportAsJSON('Decomission')\">Export to JSON</button>\r\n    <button  (click) =\"exportAsCSV('Decomission') \">Export to CSV</button>\r\n  <table mat-table #table [dataSource]=\"decomSource\" matSort> \r\n\r\n\r\n  <ng-container matColumnDef=\"Name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"name\"> Name </th>\r\n\r\n    <td mat-cell *matCellDef=\"let item\"> <div *ngIf=\"!editMode\">\r\n        {{item.Name}}\r\n      </div>\r\n        <div *ngIf=\"editMode\"> \r\n            <input class=\"namebox editbox\" value=\"{{item.Name}}\">\r\n           </div>  </td>\r\n  </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"Quantity\"> \r\n    <th mat-header-cell *matHeaderCellDef class=\"quantity\"> Quantity </th>\r\n    <td mat-cell *matCellDef=\"let item; let i = index\"> \r\n        <div *ngIf=\"!editMode\" >{{item.Quantity}}</div>\r\n        <div *ngIf=\"editMode\">\r\n          <input class=\"quantitybox editbox\"   value=\"{{item.Quantity}}\">\r\n          <!-- [ngStyle] = \"{color: scaleColor(item.Quantity, item.LastRestockQuantity)}\" -->\r\n         </div>\r\n    </td>\r\n  </ng-container> \r\n\r\n  <ng-container matColumnDef=\"Location\"> \r\n    <th mat-header-cell *matHeaderCellDef class=\"location\"> Location </th>\r\n    <td mat-cell *matCellDef=\"let item; let i = index\"> \r\n        <div *ngIf=\"!editMode\">\r\n            {{item.Location}}\r\n          </div>\r\n            <div *ngIf=\"editMode\">\r\n                <input class=\"locationbox editbox\" value=\"{{item.Location}}\">\r\n               </div>\r\n    </td>\r\n  </ng-container> \r\n  \r\n  <ng-container matColumnDef=\"User\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"user\" mat-sort-header > User </th>\r\n    <td mat-cell *matCellDef=\"let item\" > \r\n        {{item.User}}\r\n      </td>\r\n  </ng-container> \r\n\r\n  <ng-container matColumnDef=\"Notes\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"notes\" mat-sort-header > Notes </th>\r\n    <td mat-cell *matCellDef=\"let item\">   <div *ngIf=\"!editMode\">\r\n        {{item.Notes}}\r\n      </div>\r\n        <div *ngIf=\"editMode\">\r\n            <input class=\"notesbox editbox\" value=\"{{item.Notes}}\">\r\n           </div> </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Date\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"date\" mat-sort-header > Date </th>\r\n    <td mat-cell *matCellDef=\"let item\"> <div *ngIf=\"!editMode\">\r\n        {{item.Date.seconds * 1000 | date:'MM-dd-yyyy'}}\r\n    </div>\r\n      <div *ngIf=\"editMode\"> \r\n          <input class=\"datebox editbox\" value=\" {{item.Date.seconds * 1000 | date:'MM-dd-yyyy'}}\">\r\n        </div> </td>\r\n  </ng-container> \r\n  <ng-container matColumnDef=\"Actions\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"actions\" mat-sort-header >Actions</th>\r\n    <td mat-cell *matCellDef=\"let item\"> \r\n      <button mat-button (click) = \"recomission($event, item)\">Recomission</button>\r\n      <button mat-button (click) = \"deleteRow($event, item)\">Delete</button>\r\n    </td>\r\n  </ng-container> \r\n\r\n\r\n\r\n<!-- next 2 lines are determining what rows and columns to display, displayColumns is an array in the component -->\r\n  <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayColumns;\"></tr>\r\n\r\n\r\n</table>\r\n\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/export/export.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/export/export.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button (click) = \"convertToJSON('Inventory')\">Export as JSON</button><br>\n<button (click) = \"convertToCSV('Queue')\">Export as CSV</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inventory/inventory.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inventory/inventory.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <mat-form-field  class=\"filterbar\">\r\n    <mat-icon matPrefix >filter_list</mat-icon>\r\n   \r\n      <input matInput  (keyup)=\"applyFilter($event.target.value)\" ><mat-placeholder style=\"color: white; font-weight: 300; opacity: .5\">Filter</mat-placeholder>\r\n\r\n  </mat-form-field>\r\n  <mat-slide-toggle color = \"warn\" [(ngModel)]=\"editMode\" style=\"float:right;padding-right: 10px; color: white\">Edit Mode</mat-slide-toggle>  \r\n  \r\n  <div *ngIf=\"editMode\" style=\"float: right; margin-top: 10px ; \">   \r\n      <button mat-fab (click) = \"saveChanges()\"color = \"warn\" >Save<br></button>\r\n    </div>\r\n    <br>\r\n    <button (click) = \"exportToJSON('Inventory')\">Export as JSON</button>\r\n    <button (click) = \"exportToCSV('Inventory')\">Export as CSV</button>\r\n    \r\n\r\n  <!-- grab data from the variable \"items\" inside of inventory component -->\r\n  <table mat-table #table [dataSource]=\"itemsource\" matSort> \r\n    <!-- column named \"name\" -->\r\n    <ng-container matColumnDef=\"Name\">\r\n      <!-- a table header thats a mat header, and is sortable -->\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"name\">Name</th>\r\n      <!-- item is an object inside of items -->\r\n      <td mat-cell *matCellDef=\"let item\">\r\n          <div *ngIf=\"!editMode\">\r\n            {{item.Name}}\r\n          </div>\r\n            <div *ngIf=\"editMode\"> \r\n                <input class=\"namebox editbox\" value=\"{{item.Name}}\">\r\n               </div>\r\n        </td>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"Quantity\">\r\n      <th  mat-header-cell *matHeaderCellDef class=\"quantity \" mat-sort-header>Quantity</th>\r\n  \r\n      <td mat-cell *matCellDef=\"let item\" > \r\n        <div *ngIf=\"!editMode\" [ngStyle] = \"{color: scaleColor(item.Quantity, item.LastRestockQuantity)}\">{{item.Quantity}}</div>\r\n        <div *ngIf=\"editMode\">\r\n          <input class=\"quantitybox editbox\"   value=\"{{item.Quantity}}\">\r\n          <!-- [ngStyle] = \"{color: scaleColor(item.Quantity, item.LastRestockQuantity)}\" -->\r\n         </div>\r\n       </td>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"Description\"> \r\n      <th mat-header-cell *matHeaderCellDef class=\"description\"> Description </th>\r\n      <td mat-cell *matCellDef=\"let item\">\r\n        <div *ngIf=\"!editMode\">\r\n          {{item.Description}}\r\n        </div>\r\n          <div *ngIf=\"editMode\">\r\n              <input class=\"descriptionbox editbox\" value=\"{{item.Description}}\">\r\n            </div>\r\n      </td>\r\n    </ng-container> \r\n    \r\n    <ng-container matColumnDef=\"Serial\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"serial\" mat-sort-header >Serial #</th>\r\n      <td mat-cell *matCellDef=\"let item\">\r\n          <div *ngIf=\"!editMode\">\r\n            {{item.Serial}}\r\n          </div>\r\n            <div *ngIf=\"editMode\">\r\n                <input class=\"serialbox editbox\" value=\"{{item.Serial}}\">\r\n               </div>\r\n        </td>\r\n    </ng-container> \r\n    \r\n    <ng-container matColumnDef=\"LastRestockQuantity\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"lastrestockqty\" mat-sort-header >Last Restock Quantity</th>\r\n      <td mat-cell *matCellDef=\"let item\">\r\n          <div *ngIf=\"!editMode\">\r\n            {{item.LastRestockQuantity}}\r\n          </div>\r\n            <div *ngIf=\"editMode\">\r\n                <input class=\"lastrestockquantitybox editbox\" value=\"{{item.LastRestockQuantity}}\">\r\n              </div>\r\n        </td>\r\n    </ng-container> \r\n    \r\n    <ng-container matColumnDef=\"LastRestock\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"lastrestock\" mat-sort-header>Last Restock</th>\r\n      <!-- *1000 brings it to a format the date can work with and returns that format to the table   -->\r\n      <td mat-cell *matCellDef=\"let item\">\r\n          <div *ngIf=\"!editMode\">\r\n              {{item.LastRestock.seconds * 1000 | date:'MM-dd-yyyy'}}\r\n          </div>\r\n            <div *ngIf=\"editMode\"> \r\n                <input class=\"lastrestockbox editbox\" value=\" {{item.LastRestock.seconds * 1000 | date:'MM-dd-yyyy'}}\">\r\n              </div>\r\n        </td>\r\n    </ng-container> \r\n    \r\n    <ng-container matColumnDef=\"Restock\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"restock\" mat-sort-header> Actions </th>\r\n      <td mat-cell *matCellDef=\"let item\"> \r\n        <div *ngIf=\"!editMode\">\r\n\r\n          <button mat-button (click) = \"restock($event, item.Serial)\" id=\"{{item.OrderUrl + ' ' + item.Name}}\">Reorder</button>\r\n          <button mat-button (click) = \"queueItem($event, item.Name, 1, item.Serial)\" id=\"{{item.OrderUrl + ' ' + item.Name}}\">Queue Item</button>\r\n          <button mat-button [disabled] = \"item.Quantity <= 0\" (click) = \"decomission($event, item.Serial, item.Quantity)\" id=\"decom\">Decomission</button>\r\n        </div>\r\n        <div *ngIf=\"editMode\">\r\n          <button mat-button (click) = \"deleteRow($event, item)\">Delete Row</button>\r\n\r\n        </div>\r\n        </td>\r\n    </ng-container> \r\n\r\n    <!-- next 2 lines are determining what rows and columns to display, displayColumns is an array in the component -->\r\n    <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayColumns;\"></tr>\r\n    \r\n  </table>\r\n  <button (click) = \"massDelete()\">mass delete</button>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manage/manage.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manage/manage.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <a href=\"javascript:void(0)\" (click) = \"locationPicker()\">Pick a chunk</a> \r\n\r\n<div *ngFor=\"let item of coordArray\">\r\n    <a href=\"javascript:void(0)\" id=\"{{item}}\" (click) = \"newBoxes(item)\"> {{item}}</a>\r\n</div> --> \r\n<body>  \r\n    <mat-form-field  class=\"filterbar\">\r\n        <mat-icon matPrefix >filter_list</mat-icon>\r\n          <input matInput  (keyup)=\"applyFilter($event.target.value)\" ><mat-placeholder style=\"color: white; font-weight: 300; opacity: .5\">Filter</mat-placeholder>\r\n      </mat-form-field>\r\n      <mat-slide-toggle color = \"warn\" [(ngModel)]=\"editMode\" style=\"float:right;padding-right: 10px; color: white\">Edit Mode</mat-slide-toggle>  \r\n      \r\n      <div *ngIf=\"editMode\" style=\"float: right; margin-top: 10px ; \">   \r\n          <button mat-fab (click) = \"saveChanges()\"color = \"warn\" >Save<br></button>\r\n        </div><br>\r\n    <button (click) = \"exportToJSON('Manage')\">Export as JSON</button>\r\n  <button (click) = \"exportToCSV('Manage')\">Export as CSV</button>\r\n  <br>\r\n<table mat-table #table [dataSource]=\"manageSource\" matSort> \r\n\r\n  <!-- column named \"name\" -->\r\n  <ng-container matColumnDef=\"Name\">\r\n    <!-- a table header thats a mat header, and is sortable -->\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"name\"> Name </th>\r\n    <!-- item is an object inside of items -->\r\n    <td mat-cell *matCellDef=\"let item; let i = index\">   <div *ngIf=\"!editMode\">\r\n        {{item.Name}}\r\n      </div>\r\n        <div *ngIf=\"editMode\"> \r\n            <input class=\"namebox editbox\" value=\"{{item.Name}}\">\r\n           </div></td>\r\n  \r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Quantity\">\r\n      <th  mat-header-cell *matHeaderCellDef class=\"quantity \" mat-sort-header > Quantity </th>\r\n    <td mat-cell *matCellDef=\"let item\" >   \r\n       <div *ngIf=\"!editMode\">{{item.Quantity}}</div>\r\n      <div *ngIf=\"editMode\">\r\n        <input class=\"quantitybox editbox\"   value=\"{{item.Quantity}}\">\r\n       </div>\r\n      </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Location\"> \r\n    <th mat-header-cell *matHeaderCellDef class=\"location\"> Location </th>\r\n    <td mat-cell *matCellDef=\"let item; let i = index\"> \r\n      \r\n      <a href=\"javascript:void(0)\" (click) = \"locationPicker(i)\"  >{{item.Location}}</a> \r\n    </td>\r\n  </ng-container> \r\n  \r\n  <ng-container matColumnDef=\"User\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"user\" mat-sort-header > User </th>\r\n    <td mat-cell *matCellDef=\"let item\" > {{item.User}} </td>\r\n  </ng-container> \r\n\r\n  <ng-container matColumnDef=\"Notes\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"notes\" mat-sort-header > Notes </th>\r\n    <td mat-cell *matCellDef=\"let item\"> <div *ngIf=\"!editMode\">\r\n        {{item.Notes}}\r\n      </div>\r\n        <div *ngIf=\"editMode\">\r\n            <input class=\"notesbox editbox\" value=\"{{item.Notes}}\">\r\n          </div> </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"Date\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"date\" mat-sort-header > Date</th>\r\n\r\n    <!-- <td mat-cell *matCellDef=\"let item\">{{item.Date.seconds * 1000 | date:'MM-dd-yyyy'}} </td> -->\r\n    <td mat-cell *matCellDef=\"let item\"> <div *ngIf=\"!editMode\">\r\n        {{item.Date.seconds * 1000 | date:'MM-dd-yyyy'}}\r\n    </div>\r\n      <div *ngIf=\"editMode\"> \r\n          <input class=\"datebox editbox\" value=\" {{item.Date.seconds * 1000 | date:'MM-dd-yyyy'}}\">\r\n        </div> </td>\r\n  </ng-container> \r\n  \r\n  <ng-container matColumnDef=\"Actions\">\r\n    <th mat-header-cell *matHeaderCellDef class=\"actions\" mat-sort-header > Actions</th>\r\n    <td mat-cell *matCellDef=\"let item\">\r\n        <button mat-button (click) = \"decomission($event, item.Serial, item.Quantity, item.Location, item.Notes)\" id=\"decom\">Decomission</button>  \r\n        <button mat-button (click) = \"inventory($event, item)\" id=\"decom\">Inventory</button>  \r\n    </td>\r\n  </ng-container> \r\n\r\n\r\n\r\n<!-- next 2 lines are determining what rows and columns to display, displayColumns is an array in the component -->\r\n  <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayColumns;\"></tr>\r\n\r\n\r\n</table>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<button mat-raised-button (click) = \"locationPicker('offices')\">Open Offices</button>\r\n<button mat-raised-button (click) = \"locationPicker('production1')\">Open Production1</button>\r\n<button mat-raised-button (click) = \"locationPicker('production2')\" >Open Production2</button>\r\n<button mat-raised-button (click) = \"locationPicker('shipping')\"> Open Shipping</button>\r\n\r\n\r\n<div *ngFor=\"let a of (coordinateArray )\">\r\n  {{a}}\r\n</div>\r\n\r\n<!-- \r\n<div *ngIf=\"section == 'offices'\" >\r\n<-- <img src=\"./assets/gridoveroffices2.jpg\" alt=\"\" usemap=\"#Map\" /> ->\r\n<img src=\"./assets/_officefinal.jpg\" alt=\"\" usemap=\"#Map\" />\r\n<map name=\"Map\" id=\"Map\">\r\n  <-- (TOP LEFT, BOTTOM RIGHT) ->\r\n  <-- (x1,y1), (x2, y2) ->\r\n  <-- rects are ~ 90x70 >\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"a3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,140, 85,210\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"a4\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,210, 85,280\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"a5\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,280, 85,350\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"a6\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,350, 85,420\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"a7\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,420, 85,490\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"a8\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,490, 85,560\" />\r\n\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"b3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,140, 175,210\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"b4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,210, 175,280\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"b5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,280, 175,350\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"b6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,350, 175,420\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"b7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,420, 175,490\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"b8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,490, 175,560\" />\r\n\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"c3\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,140, 260,210\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"c4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,210, 260,280\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"c5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,280, 260,350\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"c6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,350, 260,420\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"c7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,420, 260,490\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"c8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,490, 260,560\" />\r\n\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"d3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,140, 350,210\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"d4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,210, 350,280\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"d5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,280, 350,350\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"d6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,350, 350,420\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"d7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,420, 350,490\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"d8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,490, 350,560\" />\r\n    \r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"e1\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,0,   440,70\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"e2\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,70,  440,140\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"e3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,140, 440,210\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"e4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,210, 440,280\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"e5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,280, 440,350\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"e6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,350, 440,420\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"e7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,420, 440,490\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"e\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,490, 440,560\" />\r\n\r\n\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"f1\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,0,   530,70\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"f2\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,70,  530,140\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"f3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,140, 530,210\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"f4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,210, 530,280\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"f5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,280, 530,350\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"f6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,350, 530,420\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"f7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,420, 530,490\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"f8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,490, 530,560\" />\r\n\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"g1\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,0,   620,70\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"g2\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,70,  620,140\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"g3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,140, 620,210\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"g4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,210, 620,280\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"g5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,280, 620,350\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"g6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,350, 620,420\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"g7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,420, 620,490\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"g8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,490, 620,560\" />\r\n\r\n\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h1\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,0,   710,70\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h2\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,70,  710,140\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,140, 710,210\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,210, 710,280\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,280, 710,350\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,350, 710,420\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,420, 710,490\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,490, 710,560\" />\r\n</map> \r\n</div>\r\n\r\n\r\n <div *ngIf=\"section == 'production1'\">\r\n<img src=\"/assets/_production1final.jpg\" usemap=\"#Map\"/>\r\n<map  name=\"Map\" id=\"Map\">\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,40, 85,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,110, 85,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,180, 85,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,250, 85,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,320, 85,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,390, 85,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i8\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,460, 85,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i9\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,530, 85,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,600, 85,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,670, 85,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,740, 85,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,40,  175,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,110, 175,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,180, 175,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,250, 175,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,320, 175,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,390, 175,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,460, 175,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,530, 175,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,600, 175,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,670, 175,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,740, 175,810\" />\r\n\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,40,  260,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,110, 260,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,180, 260,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,250, 260,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,320, 260,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,390, 260,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,460, 260,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,530, 260,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,600, 260,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,670, 260,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,740, 260,810\" />\r\n\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,40,  350,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,110, 350,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,180, 350,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,250, 350,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,320, 350,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,390, 350,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,460, 350,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,530, 350,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,600, 350,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,670, 350,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,740, 350,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,40,  440,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,110, 440,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,180, 440,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,250, 440,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,320, 440,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,390, 440,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,460, 440,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,530, 440,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,600, 440,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,670, 440,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,740, 440,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,40,  525,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,110, 525,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,180, 525,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,250, 525,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,320, 525,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,390, 525,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,460, 525,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,530, 525,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,600, 525,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,670, 525,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,740, 525,810\" />\r\n  \r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,0,   615,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,40,  615,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,110, 615,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,180, 615,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,250, 615,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,320, 615,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,390, 615,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,460, 615,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,530, 615,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,600, 615,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,670, 615,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,740, 615,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,0,   700,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,40,  700,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,110, 700,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,180, 700,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,250, 700,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,320, 700,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,390, 700,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,460, 700,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,530, 700,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,600, 700,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,670, 700,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,740, 700,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,0,  790,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,40,  790,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,110, 790,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,180, 790,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,250, 790,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,320, 790,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,390, 790,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,460, 790,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,530, 790,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,600, 790,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,670, 790,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,740, 790,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,0,   880,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,40,  880,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,110, 880,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,180, 880,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,250, 880,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,320, 880,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,390, 880,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,460, 880,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,530, 880,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,600, 880,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,670, 880,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"q12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,740, 880,810\" /> \r\n\r\n\r\n</map> \r\n</div>\r\n\r\n\r\n<div *ngIf=\"section == 'production2'\">\r\n<img src=\"/assets/_production2final.jpg\" usemap=\"#Map\"/>\r\n<map  name=\"Map\" id=\"Map\">\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,40, 85,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,110, 85,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,180, 85,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,250, 85,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,320, 85,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,390, 85,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r8\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,460, 85,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r9\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,530, 85,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,600, 85,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,670, 85,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,740, 85,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,40,  175,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,110, 175,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,180, 175,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,250, 175,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,320, 175,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,390, 175,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,460, 175,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,530, 175,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,600, 175,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,670, 175,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,740, 175,810\" />\r\n\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,40,  260,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,110, 260,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,180, 260,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,250, 260,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,320, 260,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,390, 260,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,460, 260,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,530, 260,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,600, 260,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,670, 260,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,740, 260,810\" />\r\n\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,40,  350,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,110, 350,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,180, 350,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,250, 350,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,320, 350,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,390, 350,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,460, 350,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,530, 350,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,600, 350,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,670, 350,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,740, 350,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,40,  440,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,110, 440,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,180, 440,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,250, 440,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,320, 440,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,390, 440,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,460, 440,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,530, 440,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,600, 440,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,670, 440,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,740, 440,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,40,  525,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,110, 525,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,180, 525,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,250, 525,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,320, 525,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,390, 525,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,460, 525,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,530, 525,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,600, 525,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,670, 525,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,740, 525,810\" />\r\n  \r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,0,   615,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,40,  615,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,110, 615,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,180, 615,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,250, 615,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,320, 615,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,390, 615,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,460, 615,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,530, 615,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,600, 615,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,670, 615,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,740, 615,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,0,   700,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,40,  700,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,110, 700,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,180, 700,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,250, 700,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,320, 700,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,390, 700,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,460, 700,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,530, 700,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,600, 700,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,670, 700,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,740, 700,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,0,  790,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,40,  790,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,110, 790,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,180, 790,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,250, 790,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,320, 790,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,390, 790,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,460, 790,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,530, 790,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,600, 790,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,670, 790,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,740, 790,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,0,   880,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,40,  880,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,110, 880,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,180, 880,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,250, 880,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,320, 880,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,390, 880,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,460, 880,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,530, 880,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,600, 880,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,670, 880,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,740, 880,810\" /> \r\n\r\n</map> \r\n</div>\r\n  \r\n\r\n\r\n<div *ngIf=\"section == 'shipping'\">\r\n<img src=\"/assets/_shippingfinal.jpg\" usemap=\"#Map\"/>\r\n<map  name=\"Map\" id=\"Map\">\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab2\" href =\"javascript:void(0);\"shape=\"rect\"  coords=\"0,40,  85,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab3\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,110, 85,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab4\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,180, 85,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab5\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,250, 85,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab6\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,320, 85,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab7\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,390, 85,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab8\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,460, 85,530\" /> \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab9\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,530, 85,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,600, 85,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,670, 85,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,740, 85,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,0,   175,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,40,  175,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,110, 175,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,180, 175,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,250, 175,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,320, 175,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,390, 175,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,460, 175,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,530, 175,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,600, 175,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,670, 175,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,740, 175,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,0,   260,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,40,  260,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,110, 260,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,180, 260,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,250, 260,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,320, 260,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,390, 260,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,460, 260,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,530, 260,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,600, 260,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,670, 260,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,740, 260,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,0,   350,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,40,  350,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,110, 350,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,180, 350,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,250, 350,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,320, 350,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,390, 350,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,460, 350,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,530, 350,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,600, 350,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,670, 350,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,740, 350,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,0,   440,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,40,  440,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,110, 440,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,180, 440,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,250, 440,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,320, 440,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,390, 440,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,460, 440,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,530, 440,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,600, 440,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,670, 440,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,740, 440,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,0,   525,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,40,  525,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,110, 525,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,180, 525,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,250, 525,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,320, 525,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,390, 525,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,460, 525,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,530, 525,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,600, 525,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,670, 525,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,740, 525,810\" />\r\n  \r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,0,   615,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,40,  615,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,110, 615,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,180, 615,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,250, 615,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,320, 615,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,390, 615,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,460, 615,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,530, 615,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,600, 615,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,670, 615,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,740, 615,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,0,   700,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,40,  700,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,110, 700,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,180, 700,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,250, 700,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,320, 700,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,390, 700,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,460, 700,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,530, 700,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,600, 700,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,670, 700,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,740, 700,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,0,   790,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,40,  790,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,110, 790,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,180, 790,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,250, 790,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,320, 790,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,390, 790,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,460, 790,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,530, 790,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,600, 790,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,670, 790,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,740, 790,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,0,   880,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,40,  880,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,110, 880,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,180, 880,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,250, 880,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,320, 880,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,390, 880,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,460, 880,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,530, 880,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,600, 880,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,670, 880,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,740, 880,810\" /> \r\n\r\n\r\n</map> \r\n</div>\r\n<br>\r\n\r\n\r\n<button (click) = \"closeDialog()\" value=\"{{coordinate}}\"  style=\"max-height: 20%; width: 15%;height: 60px;\"> \r\n  <div *ngIf=\"coordinate != '' \" style=\"font-size: 18px\">Confirm {{coordinate}}</div>\r\n  <div  *ngIf=\"coordinate == '' \" style=\"font-size: 18px\"> Pick a coordinate </div> \r\n  </button>\r\n -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/offices/offices.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/offices/offices.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<maphilight id=\"statesMap\" [config]=\"config\">\r\n\r\n  <!-- <img src=\"./assets/gridoveroffices2.jpg\" alt=\"\" usemap=\"#Map\" /> -->\r\n  \r\n <img src=\"./assets/_officefinal.jpg\" alt=\"\" usemap=\"#Map\" /> \r\n <map name=\"Map\" id=\"Map\">\r\n   <!-- (TOP LEFT, BOTTOM RIGHT) -->\r\n   <!-- (x1,y1), (x2, y2) -->\r\n   <!-- rects are ~ 90x70 -->\r\n   \r\n   \r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office N\" title=\"Office N 108\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,175, 152, 224\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office L\" title=\"Office L 107\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,227, 140,280\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office J\" title=\"Office J 106\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,280, 140,315\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office G\" title=\"Office G 105\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,317, 140,379\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office E\" title=\"Office E 103\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,380, 130,436\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office C\" title=\"Office C 102\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,438, 130,490\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Entry A\" title=\"Entry A 101\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,491, 115,523\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Front OFfice\" title=\"Front Office\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"115, 491, 180 ,523\" />\r\n   \r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office M\" title=\"Office M\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"153,174, 190,239\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office K\" title=\"Office K\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"153,240, 190,284\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office I\" title=\"Office I\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"153,285, 190,331\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office H\" title=\"Office H\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"153,333, 190,375\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office F\" title=\"Office F\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"145,390, 190,433\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office D\" title=\"Office D\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"145,437, 180,485\" />\r\n   \r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Conference Room\" title=\"Conference Room O\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"190,173, 260,284\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office P\" title=\"Office P\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"190,286, 226,375\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office Q\" title=\"Office Q\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"190,390, 226,431\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Supply Closet 125\" title=\"Supply Closet 125\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"337,365, 353,522\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Break Room\" title=\"Break Room\" href=\"javascript:void(0);\" shape=\"poly\" coords=\"236,520,236,455,268,455,268,364,336,364,337,520\"  />\r\n   \r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office V\" title=\"Office V\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,175, 295,212\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office U\" title=\"Office U\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,214, 370,285\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office S\" title=\"Office S\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260 ,286,  334,326\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office T\" title=\"Office T\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"334,285, 365,325\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office W\" title=\"Office W\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"297,173, 331,213\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office X\" title=\"Office X\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"332,173, 368,211\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office Y\" title=\"Office Y\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"616,175, 653,224\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office Z\" title=\"Office Z\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"651,175, 687,224\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office AA\" title=\"Office AA\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"594,352, 652,396\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office AB\" title=\"Office AB\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"652,352, 698,409\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office AC\" title=\"Office AC\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"649,411, 698,451\" />\r\n   \r\n   \r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"R&D\" title=\"R&D\" href=\"javascript:void(0);\" shape=\"poly\" coords=\"386,175,387,324,587,324,700,322,698,254,698,225,616,225,614,175\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Between Maintenace and Offices\" title=\"Between Maintenace and Offices\" href=\"javascript:void(0);\" shape=\"poly\" coords=\"556,350,593,351,595,398,649,398,648,451,556,450\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Maintenace\" title=\"Maintenace\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"354,351, 556,453\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"Old Loading Dock\" title=\"Old Loading Dock\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"528,122, 698,172\" />\r\n   <area (click) = \"getLocation($event)\" alt=\"\" id=\"New Testing Area\" title=\"New Testing Area(?)\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"346, 0, 698,109\" />\r\n   \r\n   \r\n  </map> \r\n</maphilight>\r\n  <br>\r\n  <button (click) = \"closeDialog()\" value=\"{{coordinate}}\"  style=\"max-height: 20%; width: 15%;height: 60px;\"> \r\n      <div *ngIf=\"coordinate != '' \" style=\"font-size: 18px\">Confirm {{coordinate}}</div>\r\n      <div  *ngIf=\"coordinate == '' \" style=\"font-size: 18px\"> Pick a coordinate </div> \r\n    </button>\r\n    <div mat-dialog-actions  >\r\n      <button mat-button-raised style=\" max-height: 20%; width: 15%;height: 60px; font-size: 18px\" (click)=\"onNoClick()\">Close</button>\r\n      \r\n    </div>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    <!-- OLD COORDINATES\r\n      \r\n      \r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"a3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,140, 85,210\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"a4\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,210, 85,280\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"a5\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,280, 85,350\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"a6\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,350, 85,420\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"a7\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,420, 85,490\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"a8\" title=\"\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,490, 85,560\" />\r\n      \r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"b3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,140, 175,210\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"b4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,210, 175,280\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"b5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,280, 175,350\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"b6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,350, 175,420\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"b7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,420, 175,490\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"b8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,490, 175,560\" />\r\n      \r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"c3\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,140, 260,210\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"c4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,210, 260,280\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"c5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,280, 260,350\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"c6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,350, 260,420\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"c7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,420, 260,490\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"c8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,490, 260,560\" />\r\n      \r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"d3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,140, 350,210\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"d4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,210, 350,280\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"d5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,280, 350,350\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"d6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,350, 350,420\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"d7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,420, 350,490\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"d8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,490, 350,560\" />\r\n      \r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"e1\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,0,   440,70\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"e2\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,70,  440,140\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"e3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,140, 440,210\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"e4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,210, 440,280\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"e5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,280, 440,350\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"e6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,350, 440,420\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"e7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,420, 440,490\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"e\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"355,490, 440,560\" />\r\n      \r\n      \r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"f1\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,0,   530,70\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"f2\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,70,  530,140\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"f3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,140, 530,210\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"f4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,210, 530,280\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"f5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,280, 530,350\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"f6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,350, 530,420\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"f7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,420, 530,490\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"f8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,490, 530,560\" />\r\n\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"g1\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,0,   620,70\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"g2\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,70,  620,140\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"g3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,140, 620,210\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"g4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,210, 620,280\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"g5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,280, 620,350\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"g6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,350, 620,420\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"g7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,420, 620,490\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"g8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,490, 620,560\" />\r\n      \r\n      \r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"h1\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,0,   710,70\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"h2\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,70,  710,140\" />\r\n      <area (click) = \"getLocation($event)\" alt=\"\" id=\"h3\" title=\"test4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,140, 710,210\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h4\" title=\"test2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,210, 710,280\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h5\" title=\"test3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,280, 710,350\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h6\" title=\"test5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,350, 710,420\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h7\" title=\"test6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,420, 710,490\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"h8\" title=\"test7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"620,490, 710,560\" /> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/production1/production1.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/production1/production1.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<maphilight id=\"statesMap\" [config]=\"config\">\r\n\r\n  <img src=\"/assets/_production1final.jpg\" usemap=\"#Map\"/>\r\n  <map  name=\"Map\" id=\"Map\">\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,40, 85,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,110, 85,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,180, 85,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,250, 85,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,320, 85,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,390, 85,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i8\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,460, 85,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i9\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,530, 85,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,600, 85,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,670, 85,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,740, 85,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,40,  175,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,110, 175,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office AE\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"108,185, 165,229\" />\r\n  <!-- <area (click) = \"getLocation($event)\" alt=\"\" id=\"i4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,180, 175,250\" /> -->\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,250, 175,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,320, 175,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,390, 175,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,460, 175,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,530, 175,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,600, 175,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,670, 175,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"i12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,740, 175,810\" />\r\n  \r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,40,  260,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,110, 260,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,180, 260,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,250, 260,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,320, 260,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,390, 260,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,460, 260,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,530, 260,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,600, 260,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,670, 260,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"j12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,740, 260,810\" />\r\n  \r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,40,  350,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,110, 350,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,180, 350,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,250, 350,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,320, 350,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,390, 350,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,460, 350,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,530, 350,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,600, 350,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,670, 350,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"k12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,740, 350,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,40,  440,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,110, 440,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,180, 440,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,250, 440,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,320, 440,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,390, 440,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,460, 440,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,530, 440,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,600, 440,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,670, 440,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"L12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,740, 440,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,40,  525,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,110, 525,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,180, 525,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,250, 525,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,320, 525,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,390, 525,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,460, 525,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,530, 525,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,600, 525,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,670, 525,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"m12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,740, 525,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office AF\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"523,7, 625,90\" />\r\n  <!-- <area (click) = \"getLocation($event)\" alt=\"\" id=\"n1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,0,   615,40\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"n2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,40,  615,110\" /> -->\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"n3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,110, 615,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,180, 615,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,250, 615,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,320, 615,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,390, 615,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,460, 615,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,530, 615,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,600, 615,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,670, 615,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"n12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,740, 615,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,0,   700,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,40,  700,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,110, 700,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,180, 700,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,250, 700,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,320, 700,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,390, 700,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,460, 700,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,530, 700,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,600, 700,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,670, 700,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"o12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,740, 700,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,0,  790,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,40,  790,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,110, 790,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,180, 790,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,250, 790,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,320, 790,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,390, 790,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,460, 790,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,530, 790,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,600, 790,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,670, 790,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"p12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,740, 790,810\" />\r\n  \r\n  <!-- <area (click) = \"getLocation($event)\" alt=\"\" id=\"q1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,0,   880,40\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,40,  880,110\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,110, 880,180\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,180, 880,250\" /> -->\r\n    \r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office AH\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"780,8, 869, 76\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office AI\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"804,77, 869, 123\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office AJ\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"804,141, 869, 177\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"Office AL\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"783,182, 828,237\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,250, 880,320\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,320, 880,390\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,390, 880,460\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,460, 880,530\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,530, 880,600\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,600, 880,670\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,670, 880,740\" />\r\n    <area (click) = \"getLocation($event)\" alt=\"\" id=\"q12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,740, 880,810\" /> \r\n    \r\n    \r\n  </map> \r\n</maphilight>\r\n  <br>\r\n  <button (click) = \"closeDialog()\" value=\"{{coordinate}}\"  style=\"max-height: 20%; width: 15%;height: 60px;\"> \r\n      <div *ngIf=\"coordinate != '' \" style=\"font-size: 18px\">Confirm {{coordinate}}</div>\r\n      <div  *ngIf=\"coordinate == '' \" style=\"font-size: 18px\"> Pick a coordinate </div> \r\n    </button>\r\n    <div mat-dialog-actions  >\r\n      <button mat-button-raised style=\" max-height: 20%; width: 15%;height: 60px; font-size: 18px\" (click)=\"onNoClick()\">Close</button>\r\n      \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/production2/production2.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/production2/production2.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<maphilight id=\"statesMap\" [config]=\"config\">\r\n<img src=\"/assets/_production2final.jpg\" usemap=\"#Map\"/>\r\n<map  name=\"Map\" id=\"Map\">\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r2\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,40, 85,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r3\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,110, 85,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"Supply Closet 141\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,182, 85,221\" />\r\n\r\n  <!-- <area (click) = \"getLocation($event)\" alt=\"\" id=\"r4\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,180, 85,250\" /> -->\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r5\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,250, 85,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r6\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,320, 85,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r7\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,390, 85,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r8\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,460, 85,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r9\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,530, 85,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,600, 85,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,670, 85,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"r12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,740, 85,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,40,  175,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,110, 175,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,180, 175,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,250, 175,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,320, 175,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,390, 175,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,460, 175,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,530, 175,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,600, 175,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,670, 175,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"s12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,740, 175,810\" />\r\n\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,40,  260,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,110, 260,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,180, 260,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,250, 260,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,320, 260,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,390, 260,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,460, 260,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,530, 260,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,600, 260,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,670, 260,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"t12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,740, 260,810\" />\r\n\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,40,  350,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,110, 350,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,180, 350,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,250, 350,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,320, 350,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,390, 350,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,460, 350,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,530, 350,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,600, 350,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,670, 350,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"u12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"260,740, 350,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,40,  440,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,110, 440,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,180, 440,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,250, 440,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,320, 440,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,390, 440,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,460, 440,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,530, 440,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,600, 440,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,670, 440,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"v12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,740, 440,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,40,  525,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,110, 525,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,180, 525,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,250, 525,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,320, 525,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,390, 525,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,460, 525,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,530, 525,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,600, 525,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,670, 525,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"w12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,740, 525,810\" />\r\n  \r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,40,  615,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,110, 615,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,180, 615,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,250, 615,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,320, 615,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,390, 615,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,460, 615,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,530, 615,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,600, 615,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,670, 615,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"x12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"525,740, 615,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,40,  700,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,110, 700,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,180, 700,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,250, 700,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,320, 700,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,390, 700,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,460, 700,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,530, 700,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,600, 700,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,670, 700,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"y12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,740, 700,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,40,  790,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,110, 790,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,180, 790,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,250, 790,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,320, 790,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,390, 790,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,460, 790,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,530, 790,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,600, 790,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,670, 790,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"z12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,740, 790,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,40,  880,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,110, 880,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,180, 880,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,250, 880,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,320, 880,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,390, 880,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,460, 880,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,530, 880,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,600, 880,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"Receiving\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"785,703, 877,805\" />\r\n  <!-- <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,670, 880,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aa12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,740, 880,810\" />  -->\r\n\r\n</map> </maphilight>\r\n<br>\r\n<button (click) = \"closeDialog()\" value=\"{{coordinate}}\"  style=\"max-height: 20%; width: 15%;height: 60px;\"> \r\n  <div *ngIf=\"coordinate != '' \" style=\"font-size: 18px\">Confirm {{coordinate}}</div>\r\n  <div  *ngIf=\"coordinate == '' \" style=\"font-size: 18px\"> Pick a coordinate </div> \r\n  </button>\r\n  <div mat-dialog-actions  >\r\n    <button mat-button-raised style=\" max-height: 20%; width: 15%;height: 60px; font-size: 18px\" (click)=\"onNoClick()\">Close</button>\r\n\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/shipping/shipping.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/shipping/shipping.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<maphilight id=\"statesMap\" [config]=\"config\">\r\n        <img src=\"/assets/_shippingfinal.jpg\" usemap=\"#Map\"/>\r\n<map  name=\"Map\" id=\"Map\">\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab2\" href =\"javascript:void(0);\"shape=\"rect\"  coords=\"0,40,  85,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab3\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,110, 85,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab4\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,180, 85,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab5\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,250, 85,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab6\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,320, 85,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab7\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,390, 85,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab8\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,460, 85,530\" /> \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab9\" href=\"javascript:void(0);\" shape=\"rect\"  coords=\"0,530, 85,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,600, 85,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,670, 85,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ab12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"0,740, 85,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,0,   175,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,40,  175,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,110, 175,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,180, 175,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,250, 175,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,320, 175,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,390, 175,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,460, 175,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,530, 175,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,600, 175,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,670, 175,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ac12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"85,740, 175,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,0,   260,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,40,  260,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,110, 260,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,180, 260,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,250, 260,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,320, 260,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,390, 260,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,460, 260,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,530, 260,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,600, 260,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,670, 260,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ad12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"175,740, 260,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,0,   350,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,40,  350,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,110, 350,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,180, 350,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,250, 350,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,320, 350,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,390, 350,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,460, 350,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,530, 350,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,600, 350,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,670, 350,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ae12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"265,740, 350,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,0,   440,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,40,  440,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,110, 440,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,180, 440,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,250, 440,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,320, 440,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,390, 440,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,460, 440,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,530, 440,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,600, 440,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,670, 440,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"af12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"350,740, 440,810\" />\r\n  \r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,0,   525,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,40,  525,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,110, 525,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,180, 525,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,250, 525,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,320, 525,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,390, 525,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,460, 525,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,530, 525,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,600, 525,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,670, 525,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ag12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"440,740, 525,810\" />\r\n  \r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,0,   615,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,40,  615,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,110, 615,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,180, 615,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,250, 615,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,320, 615,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,390, 615,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,460, 615,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,530, 615,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,600, 615,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ah11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"530,670, 615,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"Shipping Office\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"522,732, 595,808\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai1\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,0,   700,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,40,  700,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,110, 700,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,180, 700,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,250, 700,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,320, 700,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,390, 700,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,460, 700,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,530, 700,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,600, 700,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,670, 700,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ai12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"615,740, 700,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,0,   790,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,40,  790,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,110, 790,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,180, 790,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,250, 790,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,320, 790,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,390, 790,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,460, 790,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,530, 790,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,600, 790,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,670, 790,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"aj12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"700,740, 790,810\" />\r\n\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,0,   880,40\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak2\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,40,  880,110\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak3\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,110, 880,180\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak4\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,180, 880,250\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak5\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,250, 880,320\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak6\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,320, 880,390\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak7\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,390, 880,460\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak8\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,460, 880,530\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak9\"  href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,530, 880,600\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak10\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,600, 880,670\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak11\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,670, 880,740\" />\r\n  <area (click) = \"getLocation($event)\" alt=\"\" id=\"ak12\" href=\"javascript:void(0);\" shape=\"rect\" coords=\"790,740, 880,810\" /> \r\n\r\n\r\n</map> \r\n</maphilight>\r\n<br>\r\n<button (click) = \"closeDialog()\" value=\"{{coordinate}}\"  style=\"max-height: 20%; width: 15%;height: 60px;\"> \r\n  <div *ngIf=\"coordinate != '' \" style=\"font-size: 18px\">Confirm {{coordinate}}</div>\r\n  <div  *ngIf=\"coordinate == '' \" style=\"font-size: 18px\"> Pick a coordinate </div> \r\n  </button>\r\n  <div mat-dialog-actions  >\r\n    <button mat-button-raised style=\" max-height: 20%; width: 15%;height: 60px; font-size: 18px\" (click)=\"onNoClick()\">Close</button>\r\n\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pin/keypad/keypad.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pin/keypad/keypad.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n  <button mat-raised-button (click) = \"addEntry(1)\">1</button>\r\n  <button mat-raised-button (click) = \"addEntry(2)\">2</button>\r\n  <button mat-raised-button (click) = \"addEntry(3)\">3</button>\r\n  <br>\r\n  <button mat-raised-button (click) = \"addEntry(4)\">4</button>\r\n  <button mat-raised-button (click) = \"addEntry(5)\">5</button>\r\n  <button mat-raised-button (click) = \"addEntry(6)\">6</button>\r\n  <br>\r\n  <button mat-raised-button (click) = \"addEntry(7)\">7</button>\r\n  <button mat-raised-button (click) = \"addEntry(8)\">8</button>\r\n  <button mat-raised-button (click) = \"addEntry(9)\">9</button>\r\n  <br>\r\n  <button mat-raised-button (click) = \"addEntry(0)\" style=\"padding-left: 46%; padding-right: 46%\">0</button>\r\n  <br>\r\n  <br>\r\n\r\n  <div id=\"entered\"  >\r\n    <input type=\"text\" disabled=\"true\" value={{entered}}>\r\n  </div>\r\n  <br>\r\n  <button mat-fab style=\"float:left; background-color: green\" (click) = \"back()\">\r\n    <mat-icon>keyboard_backspace</mat-icon>\r\n  </button>\r\n  <button mat-fab style=\"float: right; background-color: green\" (click) = \"enter()\">\r\n    <mat-icon>done_outline</mat-icon>\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pin/pin.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pin/pin.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/queue/queue.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/queue/queue.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <a href=\"javascript:void(0)\" (click) = \"locationPicker()\">Pick a chunk</a> \r\n\r\n<div *ngFor=\"let item of coordArray\">\r\n    <a href=\"javascript:void(0)\" id=\"{{item}}\" (click) = \"newBoxes(item)\"> {{item}}</a>\r\n</div> -->\r\n<body>\r\n    <mat-form-field  class=\"filterbar\">\r\n        <mat-icon matPrefix >filter_list</mat-icon>\r\n          <input matInput  (keyup)=\"applyFilter($event.target.value)\" ><mat-placeholder style=\"color: white; font-weight: 300; opacity: .5\">Filter</mat-placeholder>\r\n      </mat-form-field><br>\r\n      <button (click) = \"exportToJSON('Inventory')\">Export as JSON</button>\r\n      <button (click) = \"exportToCSV('Inventory')\">Export as CSV</button>\r\n      \r\n<table mat-table #table [dataSource]=\"queueSource\" matSort> \r\n\r\n    <!-- column named \"name\" -->\r\n    <ng-container matColumnDef=\"Name\">\r\n      <!-- a table header thats a mat header, and is sortable -->\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"name\"> Name </th>\r\n      <!-- item is an object inside of items -->\r\n      <td mat-cell *matCellDef=\"let item; let i = index\"> <a  href=\"javascript:void(0)\" (click) = \"sendIt(item.Name, coordArray[i], notesArray[i], item.Quantity, item.ID, i, item.Serial)\" >{{item.Name}} </a> </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"Quantity\">\r\n        <th  mat-header-cell *matHeaderCellDef class=\"quantity \" mat-sort-header > Quantity </th>\r\n      <td mat-cell *matCellDef=\"let item\" > {{item.Quantity}} </td>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"Location\"> \r\n      <th mat-header-cell *matHeaderCellDef class=\"location\"> Location </th>\r\n      <td mat-cell *matCellDef=\"let item; let i = index\"> \r\n        \r\n        <a href=\"javascript:void(0)\" (click) = \"locationPicker(i)\"  ><div *ngIf=\"coordArray[i] == null || coordArray[i] == ''\">Pick a Location</div>{{coordArray[i]}}</a> \r\n      </td>\r\n    </ng-container> \r\n    \r\n    <ng-container matColumnDef=\"User\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"user\" mat-sort-header > User </th>\r\n      <td mat-cell *matCellDef=\"let item\" > {{user}} </td>\r\n    </ng-container> \r\n  \r\n    <ng-container matColumnDef=\"Notes\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"notes\" mat-sort-header > Notes </th>\r\n      <td mat-cell *matCellDef=\"let item; let i = index\"> <input tabindex=\"1\" class=\"notesbox\" #textbox type=\"text\" [(ngModel)]=\"notesArray[i]\"  placeholder=\"Notes\"> </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Date\">\r\n      <th mat-header-cell *matHeaderCellDef class=\"date\" mat-sort-header > Date </th>\r\n      <td mat-cell *matCellDef=\"let item\"> {{item.Date.seconds * 1000 | date:'MM-dd-yyyy'}} </td>\r\n    </ng-container> \r\n  \r\n\r\n  \r\n  <!-- next 2 lines are determining what rows and columns to display, displayColumns is an array in the component -->\r\n    <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayColumns;\"></tr>\r\n  \r\n  </table>\r\n  <button mat-raised-button (click) = \"fullSend()\">send it dawg</button>\r\n</body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/scan/scan.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scan/scan.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#boxesDiv{\r\n    float:right;\r\n    margin-top: 20%;\r\n        margin: auto;\r\n        width: 90%;\r\n        max-height: 100%;\r\n        padding: 10px;\r\n      overflow: hidden;\r\n    \r\n}\r\n   .input{ \r\n    margin: 5px; \r\n    width: 15%;\r\n    padding: 10px;\r\n    font-size: 20px;\r\n    z-index: 5;\r\n   }\r\n   .placeholder{\r\n    position: absolute ;\r\n    z-index: 0;\r\n    /* color: silver;\r\n     margin: 5px; \r\n    width: 15%;\r\n    padding: 10px;\r\n    font-size: 20px;  */\r\n    \r\n    font-size: 20px;\r\n  \r\n}\r\n   /*\r\n#autofillDiv{\r\n    /* z-index: 100;\r\n    position: absolute; \r\n}*/\r\n   #confirmed{\r\n    \r\n    font-size: 30px;\r\n    padding-left: 37%;\r\n    padding-right: 37%;\r\n    \r\n    text-shadow:   1px 1px 2px black, 0 0 1em yellow, 0 0 0.2em gold;\r\n    overflow: hidden;\r\n}\r\n   body{\r\n    background-color: rgb(16, 95, 175);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGVBQWU7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixhQUFhO01BQ2YsZ0JBQWdCOztBQUV0QjtHQUNHO0lBQ0MsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7R0FDWDtHQUVGO0lBQ0csbUJBQW1CO0lBQ25CLFVBQVU7SUFDVjs7Ozt1QkFJbUI7O0lBRW5CLGVBQWU7O0FBRW5CO0dBQUc7Ozs7RUFJRDtHQUNGOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixnRUFBZ0U7SUFDaEUsZ0JBQWdCO0FBQ3BCO0dBQ0E7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hZGQvYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYm94ZXNEaXZ7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxufVxyXG4gICAuaW5wdXR7IFxyXG4gICAgbWFyZ2luOiA1cHg7IFxyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICB9XHJcblxyXG4gLnBsYWNlaG9sZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlIDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICAvKiBjb2xvcjogc2lsdmVyO1xyXG4gICAgIG1hcmdpbjogNXB4OyBcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4OyAgKi9cclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIFxyXG59ICAvKlxyXG4jYXV0b2ZpbGxEaXZ7XHJcbiAgICAvKiB6LWluZGV4OiAxMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59Ki9cclxuI2NvbmZpcm1lZHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNyU7XHJcbiAgICBcclxuICAgIHRleHQtc2hhZG93OiAgIDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMWVtIHllbGxvdywgMCAwIDAuMmVtIGdvbGQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDk1LCAxNzUpO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let AddComponent = class AddComponent {
    //something i wanted to do was get it to auto add values based on the database, not sure if time
    constructor(Firestore, afs) {
        this.Firestore = Firestore;
        this.afs = afs;
        this.id = 0;
        this.temp = [];
    }
    ngAfterViewInit() {
    }
    createTextBoxes(n) {
        var br = document.createElement("br"); //make a new line node
        document.getElementById("boxesDiv").appendChild(br); //add it to whatever element
        var node;
        for (let index = 0; index < n; index++) { //make N text boxes
            node = document.createElement("input"); // of type input 
            node.setAttribute("class", "input");
            jquery__WEBPACK_IMPORTED_MODULE_4__('#boxesDiv').append(node); //slap them onto the element with that ID
        }
        jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[0].setAttribute('placeholder', 'Item Name');
        jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[0].addEventListener('keyup', ($event) => this.suggestByName($event));
        jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[1].setAttribute('placeholder', 'Quantity');
        jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[2].setAttribute('placeholder', 'Description');
        jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[3].setAttribute('placeholder', 'Serial Number');
        jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[4].setAttribute('placeholder', 'URL ("g" for google)');
        jquery__WEBPACK_IMPORTED_MODULE_4__('#confirmed').hide();
        // on key down events lie below
        document.addEventListener('keydown', ($event) => {
            var arr = jquery__WEBPACK_IMPORTED_MODULE_4__('.input:enabled').toArray(); // make an html collection
            if ($event.key == "Backspace" || $event.key == 'Delete') { // if they pressed a get-rid-of-character-button
                jquery__WEBPACK_IMPORTED_MODULE_4__('.input').each(function () {
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__($event.target).val() == "Google Search") { // if the box text is google search
                        jquery__WEBPACK_IMPORTED_MODULE_4__($event.target).val(""); //set it to nothing
                    }
                });
            }
            if ($event.key == "Tab") { // if the key they pressed was tab
                var filledCount = 0; // for counting how many text boxes have something in them
                jquery__WEBPACK_IMPORTED_MODULE_4__('.input').each(function () {
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__($event.target).val() == "g" && jquery__WEBPACK_IMPORTED_MODULE_4__($event.target).attr('placeholder').includes('URL')) { // if the box text is g
                        jquery__WEBPACK_IMPORTED_MODULE_4__($event.target).val("Google Search"); //set it to google search
                    }
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__(this).val() != "") { // if the box text has osmething in it
                        filledCount++; // tick this up one
                    }
                });
            }
            if (filledCount == arr.length) { //if all the boxes had something in them
                var br = document.createElement("br"); //make a new line node
                jquery__WEBPACK_IMPORTED_MODULE_4__('#boxesDiv').append(br);
                for (let index = 0; index < 5; index++) { //make 5 text boxes
                    var node = document.createElement("input"); // of type input
                    jquery__WEBPACK_IMPORTED_MODULE_4__(node).addClass('input');
                    jquery__WEBPACK_IMPORTED_MODULE_4__('#boxesDiv').append(node);
                }
                //down here is just setting class names and placeholder text
                // arr = document.getElementsByClassName('input'); //temp array getting all the text boxes
                var arr1 = jquery__WEBPACK_IMPORTED_MODULE_4__('.input:enabled').toArray(); //temp array getting all the text boxes
                for (let x = 0; x < arr1.length; x += 5) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x].addEventListener('keyup', ($event) => this.suggestByName($event));
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x].setAttribute('placeholder', 'Item Name');
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x + 1].setAttribute('placeholder', 'Quantity');
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x + 2].setAttribute('placeholder', 'Description');
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x + 3].setAttribute('placeholder', 'Serial Number');
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x + 4].setAttribute('placeholder', 'Order URL ("g" for google)');
                }
            }
        }); //end event handeler
    }
    suggestByName($event) {
        var inp = jquery__WEBPACK_IMPORTED_MODULE_4__($event.target).val().toString().toUpperCase(); // the value of the text box 
        if ($event.keyCode != 13) { // if they didn't press enter
            jquery__WEBPACK_IMPORTED_MODULE_4__('#autofill').attr('placeholder', '');
            if (/[a-zA-Z0-9-_ ]/.test(inp)) { // if the key pressed was a number letter space hyphen or letter
                this.temp = [];
                if (jquery__WEBPACK_IMPORTED_MODULE_4__('#autofill').length == 0) { //if the autofill thing doesn't exist yet (length ==0 is only true when it doesn't exist)
                    var node = document.createElement('input'); //
                    node.className = 'placeholder';
                    node.disabled = true;
                    node.id = "autofill";
                    jquery__WEBPACK_IMPORTED_MODULE_4__('#autofillDiv').append(node);
                }
                let colRef = this.afs.collection('Inventory');
                let qry = colRef.ref.get()
                    .then(snapshot => {
                    snapshot.forEach(doc => {
                        if (doc.data().Name.toUpperCase().startsWith(inp)) {
                            this.temp.push(doc.data());
                        }
                    });
                }).then(() => {
                    if (this.temp[0] != undefined) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.placeholder').val(this.temp[0].Name);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.placeholder').val("");
                    }
                });
            }
        }
        else { //if they pressed enter
            if (this.temp[0] != null) {
                jquery__WEBPACK_IMPORTED_MODULE_4__($event.target).val(this.temp[0].Name);
                jquery__WEBPACK_IMPORTED_MODULE_4__($event.target).next('.input').next('.input').val(this.temp[0].Description).next('.input').val(this.temp[0].Serial).next('.input').val(this.temp[0].OrderUrl);
                jquery__WEBPACK_IMPORTED_MODULE_4__($event.target).next('.input').focus();
            }
        }
    }
    nextInvID() {
        let colRef = this.afs.collection('Inventory'); //from the inventory
        let qry = colRef.ref.orderBy('Name', 'asc').get().then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.data().ID != null && this.id < doc.data().ID) {
                    this.id = doc.data().ID + 1;
                }
                else if (doc.data().ID == null) {
                    this.id = 1;
                }
                else {
                    this.id = 1;
                }
            });
        });
        return this.id;
    }
    addToInv() {
        var badEnrtyFlag = false;
        var qtyEntry = 0;
        var inputArray = jquery__WEBPACK_IMPORTED_MODULE_4__('.input:enabled'); // something to iterate (not to be confused with integrate) with respect to
        var query = "";
        var addToQuery = "";
        console.log(this.id);
        this.id = this.nextInvID();
        console.log(this.id);
        //checking if the last 5 boxes are empty
        if (inputArray.length > 5) {
            if ((inputArray.val() == "" && inputArray.next().val() == "" && inputArray.next().next().val() == "" && inputArray.next().next().next().val() == "" && inputArray.next().next().next().next().val() == "")) {
                //remove the last 5 boxes on the page before continuing
                inputArray.each(function (i, val) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(val).remove();
                });
            }
        }
        else {
            inputArray.each(function (i, value) {
                if (jquery__WEBPACK_IMPORTED_MODULE_4__(value).attr('placeholder').includes('Quantity') && !/^\d+$/.test(jquery__WEBPACK_IMPORTED_MODULE_4__(value).val().toString())) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(value).css('box-shadow', '0px 0px 5px red');
                    badEnrtyFlag = true;
                }
                if (!(/^[0-9A-Za-z\s\-\_]+$/.test(jquery__WEBPACK_IMPORTED_MODULE_4__(value).val().toString())) && !badEnrtyFlag) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(value).css('box-shadow', '0px 0px 5px red');
                    badEnrtyFlag = true;
                }
                else if (!badEnrtyFlag) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(value).css('box-shadow', '');
                }
            });
        }
        //text box must contain letters, numbers, dashes, spaces, no emojis ERICK (-_-)
        if (!badEnrtyFlag) { // if all the entries were fine
            var query = "";
            var name = "";
            var desc = "";
            var sn = "";
            inputArray.each((i, box) => {
                //name
                if (jquery__WEBPACK_IMPORTED_MODULE_4__(box).attr('placeholder').includes('Name')) {
                    name = jquery__WEBPACK_IMPORTED_MODULE_4__(box).val().toString();
                    jquery__WEBPACK_IMPORTED_MODULE_4__(box).remove();
                }
                //qty
                if (jquery__WEBPACK_IMPORTED_MODULE_4__(box).attr('placeholder').includes('Quantity')) { //every fifth textbox, but 
                    qtyEntry = parseInt(jquery__WEBPACK_IMPORTED_MODULE_4__(box).val().toString());
                    jquery__WEBPACK_IMPORTED_MODULE_4__(box).remove();
                }
                //description
                if (jquery__WEBPACK_IMPORTED_MODULE_4__(box).attr('placeholder').includes('Description')) {
                    desc = jquery__WEBPACK_IMPORTED_MODULE_4__(box).val().toString();
                    jquery__WEBPACK_IMPORTED_MODULE_4__(box).remove();
                }
                //serial #
                if (jquery__WEBPACK_IMPORTED_MODULE_4__(box).attr('placeholder').includes('Serial')) {
                    sn = jquery__WEBPACK_IMPORTED_MODULE_4__(box).val().toString();
                    jquery__WEBPACK_IMPORTED_MODULE_4__(box).remove();
                }
                //url
                if (jquery__WEBPACK_IMPORTED_MODULE_4__(box).attr('placeholder').includes('URL') && jquery__WEBPACK_IMPORTED_MODULE_4__(box).val() == "Google Search") { //if the url box is a google searchy search
                    addToQuery = jquery__WEBPACK_IMPORTED_MODULE_4__(box).val().toString().replace(" ", "-");
                    query = "https://google.com/search?q=" + addToQuery;
                    jquery__WEBPACK_IMPORTED_MODULE_4__(box).remove();
                }
                else if (jquery__WEBPACK_IMPORTED_MODULE_4__(box).attr('placeholder').includes('URL')) {
                    query = jquery__WEBPACK_IMPORTED_MODULE_4__(box).val().toString();
                    jquery__WEBPACK_IMPORTED_MODULE_4__(box).remove();
                }
                //jam the check if it exists shit here
                var updateFlag = false;
                if (jquery__WEBPACK_IMPORTED_MODULE_4__(box).attr('placeholder').includes('URL') && query != "" && name != "" && typeof qtyEntry == "number") {
                    let colRef = this.afs.collection('Inventory'); //from the inventory
                    let qry = colRef.ref.orderBy('Name', 'asc').get().then(snapshot => {
                        snapshot.forEach(doc => {
                            if (name == doc.data().Name) {
                                doc.ref.update({
                                    Name: name,
                                    Quantity: qtyEntry,
                                    Description: desc,
                                    LastRestock: firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].Timestamp.fromDate(new Date),
                                    LastRestockQuantity: qtyEntry,
                                    Serial: sn,
                                    OrderURL: query
                                });
                                updateFlag = true;
                            }
                        });
                    });
                    if (!updateFlag) {
                        this.Firestore.inventoryEntry(//enter into db
                        name, qtyEntry, desc, sn, query);
                        jquery__WEBPACK_IMPORTED_MODULE_4__('br').next().remove();
                    }
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__('#confirmed').fadeIn("slow");
            jquery__WEBPACK_IMPORTED_MODULE_4__('#confirmed').fadeOut(2000);
            for (let index = 0; index < 5; index++) { //make 5 text boxes
                var node = document.createElement("input"); // of type input
                jquery__WEBPACK_IMPORTED_MODULE_4__(node).addClass('input');
                jquery__WEBPACK_IMPORTED_MODULE_4__('#boxesDiv').append(node);
            }
            var arr = document.getElementsByClassName('input'); //temp array getting all the text boxes
            for (let x = 0; x < arr.length; x += 5) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x].setAttribute('placeholder', 'Item Name');
                jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x + 1].setAttribute('placeholder', 'Quantity');
                jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x + 2].setAttribute('placeholder', 'Description');
                jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x + 3].setAttribute('placeholder', 'Serial Number');
                jquery__WEBPACK_IMPORTED_MODULE_4__('.input')[x + 4].setAttribute('placeholder', 'Order URL ("g" for google)');
            }
        }
    }
};
AddComponent.ctorParameters = () => [
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/add/add.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None //for the css file to see elements added later than load time
        ,
        styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
], AddComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color: rgb(16, 95, 175)\r\n}\r\n.mtab {\r\n    min-width : 0px;\r\n     width: 167px;\r\n     height: 42px;\r\n     border-radius: 3px;\r\n     background-color: #e0e0e0;\r\n    }\r\n::ng-deep.mat-tab-label.mat-tab-label-active:not(.mat-tab-disabled),\r\n  ::ng-deep.mat-tab-label.mat-tab-label-active.cdk-keyboard-focused:not(.mat-tab-disabled) {\r\n    opacity : 1;\r\n  }\r\n.spans{\r\n    box-shadow: 0px 0px 9px 6px rgb(0, 0, 0);\r\n    font-size: 23px ; \r\n    color: rgb(133, 33, 116);\r\n    font-weight: 500 ; \r\n    border-radius: 4px; padding: 3px\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxlQUFlO0tBQ2QsWUFBWTtLQUNaLFlBQVk7S0FDWixrQkFBa0I7S0FDbEIseUJBQXlCO0lBQzFCO0FBQ0Y7O0lBRUUsV0FBVztFQUNiO0FBQ0E7SUFDRSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUU7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDk1LCAxNzUpXHJcbn1cclxuLm10YWIge1xyXG4gICAgbWluLXdpZHRoIDogMHB4O1xyXG4gICAgIHdpZHRoOiAxNjdweDtcclxuICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICB9XHJcbiAgOjpuZy1kZWVwLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmU6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcclxuICA6Om5nLWRlZXAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcclxuICAgIG9wYWNpdHkgOiAxO1xyXG4gIH1cclxuICAuc3BhbnN7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCA2cHggcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1zaXplOiAyM3B4IDsgXHJcbiAgICBjb2xvcjogcmdiKDEzMywgMzMsIDExNik7XHJcbiAgICBmb250LXdlaWdodDogNTAwIDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IHBhZGRpbmc6IDNweFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");




let AppComponent = class AppComponent {
    constructor(Firestore, add) {
        this.Firestore = Firestore;
        this.add = add;
        this.addedBoxes = false;
        this.selectedIndex = 0;
        this.title = 'PROJECT NIGHTHAWK'; //default property from angular, idk why they named it project nighthawk
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
    addFirstBoxes(e) {
        this.selectedIndex = e.index;
        console.log(this.selectedIndex);
        if (e.index == 2 && !this.addedBoxes) {
            this.add.createTextBoxes(5);
            this.addedBoxes = true;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"], _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _scan_scan_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./scan/scan.component */ "./src/app/scan/scan.component.ts");
/* harmony import */ var _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @protacon/ng-virtual-keyboard */ "./node_modules/@protacon/ng-virtual-keyboard/dist/index.js");
/* harmony import */ var _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _queue_queue_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./queue/queue.component */ "./src/app/queue/queue.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _map_offices_offices_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./map/offices/offices.component */ "./src/app/map/offices/offices.component.ts");
/* harmony import */ var _map_production1_production1_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./map/production1/production1.component */ "./src/app/map/production1/production1.component.ts");
/* harmony import */ var _map_production2_production2_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./map/production2/production2.component */ "./src/app/map/production2/production2.component.ts");
/* harmony import */ var _map_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./map/shipping/shipping.component */ "./src/app/map/shipping/shipping.component.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./global */ "./src/app/global.ts");
/* harmony import */ var _pin_pin_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pin/pin.component */ "./src/app/pin/pin.component.ts");
/* harmony import */ var _decomission_decomission_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./decomission/decomission.component */ "./src/app/decomission/decomission.component.ts");
/* harmony import */ var _pin_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pin/keypad/keypad.component */ "./src/app/pin/keypad/keypad.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/manage/manage.component.ts");
/* harmony import */ var ng_maphilight__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ng-maphilight */ "./node_modules/ng-maphilight/fesm2015/ng-maphilight.js");
/* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./export/export.component */ "./src/app/export/export.component.ts");











//Angular Material Components











































//import {ChangeDetectorRef} from '@angular/core'




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _export_export_component__WEBPACK_IMPORTED_MODULE_57__["ExportComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_39__["AddComponent"],
            _scan_scan_component__WEBPACK_IMPORTED_MODULE_40__["ScanComponent"],
            _queue_queue_component__WEBPACK_IMPORTED_MODULE_43__["QueueComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_44__["MapComponent"],
            _map_offices_offices_component__WEBPACK_IMPORTED_MODULE_45__["OfficesComponent"],
            _map_production1_production1_component__WEBPACK_IMPORTED_MODULE_46__["Production1Component"],
            _map_production2_production2_component__WEBPACK_IMPORTED_MODULE_47__["Production2Component"],
            _map_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_48__["ShippingComponent"],
            _pin_pin_component__WEBPACK_IMPORTED_MODULE_50__["PinComponent"],
            _decomission_decomission_component__WEBPACK_IMPORTED_MODULE_51__["DecomissionComponent"],
            _pin_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_52__["KeypadComponent"],
            _manage_manage_component__WEBPACK_IMPORTED_MODULE_55__["ManageComponent"],
            _export_export_component__WEBPACK_IMPORTED_MODULE_57__["ExportComponent"],
        ],
        imports: [
            ng_maphilight__WEBPACK_IMPORTED_MODULE_56__["MaphilightModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_54__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterModule"].forRoot([]),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_41__["NgVirtualKeyboardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
        ],
        entryComponents: [_map_map_component__WEBPACK_IMPORTED_MODULE_44__["MapComponent"], _map_offices_offices_component__WEBPACK_IMPORTED_MODULE_45__["OfficesComponent"], _map_production1_production1_component__WEBPACK_IMPORTED_MODULE_46__["Production1Component"], _map_production2_production2_component__WEBPACK_IMPORTED_MODULE_47__["Production2Component"], _map_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_48__["ShippingComponent"], _pin_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_52__["KeypadComponent"]],
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"]],
        providers: [_export_export_component__WEBPACK_IMPORTED_MODULE_57__["ExportComponent"], _pin_pin_component__WEBPACK_IMPORTED_MODULE_50__["PinComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_53__["CookieService"], _firestore_service__WEBPACK_IMPORTED_MODULE_38__["FirestoreService"], _add_add_component__WEBPACK_IMPORTED_MODULE_39__["AddComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_44__["MapComponent"], _queue_queue_component__WEBPACK_IMPORTED_MODULE_43__["QueueComponent"], _map_production1_production1_component__WEBPACK_IMPORTED_MODULE_46__["Production1Component"], { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogRef"], useValue: {} }, { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_DATA"], useValue: {} }, _global__WEBPACK_IMPORTED_MODULE_49__["Globals"], _pin_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_52__["KeypadComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/decomission/decomission.component.css":
/*!*******************************************************!*\
  !*** ./src/app/decomission/decomission.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-sort-header-container {\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n    padding: 0px\r\n  }\r\n  td{\r\n    font-size: 20px\r\n}\r\n  .filterbar {\r\n    width: 30%;\r\n    font-size: 20px;\r\n    color: white;\r\n\r\n \r\n  }\r\n  .actions{\r\n    width: 10%; \r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n  .quantity{\r\n    width: 7%; \r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n  .location{\r\n    width: 7%; \r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n  .notes{\r\n    width: 40%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n  .name{\r\n    width: 15%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n  .user{\r\n    width: 6%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n  .date{\r\n    width: 7%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n  .mat-row:nth-child(odd){\r\n    background-color:rgb(48, 81, 173);\r\n    }\r\n  .mat-row:nth-child(even){\r\n    background-color:rgb(49, 73, 109);\r\n    }\r\n  .mat-column-Location{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n        }\r\n  .mat-column-Name{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n        }\r\n  .mat-column-User{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n            align-content: center;\r\n            \r\n        }\r\n  .mat-column-Notes{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n    \r\n        }\r\n  .mat-column-Date{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n    \r\n        }\r\n  .mat-column-Quantity{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n    \r\n        }\r\n  ::ng-deep.mat-form-field-underline {\r\n            /*change color of underline*/\r\n            background-color: white !important;\r\n          } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVjb21pc3Npb24vZGVjb21pc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFZO0lBQVosWUFBWTtJQUNaLHVCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEI7RUFDRjtFQUNBO0lBQ0U7QUFDSjtFQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZOzs7RUFHZDtFQUNGO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7RUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7RUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxpQ0FBaUM7SUFDakM7RUFDSjtJQUNJLGlDQUFpQztJQUNqQztFQUVBO1FBQ0ksNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEI7RUFDQTtRQUNBLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCO0VBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGtCQUFrQjtZQUNkLHFCQUFxQjs7UUFFekI7RUFDQTtRQUNBLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsa0JBQWtCOztRQUVsQjtFQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixrQkFBa0I7O1FBRWxCO0VBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGtCQUFrQjs7UUFFbEI7RUFDQTtZQUNJLDRCQUE0QjtZQUM1QixrQ0FBa0M7VUFDcEMiLCJmaWxlIjoic3JjL2FwcC9kZWNvbWlzc2lvbi9kZWNvbWlzc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHhcclxuICB9XHJcbiAgdGR7XHJcbiAgICBmb250LXNpemU6IDIwcHhcclxufVxyXG4uZmlsdGVyYmFyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gXHJcbiAgfVxyXG4uYWN0aW9uc3tcclxuICAgIHdpZHRoOiAxMCU7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnF1YW50aXR5e1xyXG4gICAgd2lkdGg6IDclOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2NhdGlvbntcclxuICAgIHdpZHRoOiA3JTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubm90ZXN7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5hbWV7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnVzZXJ7XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGF0ZXtcclxuICAgIHdpZHRoOiA3JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tYXQtcm93Om50aC1jaGlsZChvZGQpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDgsIDgxLCAxNzMpO1xyXG4gICAgfVxyXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0OSwgNzMsIDEwOSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtY29sdW1uLUxvY2F0aW9ue1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWNvbHVtbi1OYW1le1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWNvbHVtbi1Vc2Vye1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLm1hdC1jb2x1bW4tTm90ZXN7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5tYXQtY29sdW1uLURhdGV7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5tYXQtY29sdW1uLVF1YW50aXR5e1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH0gIl19 */"

/***/ }),

/***/ "./src/app/decomission/decomission.component.ts":
/*!******************************************************!*\
  !*** ./src/app/decomission/decomission.component.ts ***!
  \******************************************************/
/*! exports provided: DecomissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecomissionComponent", function() { return DecomissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../export/export.component */ "./src/app/export/export.component.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);








let DecomissionComponent = class DecomissionComponent {
    constructor(exp, firestore, cookie, db) {
        this.exp = exp;
        this.firestore = firestore;
        this.cookie = cookie;
        this.db = db;
        this.editMode = false;
        this.displayColumns = ['Name', 'Quantity', 'Location', 'User', 'Notes', 'Date', 'Actions',];
    }
    ngOnInit() {
        var date = new Date();
        var user = this.cookie.get("User");
        this.firestore.getDecom().subscribe(data => { this.items = data; this.decomSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data); this.decomSource.sort = this.sort; });
    }
    exportAsCSV(table) {
        this.exp.convertToCSV(table);
    }
    exportAsJSON(table) {
        this.exp.convertToJSON(table);
    }
    applyFilter(filterValue) {
        this.decomSource.filter = filterValue.trim().toLowerCase();
    }
    recomission($event, item) {
        var deleted = false;
        var docFound = false;
        ;
        let colRef = this.db.collection('Decomission');
        let invRef = this.db.collection('Inventory');
        let qry = colRef.ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.data().Name == item.Name && doc.data().Serial == item.Serial && doc.data().Location == item.Location && doc.data().Notes == item.Notes) { //match the doc to the item
                    invRef.ref.get().then(snap => {
                        console.log('yaw');
                        snap.forEach(invDoc => {
                            if (invDoc.data().Name == item.Name) {
                                var qty = parseInt(item.Quantity) + parseInt(invDoc.data().Quantity);
                                if (!deleted) {
                                    invDoc.ref.update({
                                        Quantity: qty
                                    });
                                    doc.ref.delete();
                                    docFound = true;
                                    deleted = true;
                                }
                            }
                        });
                    }).then(a => {
                        if (!docFound) {
                            var del = confirm("Item not found in Inventory. Do you want to delete it?");
                            if (del) {
                                let colRef = this.db.collection('Decomission');
                                let qry = colRef.ref.get().then(snapshot => {
                                    snapshot.forEach(doc => {
                                        if (doc.data().Name == item.Name && doc.data().Serial == item.Serial && doc.data().Location == item.Location && doc.data().Notes == item.Notes) {
                                            doc.ref.delete();
                                        }
                                    });
                                });
                            }
                        }
                    });
                }
            });
        });
    }
    deleteRow($event, item) {
        let colRef = this.db.collection('Decomission');
        let qry = colRef.ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log(item.Name);
                if (doc.data().Name == item.Name && doc.data().Serial == item.Serial && doc.data().Location == item.Location && doc.data().Notes == item.Notes) {
                    doc.ref.delete();
                }
            });
        });
    }
    saveChanges() {
        var allboxes = $('.editbox');
        var allboxesArr = $('.editbox').toArray();
        var badEntryFlag = false;
        var container = [];
        allboxes.each(v => {
            var boxVal = $($('.editbox')[v]).val().toString();
            if ($($('.editbox')[v]).hasClass('notesbox') && !/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal)) {
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ');
            }
            else if ($($('.editbox')[v]).hasClass('notesbox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('locationbox') && (!/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal))) { //lol, serial box
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ');
            }
            else if ($($('.editbox')[v]).hasClass('locationbox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('namebox') && (!/^[0-9A-Za-z\s\-\_\/]+$/.test(boxVal) || boxVal.trim() == "")) { //if we're talking to the name box, and the string is contains non-alphanumeric chars, and its empty
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red');
            }
            else if ($($('.editbox')[v]).hasClass('namebox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('quantitybox') && !/^[0-9]+$/.test(boxVal)) { // quantity must be a number and nothing else
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ');
            }
            else if ($($('.editbox')[v]).hasClass('quantitybox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('datebox') && /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(boxVal)) { //im too tired to make my own regex for this, heres one i found on stackoverflow. Matches dates
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red');
            }
            else if ($($('.editbox')[v]).hasClass('datebox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
        });
        if (!badEntryFlag) {
            console.log('full send boys');
            var ind = 0;
            for (let x = 0; x < allboxesArr.length; x += 5) {
                var temp = [];
                temp.push($(allboxesArr[x]).val().toString());
                temp.push(parseInt($(allboxesArr[x + 1]).toString()));
                temp.push($(allboxesArr[x + 2]).val().toString());
                temp.push($(allboxesArr[x + 3]).val().toString());
                temp.push($(allboxesArr[x + 4]).val());
                container.push(temp);
            }
            console.log(container);
            let colRef = this.db.collection('Decomission'); //from the inventory
            let qry = colRef.ref.get().then(snapshot => {
                snapshot.forEach(doc => {
                    for (let x = 0; x < container.length; x++) {
                        if (container[x][0] == doc.data().Name) {
                            doc.ref.update({
                                Name: $(allboxesArr[ind]).val().toString(),
                                Quantity: parseInt($(allboxesArr[ind + 1]).val().toString()),
                                Location: $(allboxesArr[ind + 2]).val().toString(),
                                Notes: $(allboxesArr[ind + 3]).val().toString(),
                                Date: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].Timestamp.fromDate(new Date(Date.parse(($(allboxesArr[ind + 4]).val().toString())))),
                            });
                        }
                    }
                    ind += 5; //go to next row
                });
            });
            alert('Decom updated!');
            this.editMode = false;
        }
    }
};
DecomissionComponent.ctorParameters = () => [
    { type: _export_export_component__WEBPACK_IMPORTED_MODULE_6__["ExportComponent"] },
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
], DecomissionComponent.prototype, "sort", void 0);
DecomissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-decomission',
        template: __webpack_require__(/*! raw-loader!./decomission.component.html */ "./node_modules/raw-loader/index.js!./src/app/decomission/decomission.component.html"),
        styles: [__webpack_require__(/*! ./decomission.component.css */ "./src/app/decomission/decomission.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_export_export_component__WEBPACK_IMPORTED_MODULE_6__["ExportComponent"], _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
], DecomissionComponent);



/***/ }),

/***/ "./src/app/export/export.component.css":
/*!*********************************************!*\
  !*** ./src/app/export/export.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cG9ydC9leHBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/export/export.component.ts":
/*!********************************************!*\
  !*** ./src/app/export/export.component.ts ***!
  \********************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



let ExportComponent = class ExportComponent {
    constructor(db) {
        this.db = db;
    }
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
                documentArr.push(doc.data()); //add the document to the array
            });
        }).then(() => {
            let data = JSON.stringify(documentArr); //make a Jason string of the doc array
            let uri = 'data:application/json;charset=utf-8,' + encodeURIComponent(data); //some encoding thing idk i found this on the internet
            let exportName = toExport + ".json"; //filename
            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', uri);
            linkElement.setAttribute('download', exportName);
            linkElement.click(); //runs the href of the element
        });
    }
    /**
     * Converts the table to a csv string, then calls the export function after converting
     * @param toExport Name of the table to be exported
     */
    convertToCSV(toExport) {
        let documentArr = [];
        let colRef = this.db.collection(toExport); // table ref
        let qry = colRef.ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                let tempData = doc.data(); //make a mutable version of the data to edit
                if (toExport == 'Inventory') { //need to do this check because inventory is the only table with a last restock date field
                    var newDate = new Date(parseInt((doc.data().LastRestock.toString().split(','))[0].replace(/\D/g, ''))).toDateString(); //new date string, from the documents restock date, picked apart for just the seconds
                    tempData.LastRestock = newDate; //change the date to a exportable format
                }
                else { //otherwise it has a date, instead of lastrestock
                    var newDate = new Date(parseInt((doc.data().Date.toString().split(','))[0].replace(/\D/g, ''))).toDateString(); //new date string, from the documents restock date, picked apart for just the seconds
                    tempData.Date = newDate; //change the date to a exportable format
                }
                documentArr.push(tempData); //add the document to the array of documents
            });
        }).then(a => {
            this.exportToCSV(documentArr, toExport); //full send 
        });
    }
    /**
     * Called by the converted to download the csv file
     * @param data the array of documents being sent
     * @param name name of the table, for file naming
     */
    exportToCSV(data, name) {
        const replacer = (key, value) => value === null ? '' : value;
        const header = Object.keys(data[0]);
        let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
        csv.unshift(header.join(','));
        let csvArray = csv.join('\r\n');
        var a = document.createElement('a');
        var blob = new Blob([csvArray], { type: 'text/csv' }), url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = name + ".csv";
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    }
};
ExportComponent.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-export',
        template: __webpack_require__(/*! raw-loader!./export.component.html */ "./node_modules/raw-loader/index.js!./src/app/export/export.component.html"),
        styles: [__webpack_require__(/*! ./export.component.css */ "./src/app/export/export.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], ExportComponent);



/***/ }),

/***/ "./src/app/firestore.service.ts":
/*!**************************************!*\
  !*** ./src/app/firestore.service.ts ***!
  \**************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let FirestoreService = class FirestoreService {
    constructor(db, datePipe) {
        this.db = db;
        this.datePipe = datePipe;
        this.mydate = new Date();
        this.done = false;
        this.newID = 0;
        this.invID = 0;
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
        this.remainingItems = 0;
        this.updateRemaining();
        this.getNextQueueID();
        this.getNextInvID();
    }
    queryInventory(field, value) {
        let invRef = this.db.collection('Inventory');
        let qry = invRef.ref.where(field, '==', value).get()
            .then(snapshot => {
            if (snapshot.empty) {
                return;
            }
            snapshot.forEach(doc => {
                if (doc.exists) {
                    return true;
                }
                console.log(doc.exists);
                console.log(doc.data().Description);
            });
        });
    }
    nameExistsInTable(collection, name) {
        let colRef = this.db.collection(collection);
        let qry = colRef.ref.get()
            .then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.data().Name == name) {
                    return true;
                }
            });
        });
        return false;
    }
    nameContainedInTable(collection, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let colRef = this.db.collection(collection);
            var temp = [];
            let qry = colRef.ref.get()
                .then(snapshot => {
                snapshot.forEach(doc => {
                    if (doc.data().Name.startsWith(name)) {
                        temp.push(doc.data().Name);
                    }
                });
            }).then(() => { return temp; });
            // .catch(err => {
            //   console.log('Error getting documents', err);
            // });
        });
    }
    /**
     * Add an entry into the Inventory table
     * @param name Name of item getting sent to inventory
     * @param qty How many youre adding
     * @param desc Description of the item
     * @param issn Serial number
     * @param orderUrl URL you want reorder button to go to
     */
    inventoryEntry(name, qty, desc, issn, orderUrl) {
        return this.db.collection('Inventory').add({
            Name: name,
            Description: desc,
            LastRestock: this.mydate,
            LastRestockQuantity: qty,
            Quantity: qty,
            Serial: issn,
            OrderUrl: orderUrl,
        });
    }
    restockEntry(name, qty) {
        //typesafe checks go here
        return this.db.collection('Restock').add({
            Name: name,
            Quantity: qty,
            Date: this.mydate
        });
    }
    getNextQueueID() {
        var makeID = 0;
        let colRef = this.db.collection('Queue');
        let qry = colRef.ref.orderBy('ID', 'desc').get()
            .then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.data().ID > makeID) {
                    makeID = doc.data().ID + 1;
                    this.newID = makeID;
                    console.log("newID: ", this.newID);
                }
            });
            if (makeID = 0) {
                this.newID = 1;
            }
            return this.newID;
        });
        return this.newID;
    }
    getNextInvID() {
        var makeID = 0;
        let colRef = this.db.collection('Inventory');
        let qry = colRef.ref.orderBy('ID', 'desc').get()
            .then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.data().ID > makeID) {
                    makeID = doc.data().ID + 1;
                    this.invID = makeID;
                    console.log("invID: ", this.invID);
                }
            });
            if (makeID == 0) {
                this.invID = 1;
            }
            return this.invID;
        });
        return this.invID;
    }
    updateRemaining() {
        this.remainingItems = 0;
        let colRef = this.db.collection('Queue');
        let qry = colRef.ref.orderBy('ID', 'desc').get()
            .then(snapshot => {
            snapshot.forEach(doc => {
                this.remainingItems++;
            });
        });
    }
    queueEntry(name, qty, user, id, serial) {
        this.updateRemaining();
        return this.db.collection('Queue').add({
            Date: this.mydate,
            Name: name,
            Quantity: qty,
            User: user,
            ID: id,
            Serial: serial
        });
    }
    manageEntry(itemName, user, location, notes, quantity, serial, id) {
        //would be good to have a query to check if an item of that same name exists at that location
        //and if so, just bump qty instead of new entry
        return this.db.collection('Manage').add({
            Name: itemName,
            Quantity: quantity,
            Location: location,
            Notes: notes,
            User: user,
            Date: this.mydate,
            Serial: serial,
            ID: id
        });
    }
    decomEntry(name, location, user, notes, date) {
        return this.db.collection('Decomission').add({
            Name: name,
            Location: location,
            User: user,
            Notes: notes,
            Date: date
        });
    }
    getManage() {
        return this.manageItems;
    }
    getQueue() {
        // console.log(this.db.collection('Inventory', ref => ref.where("Name", '==' , 'Test')))
        // console.log(this.db.collection<object>("Invetory", ref => ref.where("Name", "==", "Test")).doc);
        //this.items.forEach(a => {console.log(a[0].Description)})
        //Array.from(this.db.collection('Inventory' , ref => ref.where('Name', '==', 'Test')).snapshotChanges())
        return this.queueItems;
    }
    getInventory() {
        //  console.log(this.items);
        return this.items;
    }
    getRestock() {
        return this.restocks;
    }
    getDecom() {
        return this.decomItems;
    }
    decomission() {
        //ask for a reason why
        //remove from inventory, and manage
        //either remove it or cut and paste into decom table
    }
};
FirestoreService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
];
FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
], FirestoreService);



/***/ }),

/***/ "./src/app/global.ts":
/*!***************************!*\
  !*** ./src/app/global.ts ***!
  \***************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Globals = class Globals {
    constructor() {
        this.replace = "";
    }
};
Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Globals);



/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/*!***************************************************!*\
  !*** ./src/app/inventory/inventory.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    \r\n    background-color: rgb(16, 95, 175);\r\n}\r\ntd{\r\n    font-size: 20px;\r\n    color: rgb(214, 214, 214);\r\n}\r\n::ng-deep .mat-focused .mat-form-field-placeholder{\r\n\r\n    color:red;\r\n  }\r\n.filterbar {\r\n    width: 30%;\r\n    font-size: 20px;\r\n    color: white;\r\n\r\n \r\n  }\r\n.description{\r\n    \r\n    width: 15%; \r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.name{\r\n    width: 10%; \r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.quantity{\r\n    width: 3%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.lastrestock{\r\n    width: 7%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.lastrestockqty{\r\n    width: 5%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.serial{\r\n    width: 8%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.restock{\r\n    width: 10%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n::ng-deep.mat-form-field-underline {\r\n    /*change color of underline*/\r\n    background-color: white !important;\r\n  }\r\n/* for centering headers, sort messes with them */\r\n::ng-deep .mat-sort-header-container {\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n  }\r\n.mat-row:nth-child(odd){\r\n    background-color:rgb(48, 81, 173);\r\n    }\r\n.mat-row:nth-child(even){\r\n    background-color:rgb(49, 73, 109);\r\n    }\r\n.mat-column-Description{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n        }\r\n.mat-column-Name{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n        }\r\n.mat-column-Quantity{\r\n            border-right: 1px solid black;\r\n            \r\n            align-self: stretch;\r\n        text-align: center;\r\n        }\r\n.mat-column-LastRestock{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n            align-content: center;\r\n            \r\n        }\r\n.mat-column-LastRestockQuantity{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n    \r\n        }\r\n.mat-column-Serial{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n    \r\n        } \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLFNBQVM7RUFDWDtBQUNGO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZOzs7RUFHZDtBQUNGOztJQUVJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGtDQUFrQztFQUNwQztBQUNGLGlEQUFpRDtBQUNqRDtJQUNJLG1CQUFZO0lBQVosWUFBWTtJQUNaLHVCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLGlDQUFpQztJQUNqQztBQUNKO0lBQ0ksaUNBQWlDO0lBQ2pDO0FBR0E7UUFDSSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQjtBQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEI7QUFDQTtZQUNJLDZCQUE2Qjs7WUFFN0IsbUJBQW1CO1FBQ3ZCLGtCQUFrQjtRQUNsQjtBQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixrQkFBa0I7WUFDZCxxQkFBcUI7O1FBRXpCO0FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGtCQUFrQjs7UUFFbEI7QUFDQTtRQUNBLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsa0JBQWtCOztRQUVsQiIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgOTUsIDE3NSk7XHJcbn1cclxudGR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXBsYWNlaG9sZGVye1xyXG5cclxuICAgIGNvbG9yOnJlZDtcclxuICB9XHJcbi5maWx0ZXJiYXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiBcclxuICB9XHJcbi5kZXNjcmlwdGlvbntcclxuICAgIFxyXG4gICAgd2lkdGg6IDE1JTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmFtZXtcclxuICAgIHdpZHRoOiAxMCU7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnF1YW50aXR5e1xyXG4gICAgd2lkdGg6IDMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxhc3RyZXN0b2Nre1xyXG4gICAgd2lkdGg6IDclO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxhc3RyZXN0b2NrcXR5e1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNlcmlhbHtcclxuICAgIHdpZHRoOiA4JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5yZXN0b2Nre1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfSBcclxuLyogZm9yIGNlbnRlcmluZyBoZWFkZXJzLCBzb3J0IG1lc3NlcyB3aXRoIHRoZW0gKi9cclxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgfVxyXG4gICBcclxuICAubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ4LCA4MSwgMTczKTtcclxuICAgIH1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDksIDczLCAxMDkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5tYXQtY29sdW1uLURlc2NyaXB0aW9ue1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWNvbHVtbi1OYW1le1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWNvbHVtbi1RdWFudGl0eXtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5tYXQtY29sdW1uLUxhc3RSZXN0b2Nre1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLm1hdC1jb2x1bW4tTGFzdFJlc3RvY2tRdWFudGl0eXtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLm1hdC1jb2x1bW4tU2VyaWFse1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgfSBcclxuIl19 */"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inventory/inventory.component.ts ***!
  \**************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../export/export.component */ "./src/app/export/export.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../location.service */ "./src/app/location.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pin_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pin/keypad/keypad.component */ "./src/app/pin/keypad/keypad.component.ts");
/* harmony import */ var _pin_pin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pin/pin.component */ "./src/app/pin/pin.component.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);













let InventoryComponent = class InventoryComponent {
    constructor(exp, pin, db, firebaseService, dialog, loc, cookie) {
        this.exp = exp;
        this.pin = pin;
        this.db = db;
        this.firebaseService = firebaseService;
        this.dialog = dialog;
        this.loc = loc;
        this.cookie = cookie;
        this.myDate = new Date();
        this.v = true;
        this.editMode = false;
        this.displayColumns = ['Name', 'Quantity', 'Description', 'LastRestock', 'LastRestockQuantity', 'Serial', 'Restock'];
    }
    ngOnInit() {
        this.firebaseService.getInventory().subscribe(data => { this.items = data; this.itemsource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data); this.itemsource.sort = this.sort; });
    }
    scaleColor(qty, last) {
        var perc = (qty / last) * 100;
        if (perc >= 85) {
            return "#00ff00";
        }
        if (perc >= 70) {
            return "#6fff00";
        }
        if (perc >= 55) {
            return "#bcff00";
        }
        if (perc >= 40) {
            return "#fff700";
        }
        if (perc >= 25) {
            return "#ffc400";
        }
        if (perc >= 10) {
            return "#ff7700";
        }
        return "#ff0000";
    }
    invDelete() {
        let colRef = this.db.collection('Inventory'); // inventory reference
        let qry = colRef.ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.db.collection('Inventory').doc(doc.ref.id).delete();
            });
        });
        alert("Cleared Inventory");
    }
    mngDelete() {
        let colRef = this.db.collection('Manage'); // inventory reference
        let qry = colRef.ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.db.collection('Manage').doc(doc.ref.id).delete();
            });
        });
        alert("Cleared Manage");
    }
    queDelete() {
        let colRef = this.db.collection('Queue'); // inventory reference
        let qry = colRef.ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.db.collection('Queue').doc(doc.ref.id).delete();
            });
        });
        alert("Cleared Queue");
    }
    decDelete() {
        let colRef = this.db.collection('Decomission'); // inventory reference
        let qry = colRef.ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.db.collection('Decomission').doc(doc.ref.id).delete();
            });
        });
        alert("Cleared Decomissioned items");
    }
    massDelete() {
        var enteredPin = "";
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"](); //options for dialog boxes
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true; //so they can't exit
        const dialogRef = this.dialog.open(_pin_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_9__["KeypadComponent"], dialogConfig); //open the keypad 
        dialogRef.afterClosed().subscribe(data => {
            enteredPin = data;
            if (this.pin.pins.includes(enteredPin)) {
                var table = prompt("Delete all from which table");
                switch (table) {
                    case 'Inventory':
                        this.invDelete();
                        break;
                    case 'Manage':
                        this.mngDelete();
                        break;
                    case 'Queue':
                        this.queDelete();
                        break;
                    case 'Decomission':
                        this.decDelete();
                        break;
                }
            }
        });
    }
    queueItem(e, name, qty, serial) {
        var newID = 0;
        let colRef = this.db.collection('Queue');
        let qry = colRef.ref.orderBy('ID', 'asc').get()
            .then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.data().ID > newID) {
                    newID = doc.data().ID + 1;
                }
            });
        }).then(() => {
            this.firebaseService.queueEntry(name, qty, this.cookie.get("User"), newID, serial);
        });
    }
    decomission(e, serial, quantityLeft) {
        var qty;
        qty = prompt("How many are you decomissioning", "1"); //prompt asking how many of the item to send to yeesus
        if (qty != null && qty != 0 && qty > 0 && qty <= quantityLeft) { // if they entered a number over 0 and its less than or equal to the number remaining
            var notes = prompt("Notes about the decomission");
            if (notes == null) {
                notes = "";
            }
            let colRef = this.db.collection('Inventory'); // inv ref
            let decRef = this.db.collection('Decomission'); // decom ref
            let qry = colRef.ref.get().then(snapshot => {
                snapshot.forEach(doc => {
                    if (doc.data().Serial == serial) { // find the matching entry
                        colRef.doc(doc.id).update({
                            Quantity: quantityLeft - qty
                        });
                        decRef.add({
                            Quantity: qty,
                            Description: doc.data().Description,
                            Name: doc.data().Name,
                            Serial: doc.data().Serial,
                            Notes: notes,
                            Location: "N/A",
                            User: this.cookie.get("User"),
                            Date: this.myDate
                        });
                    }
                });
            });
        }
    }
    restock(e, serial) {
        var s = (e.currentTarget.attributes['id'].value);
        var a = s.split(' ');
        var qty;
        qty = prompt("How many are you buying", "1");
        if (qty != null && qty != 0 && qty > 0) {
            qty = parseInt(qty); // gets number from box
            var url = a[0];
            var name = a[1];
            var mydate = new Date();
            let colRef = this.db.collection('Inventory');
            let qry = colRef.ref.get()
                .then(snapshot => {
                snapshot.forEach(doc => {
                    if (doc.data().Serial == serial) {
                        colRef.doc(doc.id).update({
                            LastRestockQuantity: qty,
                            LastRestock: mydate,
                            Quantity: qty + doc.data().Quantity
                        });
                    }
                });
            });
            window.open(url);
        }
        else if (qty != null) { //alert box returns null on cancel
            alert("Bad entry try again sir");
        }
    }
    deleteRow($event, x) {
        //  console.log(x)
        var allboxesArr = $('.editbox').toArray();
        let colRef = this.db.collection('Inventory'); //from the inventory
        let qry = colRef.ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.data().Name == x.Name && doc.data().Serial == x.Serial && doc.data().Quantity == x.Quantity && doc.data().Description == x.Description && doc.data().LastRestock == x.LastRestock && doc.data().LastRestockQuantity == x.LastRestockQuantity) {
                    doc.ref.delete();
                }
            });
        });
        //find the doc with the matching name qty desc lastrestock lrq serial
        //remove it
    }
    exportAsCSV(table) {
        this.exp.convertToCSV(table);
    }
    exportAsJSON(table) {
        this.exp.convertToJSON(table);
    }
    applyFilter(filterValue) {
        this.itemsource.filter = filterValue.trim().toLowerCase();
    }
    saveChanges() {
        var allboxes = $('.editbox');
        var allboxesArr = $('.editbox').toArray();
        var badEntryFlag = false;
        var container = [];
        allboxes.each(v => {
            var boxVal = $($('.editbox')[v]).val().toString();
            if ($($('.editbox')[v]).hasClass('descriptionbox') && !/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal)) {
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ');
            }
            else if ($($('.editbox')[v]).hasClass('descriptionbox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('serialbox') && (!/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal))) { //lol, serial box
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ');
            }
            else if ($($('.editbox')[v]).hasClass('serialbox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('namebox') && (!/^[0-9A-Za-z\s\-\_]+$/.test(boxVal) || boxVal.trim() == "")) { //if we're talking to the name box, and the string is contains non-alphanumeric chars, and its empty
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red');
            }
            else if ($($('.editbox')[v]).hasClass('namebox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('quantitybox') && !/^[0-9]+$/.test(boxVal)) { // quantity must be a number and nothing else
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ');
            }
            else if ($($('.editbox')[v]).hasClass('quantitybox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('lastrestockquantitybox') && !/^[0-9]+$/.test(boxVal)) { // quantity must be a number and nothing else
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ');
            }
            else if ($($('.editbox')[v]).hasClass('lastrestockquantitybox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('lastrestockbox') && /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(boxVal)) { //im too tired to make my own regex for this, heres one i found on stackoverflow. Matches dates
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red');
            }
            else if ($($('.editbox')[v]).hasClass('lastrestockbox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
        });
        if (!badEntryFlag) {
            console.log('full send boys');
            var ind = 0;
            for (let x = 0; x < allboxesArr.length; x += 6) {
                var temp = [];
                temp.push($(allboxesArr[x]).val().toString());
                temp.push(parseInt($(allboxesArr[x + 1]).toString()));
                temp.push($(allboxesArr[x + 2]).val().toString());
                temp.push($(allboxesArr[x + 3]).val().toString());
                temp.push(parseInt($(allboxesArr[x + 4]).val().toString()));
                temp.push($(allboxesArr[x + 5]).val().toString());
                container.push(temp);
            }
            console.log(container);
            let colRef = this.db.collection('Inventory'); //from the inventory
            let qry = colRef.ref.get().then(snapshot => {
                snapshot.forEach(doc => {
                    for (let x = 0; x < container.length; x++) {
                        if (container[x][0] == doc.data().Name) {
                            doc.ref.update({
                                Name: $(allboxesArr[ind]).val().toString(),
                                Quantity: parseInt($(allboxesArr[ind + 1]).val().toString()),
                                Description: $(allboxesArr[ind + 2]).val().toString(),
                                LastRestock: firebase__WEBPACK_IMPORTED_MODULE_11__["firestore"].Timestamp.fromDate(new Date(Date.parse(($(allboxesArr[ind + 3]).val().toString())))),
                                LastRestockQuantity: parseInt($(allboxesArr[ind + 4]).val().toString()),
                                Serial: $(allboxesArr[ind + 5]).val().toString()
                            });
                        }
                    }
                    ind += 6; //go to next row
                });
            });
            alert('Inventory updated!');
            this.editMode = false;
        }
    }
};
InventoryComponent.ctorParameters = () => [
    { type: _export_export_component__WEBPACK_IMPORTED_MODULE_1__["ExportComponent"] },
    { type: _pin_pin_component__WEBPACK_IMPORTED_MODULE_10__["PinComponent"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
], InventoryComponent.prototype, "sort", void 0);
InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'inventory',
        template: __webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/index.js!./src/app/inventory/inventory.component.html"),
        styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_export_export_component__WEBPACK_IMPORTED_MODULE_1__["ExportComponent"], _pin_pin_component__WEBPACK_IMPORTED_MODULE_10__["PinComponent"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], InventoryComponent);



/***/ }),

/***/ "./src/app/location.service.ts":
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _queue_queue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queue/queue.component */ "./src/app/queue/queue.component.ts");




let LocationService = class LocationService {
    constructor(map, queue) {
        this.map = map;
        this.queue = queue;
    }
    setCoordinateArray() {
    }
    getCoordinate(e) {
        var temp = "";
        temp = e.target.id;
        return temp.toUpperCase();
    }
};
LocationService.ctorParameters = () => [
    { type: _map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"] },
    { type: _queue_queue_component__WEBPACK_IMPORTED_MODULE_3__["QueueComponent"] }
];
LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _queue_queue_component__WEBPACK_IMPORTED_MODULE_3__["QueueComponent"]])
], LocationService);



/***/ }),

/***/ "./src/app/manage/manage.component.css":
/*!*********************************************!*\
  !*** ./src/app/manage/manage.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\r\n    font-size: 20px\r\n}\r\na{\r\n    color: gold\r\n}\r\nbody{\r\n    background-color: rgb(16, 95, 175)\r\n}\r\n.filterbar {\r\n    width: 30%;\r\n    font-size: 20px;\r\n    color: white;\r\n\r\n \r\n  }\r\n::ng-deep.mat-form-field-underline {\r\n    /*change color of underline*/\r\n    background-color: white !important;\r\n  }\r\n.location{\r\n    width: 15%; \r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.name{\r\n    width: 10%; \r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.quantity{\r\n    width: 3%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.user{\r\n    width: 10%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.notes{\r\n    width: 5%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.date{\r\n    width: 10%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.actions{\r\n    width: 10%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n/* for centering headers, sort messes with them */\r\n::ng-deep .mat-sort-header-container {\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n  }\r\n.mat-row:nth-child(odd){\r\n    background-color:rgb(48, 81, 173);\r\n    }\r\n.mat-row:nth-child(even){\r\n    background-color:rgb(49, 73, 109);\r\n    }\r\n.mat-column-Location{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n        }\r\n.mat-column-Name{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n        }\r\n.mat-column-Quantity{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n        }\r\n.mat-column-User{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n            align-content: center;\r\n            \r\n        }\r\n.mat-column-Notes{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n    \r\n        }\r\n.mat-column-Date{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n    \r\n        }\r\n.mat-column-Actions{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n    \r\n        } \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZOzs7RUFHZDtBQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGtDQUFrQztFQUNwQztBQUNGO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0EsaURBQWlEO0FBQ2pEO0lBQ0ksbUJBQVk7SUFBWixZQUFZO0lBQ1osdUJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtBQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDO0FBQ0o7SUFDSSxpQ0FBaUM7SUFDakM7QUFFQTtRQUNJLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCO0FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQjtBQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEI7QUFDQTtRQUNBLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsa0JBQWtCO1lBQ2QscUJBQXFCOztRQUV6QjtBQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixrQkFBa0I7O1FBRWxCO0FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsbUJBQW1CO1FBQ25CLGtCQUFrQjs7UUFFbEI7QUFDQTtRQUNBLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsa0JBQWtCOztRQUVsQiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS9tYW5hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRke1xyXG4gICAgZm9udC1zaXplOiAyMHB4XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiBnb2xkXHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgOTUsIDE3NSlcclxufVxyXG4uZmlsdGVyYmFyIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gXHJcbiAgfVxyXG4gIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfSBcclxuLmxvY2F0aW9ue1xyXG4gICAgd2lkdGg6IDE1JTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmFtZXtcclxuICAgIHdpZHRoOiAxMCU7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnF1YW50aXR5e1xyXG4gICAgd2lkdGg6IDMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnVzZXJ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5vdGVze1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRhdGV7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFjdGlvbnN7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLyogZm9yIGNlbnRlcmluZyBoZWFkZXJzLCBzb3J0IG1lc3NlcyB3aXRoIHRoZW0gKi9cclxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgfVxyXG4gICBcclxuICAubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ4LCA4MSwgMTczKTtcclxuICAgIH1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDksIDczLCAxMDkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LWNvbHVtbi1Mb2NhdGlvbntcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1jb2x1bW4tTmFtZXtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1jb2x1bW4tUXVhbnRpdHl7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAubWF0LWNvbHVtbi1Vc2Vye1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLm1hdC1jb2x1bW4tTm90ZXN7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5tYXQtY29sdW1uLURhdGV7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5tYXQtY29sdW1uLUFjdGlvbnN7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICB9IFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/manage/manage.component.ts":
/*!********************************************!*\
  !*** ./src/app/manage/manage.component.ts ***!
  \********************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../export/export.component */ "./src/app/export/export.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global */ "./src/app/global.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);










let ManageComponent = class ManageComponent {
    constructor(exp, db, cookie, firebaseService, dialog, map, dialogRef, data, global) {
        this.exp = exp;
        this.db = db;
        this.cookie = cookie;
        this.firebaseService = firebaseService;
        this.dialog = dialog;
        this.map = map;
        this.dialogRef = dialogRef;
        this.global = global;
        this.myDate = new Date();
        this.editMode = false;
        this.coordArray = [];
        this.displayColumns = ['Name', 'Quantity', 'Location', 'User', 'Notes', 'Date', 'Actions'];
    }
    applyFilter(filterValue) {
        this.manageSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.firebaseService.getManage().subscribe(data => { this.items = data; this.manageSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data); this.manageSource.sort = this.sort; });
    }
    inventory(e, item) {
        var description = "";
        var url = "";
        var matchID = "";
        let invRef = this.db.collection('Inventory'); //from the inventory
        let qry2 = invRef.ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                if (item.Name == doc.data().Name) {
                    matchID = doc.id;
                    description = doc.data().Description;
                    url = doc.data().OrderUrl;
                }
            });
        }).then(() => {
            if (url != "") {
                let colRef = this.db.collection('Manage'); //from the inventory
                let qry = colRef.ref.get().then(snapshot => {
                    snapshot.forEach(doc => {
                        if (item.ID == doc.data().ID) {
                            invRef.ref.get().then(invdoc => {
                                invdoc.forEach(inventry => {
                                    var n = parseInt(inventry.data().Quantity) + parseInt(item.Quantity);
                                    this.db.collection('Inventory').doc(matchID).update({
                                        Name: item.Name,
                                        Quantity: n,
                                        Description: inventry.data().Description,
                                        LastRestock: inventry.data().LastRestock,
                                        LastRestockQuantity: inventry.data().LastRestockQuantity,
                                        OrderUrl: inventry.data().OrderUrl,
                                        Serial: inventry.data().Serial
                                    });
                                });
                            });
                            doc.ref.delete();
                            //find item with the same name, get its url set url var to that
                            // check if it exists
                        }
                    });
                });
            }
            else {
                var del = confirm('something went wrong\nDelete entry without sending to inventory?');
                if (del) {
                    let colRef = this.db.collection('Manage'); //from the inventory
                    let qry = colRef.ref.get().then(snapshot => {
                        snapshot.forEach(doc => {
                            if (item.ID == doc.data().ID) {
                                doc.ref.delete();
                                //find item with the same name, get its url set url var to that
                                // check if it exists
                            }
                        });
                    });
                }
            }
        });
    }
    decomission(e, serial, quantity, loc, notes) {
        var qty;
        qty = prompt("How many are you decomissioning", "1"); //prompt asking how many of the item to send to yeesus
        if (qty <= quantity) {
            if (qty != null && qty != 0 && qty > 0) { // if they entered a number over 0 and its less than or equal to the number remaining
                let colRef = this.db.collection('Manage'); // inv ref
                let decRef = this.db.collection('Decomission'); // decom ref
                let qry = colRef.ref.get().then(snapshot => {
                    snapshot.forEach(doc => {
                        if (doc.data().Serial == serial && serial != null) { // find the matching entry
                            decRef.add({
                                Quantity: qty,
                                Name: doc.data().Name,
                                Serial: doc.data().Serial,
                                Notes: notes,
                                Location: loc,
                                User: this.cookie.get("User"),
                                Date: this.myDate
                            });
                            colRef.doc(doc.id).delete(); //delete the doc
                        }
                    });
                });
            }
        }
        else {
            alert("Enter a valid number");
        }
    }
    //need this to update in the db
    locationPicker(e) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"](); //options for dialog boxes
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        const dialogRef = this.dialog.open(_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], dialogConfig); //open the map component
        dialogRef.afterClosed().subscribe(data => {
            if (data != null) { //if the componenet sent back some kind of data
                this.coordArray[e] = data; //e is the index in the coord array that lines up with the queue entry 
            }
        });
    }
    exportAsCSV(table) {
        this.exp.convertToCSV(table);
    }
    exportAsJSON(table) {
        this.exp.convertToCSV(table);
    }
    saveChanges() {
        var allboxes = $('.editbox');
        var allboxesArr = $('.editbox').toArray();
        var badEntryFlag = false;
        var container = [];
        allboxes.each(v => {
            var boxVal = $($('.editbox')[v]).val().toString();
            if ($($('.editbox')[v]).hasClass('notesbox') && !/^$|^[0-9A-Za-z\s\-\_]+$/.test(boxVal)) {
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ');
            }
            else if ($($('.editbox')[v]).hasClass('notesbox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('namebox') && (!/^[0-9A-Za-z\s\-\_]+$/.test(boxVal) || boxVal.trim() == "")) { //if we're talking to the name box, and the string is contains non-alphanumeric chars, and its empty
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red');
            }
            else if ($($('.editbox')[v]).hasClass('namebox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('quantitybox') && !/^[0-9]+$/.test(boxVal)) { // quantity must be a number and nothing else
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px 2px red ');
            }
            else if ($($('.editbox')[v]).hasClass('quantitybox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
            if ($($('.editbox')[v]).hasClass('datebox') && /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(boxVal)) { //im too tired to make my own regex for this, heres one i found on stackoverflow. Matches dates
                badEntryFlag = true;
                $($('.editbox')[v]).css('box-shadow', '0px 0px 5px red');
            }
            else if ($($('.editbox')[v]).hasClass('datebox')) {
                $($('.editbox')[v]).css('box-shadow', 'none');
            }
        });
        if (!badEntryFlag) {
            console.log('full send boys');
            var ind = 0;
            for (let x = 0; x < allboxesArr.length; x += 4) {
                var temp = [];
                temp.push($(allboxesArr[x]).val().toString());
                temp.push(parseInt($(allboxesArr[x + 1]).toString()));
                temp.push($(allboxesArr[x + 2]).val().toString());
                temp.push($(allboxesArr[x + 3]).val().toString());
                container.push(temp);
            }
            let colRef = this.db.collection('Manage'); //from the inventory
            let qry = colRef.ref.get().then(snapshot => {
                snapshot.forEach(doc => {
                    for (let x = 0; x < container.length; x++) {
                        if (container[x][0] == doc.data().Name) {
                            doc.ref.update({
                                Name: $(allboxesArr[ind]).val().toString(),
                                Quantity: parseInt($(allboxesArr[ind + 1]).val().toString()),
                                Notes: $(allboxesArr[ind + 2]).val().toString(),
                                Date: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].Timestamp.fromDate(new Date(Date.parse(($(allboxesArr[ind + 3]).val().toString())))),
                            });
                        }
                    }
                    ind += 4; //go to next row
                });
            });
            alert('Manage updated!');
            this.editMode = false;
        }
    }
};
ManageComponent.ctorParameters = () => [
    { type: _export_export_component__WEBPACK_IMPORTED_MODULE_1__["ExportComponent"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _global__WEBPACK_IMPORTED_MODULE_6__["Globals"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
], ManageComponent.prototype, "sort", void 0);
ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-manage',
        template: __webpack_require__(/*! raw-loader!./manage.component.html */ "./node_modules/raw-loader/index.js!./src/app/manage/manage.component.html"),
        styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/manage/manage.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_export_export_component__WEBPACK_IMPORTED_MODULE_1__["ExportComponent"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _global__WEBPACK_IMPORTED_MODULE_6__["Globals"]])
], ManageComponent);



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _offices_offices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offices/offices.component */ "./src/app/map/offices/offices.component.ts");
/* harmony import */ var _production1_production1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./production1/production1.component */ "./src/app/map/production1/production1.component.ts");
/* harmony import */ var _production2_production2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./production2/production2.component */ "./src/app/map/production2/production2.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/map/shipping/shipping.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");










let MapComponent = class MapComponent {
    constructor(dialog, dialogRef, data, fb, globals) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.globals = globals;
        this.test = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"];
        this.coordinate = "";
        this.coordinateArray = [];
        this.coords = data;
    } //was data.coords not ""
    ngOnInit() {
        this.form = this.fb.group({
            coords: [this.coords, []],
        });
        this.globals.replace = "";
    }
    save() {
        this.dialogRef.close(this.form.value);
    }
    locationPicker(s) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.width = "70%";
        if (s == "offices") { // if they press office button
            // close the current one (area choice)
            const dialogRef = this.dialog.open(_offices_offices_component__WEBPACK_IMPORTED_MODULE_3__["OfficesComponent"], dialogConfig); //open 
            dialogRef.afterClosed().subscribe(data => 
            // console.log(datab)
            this.dialogRef.close(data));
        }
        else if (s == "production1") {
            const dialogRef = this.dialog.open(_production1_production1_component__WEBPACK_IMPORTED_MODULE_4__["Production1Component"], dialogConfig); //open 
            dialogRef.afterClosed().subscribe(data => 
            // console.log(datab)
            this.dialogRef.close(data));
        }
        else if (s == "production2") {
            const dialogRef = this.dialog.open(_production2_production2_component__WEBPACK_IMPORTED_MODULE_5__["Production2Component"], dialogConfig); //open 
            dialogRef.afterClosed().subscribe(data => 
            // console.log(datab)
            this.dialogRef.close(data));
        }
        else if (s == "shipping") {
            const dialogRef = this.dialog.open(_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_6__["ShippingComponent"], dialogConfig); //open 
            dialogRef.afterClosed().subscribe(data => 
            // console.log(datab)
            this.dialogRef.close(data));
        }
    }
    /*
      openDialogOffices(): void {
    
    
        const dialogRef = this.dialog.open(OfficesComponent, {
          width: '90%',
          
          data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
          this.officeCoord = result;
          console.log(this.officeCoord)
          this.coordinateArray.push(this.officeCoord)
          console.log(this.coordinateArray)
          return this.officeCoord;
          
        });
      }
    
    
      openDialogProduction1() {
        const dialogRef = this.dialog.open(Production1Component, {
          width: '90%',
          data: {},
    
        });
        dialogRef.afterClosed().subscribe(result => {
          this.production1Coord = result;
          console.log(this.production1Coord)
          return this.production1Coord;
        });
      }
    
      openDialogProduction2(): void {
        const dialogRef = this.dialog.open(Production2Component, {
          width: '90%',
          data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
          this.production2Coord = result;
          console.log(this.production2Coord)
          return this.production2Coord;
        });
      }
      openDialogShipping(): void {
        const dialogRef = this.dialog.open(ShippingComponent, {
          width: '90%',
          data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
          this.shippingCoord = result;
          console.log(this.shippingCoord)
          return this.shippingCoord;
        });
      }
    */
    getLocation(e) {
        this.coordinate = (e.target.id).toUpperCase();
    }
};
MapComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: src_app_global__WEBPACK_IMPORTED_MODULE_9__["Globals"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
        styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_global__WEBPACK_IMPORTED_MODULE_9__["Globals"]])
], MapComponent);



/***/ }),

/***/ "./src/app/map/offices/offices.component.css":
/*!***************************************************!*\
  !*** ./src/app/map/offices/offices.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9vZmZpY2VzL29mZmljZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/map/offices/offices.component.ts":
/*!**************************************************!*\
  !*** ./src/app/map/offices/offices.component.ts ***!
  \**************************************************/
/*! exports provided: OfficesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficesComponent", function() { return OfficesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



//import { LocationService } from 'src/app/location.service';
let OfficesComponent = class OfficesComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.config = {
            fade: true,
            alwaysOn: false,
            neverOn: false,
            // fill
            fill: true,
            fillColor: '#ffa200',
            fillOpacity: 0.4,
            // stroke
            stroke: true,
            strokeColor: '#4d0ec0',
            strokeOpacity: 1,
            strokeWidth: 1,
            // shadow:
            shadow: true,
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 10
        };
        this.coordinate = "";
    }
    ngOnInit() {
    }
    getLocation(e) {
        this.coordinate = (e.target.id).toUpperCase();
    }
    closeDialog() {
        //   this.queue.coordinateArray.push(this.dialogRef.close(this.coordinate));
        return console.log(this.dialogRef.close(this.coordinate));
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
OfficesComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
OfficesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offices',
        template: __webpack_require__(/*! raw-loader!./offices.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/offices/offices.component.html"),
        styles: [__webpack_require__(/*! ./offices.component.css */ "./src/app/map/offices/offices.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], OfficesComponent);



/***/ }),

/***/ "./src/app/map/production1/production1.component.css":
/*!***********************************************************!*\
  !*** ./src/app/map/production1/production1.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9wcm9kdWN0aW9uMS9wcm9kdWN0aW9uMS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/map/production1/production1.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/map/production1/production1.component.ts ***!
  \**********************************************************/
/*! exports provided: Production1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Production1Component", function() { return Production1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let Production1Component = class Production1Component {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.config = {
            fade: true,
            alwaysOn: false,
            neverOn: false,
            // fill
            fill: true,
            fillColor: '#ffa200',
            fillOpacity: 0.4,
            // stroke
            stroke: true,
            strokeColor: '#4d0ec0',
            strokeOpacity: 1,
            strokeWidth: 1,
            // shadow:
            shadow: true,
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 10
        };
        this.coordinate = "";
    }
    ngOnInit() {
    }
    getLocation(e) {
        this.coordinate = (e.target.id).toUpperCase();
    }
    closeDialog() {
        //   this.queue.coordinateArray.push(this.dialogRef.close(this.coordinate));
        return console.log(this.dialogRef.close(this.coordinate));
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
Production1Component.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
Production1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-production1',
        template: __webpack_require__(/*! raw-loader!./production1.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/production1/production1.component.html"),
        styles: [__webpack_require__(/*! ./production1.component.css */ "./src/app/map/production1/production1.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], Production1Component);



/***/ }),

/***/ "./src/app/map/production2/production2.component.css":
/*!***********************************************************!*\
  !*** ./src/app/map/production2/production2.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9wcm9kdWN0aW9uMi9wcm9kdWN0aW9uMi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/map/production2/production2.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/map/production2/production2.component.ts ***!
  \**********************************************************/
/*! exports provided: Production2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Production2Component", function() { return Production2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let Production2Component = class Production2Component {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.config = {
            fade: true,
            alwaysOn: false,
            neverOn: false,
            // fill
            fill: true,
            fillColor: '#ffa200',
            fillOpacity: 0.4,
            // stroke
            stroke: true,
            strokeColor: '#4d0ec0',
            strokeOpacity: 1,
            strokeWidth: 1,
            // shadow:
            shadow: true,
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 10
        };
        this.coordinate = "";
    }
    ngOnInit() {
    }
    getLocation(e) {
        this.coordinate = (e.target.id).toUpperCase();
    }
    closeDialog() {
        //   this.queue.coordinateArray.push(this.dialogRef.close(this.coordinate));
        return console.log(this.dialogRef.close(this.coordinate));
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
Production2Component.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
Production2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-production2',
        template: __webpack_require__(/*! raw-loader!./production2.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/production2/production2.component.html"),
        styles: [__webpack_require__(/*! ./production2.component.css */ "./src/app/map/production2/production2.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], Production2Component);



/***/ }),

/***/ "./src/app/map/shipping/shipping.component.css":
/*!*****************************************************!*\
  !*** ./src/app/map/shipping/shipping.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9zaGlwcGluZy9zaGlwcGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/map/shipping/shipping.component.ts":
/*!****************************************************!*\
  !*** ./src/app/map/shipping/shipping.component.ts ***!
  \****************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ShippingComponent = class ShippingComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.config = {
            fade: true,
            alwaysOn: false,
            neverOn: false,
            // fill
            fill: true,
            fillColor: '#ffa200',
            fillOpacity: 0.4,
            // stroke
            stroke: true,
            strokeColor: '#4d0ec0',
            strokeOpacity: 1,
            strokeWidth: 1,
            // shadow:
            shadow: true,
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 10
        };
        this.coordinate = "";
    }
    ngOnInit() {
    }
    getLocation(e) {
        this.coordinate = (e.target.id).toUpperCase();
    }
    closeDialog() {
        //   this.queue.coordinateArray.push(this.dialogRef.close(this.coordinate));
        return console.log(this.dialogRef.close(this.coordinate));
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ShippingComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
ShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping',
        template: __webpack_require__(/*! raw-loader!./shipping.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/shipping/shipping.component.html"),
        styles: [__webpack_require__(/*! ./shipping.component.css */ "./src/app/map/shipping/shipping.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], ShippingComponent);



/***/ }),

/***/ "./src/app/pin/keypad/keypad.component.css":
/*!*************************************************!*\
  !*** ./src/app/pin/keypad/keypad.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    height: 90px;\r\n    width: 90px;\r\n    font-size: 26px;\r\n    border: 1px solid gray\r\n}\r\n#entered{\r\n    align-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center\r\n}\r\ninput{\r\n    width: 93%;\r\n    padding-top: 15px;\r\n    align-content: center;\r\n    text-align: center;\r\n    font-size: 23px;\r\n    font-weight: 500;\r\n    box-shadow: 0px 0px 2px 2px black\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGluL2tleXBhZC9rZXlwYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmO0FBQ0o7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBa0I7WUFBbEI7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Bpbi9rZXlwYWQva2V5cGFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXlcclxufVxyXG4jZW50ZXJlZHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxufVxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggYmxhY2tcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pin/keypad/keypad.component.ts":
/*!************************************************!*\
  !*** ./src/app/pin/keypad/keypad.component.ts ***!
  \************************************************/
/*! exports provided: KeypadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeypadComponent", function() { return KeypadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let KeypadComponent = class KeypadComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.entered = "";
    }
    ngOnInit() {
    }
    addEntry(n) {
        if (this.entered.length < 4) {
            this.entered += n.toString();
        }
    }
    back() {
        this.entered = this.entered.slice(0, this.entered.length - 1);
    }
    enter() {
        this.dialogRef.close(this.entered);
    }
};
KeypadComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
KeypadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-keypad',
        template: __webpack_require__(/*! raw-loader!./keypad.component.html */ "./node_modules/raw-loader/index.js!./src/app/pin/keypad/keypad.component.html"),
        styles: [__webpack_require__(/*! ./keypad.component.css */ "./src/app/pin/keypad/keypad.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], KeypadComponent);



/***/ }),

/***/ "./src/app/pin/pin.component.css":
/*!***************************************!*\
  !*** ./src/app/pin/pin.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bpbi9waW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pin/pin.component.ts":
/*!**************************************!*\
  !*** ./src/app/pin/pin.component.ts ***!
  \**************************************/
/*! exports provided: PinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinComponent", function() { return PinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _queue_queue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queue/queue.component */ "./src/app/queue/queue.component.ts");
/* harmony import */ var _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keypad/keypad.component */ "./src/app/pin/keypad/keypad.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");






let PinComponent = class PinComponent {
    constructor(queue, dialog, dialogRef, data, cookie) {
        this.queue = queue;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.cookie = cookie;
        this.pins = ["1111", "2222"]; //approved pins
        this.users = ["Elliot", "Erick"]; // users, their index is the same as their pin
        this.approved = false;
    }
    ngOnInit() {
        if (this.cookie.get("User") == "") { // if the cookie is expired or doesnt exist, prompt keypad
            this.enteredPin = "";
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"](); //options for dialog boxes
            dialogConfig.autoFocus = true;
            dialogConfig.disableClose = true; //so they can't exit
            const dialogRef = this.dialog.open(_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_4__["KeypadComponent"], dialogConfig); //open the keypad 
            dialogRef.afterClosed().subscribe(data => { this.enteredPin = data; this.checkPin(); });
        }
        else if (this.cookie.get("User") != "") {
            this.approved = true;
        }
    }
    /**
     * Checks if the pin entered from the keypad is an approved pin or not
     */
    checkPin() {
        for (let ind = 0; ind < this.pins.length; ind++) {
            if (this.enteredPin == this.pins[ind]) {
                this.approvePin(this.users[ind]);
                this.approved = true;
                break;
            }
        }
        if (!this.approved) {
            this.badPin();
        }
    }
    approvePin(user) {
        this.cookie.set('User', user, 1);
        this.queue.ngOnInit();
    }
    /**
     * Gets called when someone enters a bad PIN into the keypad.
     * Deletes the cookie, and reopens the dialog
     */
    badPin() {
        this.cookie.deleteAll();
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"](); //options for dialog boxes
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        const dialogRef = this.dialog.open(_keypad_keypad_component__WEBPACK_IMPORTED_MODULE_4__["KeypadComponent"], dialogConfig); //open the map component
        dialogRef.afterClosed().subscribe(data => { this.enteredPin = data; this.checkPin(); });
        var message = document.createElement("p");
        message.setAttribute("value", "Invalid PIN");
        message.style.fontSize = "25px";
        message.style.color = "red";
    }
};
PinComponent.ctorParameters = () => [
    { type: _queue_queue_component__WEBPACK_IMPORTED_MODULE_3__["QueueComponent"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
PinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pin',
        template: __webpack_require__(/*! raw-loader!./pin.component.html */ "./node_modules/raw-loader/index.js!./src/app/pin/pin.component.html"),
        styles: [__webpack_require__(/*! ./pin.component.css */ "./src/app/pin/pin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_queue_queue_component__WEBPACK_IMPORTED_MODULE_3__["QueueComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], PinComponent);



/***/ }),

/***/ "./src/app/queue/queue.component.css":
/*!*******************************************!*\
  !*** ./src/app/queue/queue.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: gold\r\n}\r\n.date{\r\n    \r\n    width:7%; \r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.filterbar {\r\n    width: 30%;\r\n    font-size: 20px;\r\n    color: white;\r\n\r\n \r\n  }\r\n.notesbox{\r\n    margin: 5px; \r\n    height: 15px;\r\n    width: 90%; \r\n    padding: 5px;\r\n    font-size: 20px;\r\n    background-color: rgb(201, 201, 201);\r\n    border-color: rgb(105, 105, 105);\r\n    border-width: 3px\r\n}\r\n.user{\r\n    width: 5%; \r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.location{\r\n    width: 10%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.quantity{\r\n    width: 5%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.name{\r\n    width: 15%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.notes{\r\n    width: 20%;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n.mat-row:nth-child(odd){\r\n    background-color:rgb(48, 81, 173);\r\n    }\r\n.mat-row:nth-child(even){\r\n    background-color:rgb(49, 73, 109);\r\n    }\r\n.mat-column-Name{\r\n        border-right: 1px solid black;\r\n        align-self: stretch;\r\n        text-align: center;\r\n        }\r\n.mat-column-Quantity{\r\n            border-right: 1px solid black;\r\n            align-self: stretch;\r\n            text-align: center;\r\n        }\r\n.mat-column-Date{\r\n            border-right: 1px solid black;\r\n            align-self: stretch;\r\n            text-align: center;\r\n            \r\n        }\r\n.mat-column-Notes{\r\n            border-right: 1px solid black;\r\n            align-self: stretch;\r\n            text-align: center;\r\n    \r\n        }\r\n.mat-column-Location{\r\n            border-right: 1px solid black;\r\n            align-self: stretch;\r\n            text-align: center;\r\n    \r\n        }\r\n.mat-column-User{\r\n            border-right: 1px solid black;\r\n            align-self: stretch;\r\n            text-align: center;\r\n    \r\n        }\r\n::ng-deep .mat-sort-header-container {\r\n            display:-webkit-box;\r\n            display:flex;\r\n            -webkit-box-pack:center;\r\n                    justify-content:center;\r\n          }\r\ntd{\r\n              font-size: 20px\r\n          }\r\na:link:active, a:visited:active { \r\n            color: red;\r\n          }\r\na{\r\n            color: gold\r\n        }\r\n/* a{\r\n              color: rgb(6, 158, 145);\r\n          } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVldWUvcXVldWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTs7SUFFSSxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTs7O0VBR2Q7QUFDRjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQztBQUNKO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDO0FBQ0o7SUFDSSxpQ0FBaUM7SUFDakM7QUFFSTtRQUNBLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCO0FBQ0E7WUFDSSw2QkFBNkI7WUFDN0IsbUJBQW1CO1lBQ25CLGtCQUFrQjtRQUN0QjtBQUNBO1lBQ0ksNkJBQTZCO1lBQzdCLG1CQUFtQjtZQUNuQixrQkFBa0I7O1FBRXRCO0FBQ0E7WUFDSSw2QkFBNkI7WUFDN0IsbUJBQW1CO1lBQ25CLGtCQUFrQjs7UUFFdEI7QUFDQTtZQUNJLDZCQUE2QjtZQUM3QixtQkFBbUI7WUFDbkIsa0JBQWtCOztRQUV0QjtBQUNBO1lBQ0ksNkJBQTZCO1lBQzdCLG1CQUFtQjtZQUNuQixrQkFBa0I7O1FBRXRCO0FBQ0M7WUFDRyxtQkFBWTtZQUFaLFlBQVk7WUFDWix1QkFBc0I7b0JBQXRCLHNCQUFzQjtVQUN4QjtBQUNBO2NBQ0k7VUFDSjtBQUNBO1lBQ0UsVUFBVTtVQUNaO0FBQ0E7WUFDRTtRQUNKO0FBQ0U7O2FBRUciLCJmaWxlIjoic3JjL2FwcC9xdWV1ZS9xdWV1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiBnb2xkXHJcbn1cclxuLmRhdGV7XHJcbiAgICBcclxuICAgIHdpZHRoOjclOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5maWx0ZXJiYXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiBcclxuICB9XHJcbi5ub3Rlc2JveHtcclxuICAgIG1hcmdpbjogNXB4OyBcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiA5MCU7IFxyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTA1LCAxMDUsIDEwNSk7XHJcbiAgICBib3JkZXItd2lkdGg6IDNweFxyXG59XHJcbi51c2Vye1xyXG4gICAgd2lkdGg6IDUlOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5sb2NhdGlvbntcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucXVhbnRpdHl7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmFtZXtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubm90ZXN7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0OCwgODEsIDE3Myk7XHJcbiAgICB9XHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQ5LCA3MywgMTA5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5tYXQtY29sdW1uLU5hbWV7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtY29sdW1uLVF1YW50aXR5e1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLm1hdC1jb2x1bW4tRGF0ZXtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICAubWF0LWNvbHVtbi1Ob3Rlc3tcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLm1hdC1jb2x1bW4tTG9jYXRpb257XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5tYXQtY29sdW1uLVVzZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgIDo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRke1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYTpsaW5rOmFjdGl2ZSwgYTp2aXNpdGVkOmFjdGl2ZSB7IFxyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IGdvbGRcclxuICAgICAgICB9XHJcbiAgICAgICAgICAvKiBhe1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoNiwgMTU4LCAxNDUpO1xyXG4gICAgICAgICAgfSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/queue/queue.component.ts":
/*!******************************************!*\
  !*** ./src/app/queue/queue.component.ts ***!
  \******************************************/
/*! exports provided: QueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueComponent", function() { return QueueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/global */ "./src/app/global.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../export/export.component */ "./src/app/export/export.component.ts");











let QueueComponent = class QueueComponent {
    constructor(exp, db, cookie, dialog, map, dialogRef, data, firebaseService, global) {
        this.exp = exp;
        this.db = db;
        this.cookie = cookie;
        this.dialog = dialog;
        this.map = map;
        this.dialogRef = dialogRef;
        this.firebaseService = firebaseService;
        this.global = global;
        this.coordArray = [];
        this.displayColumns = ['Name', 'Quantity', 'Location', 'User', 'Notes', 'Date',];
        this.notesArray = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](true, []);
        this.remainingItems = 0;
        this.coords = data.coords;
    }
    ngOnInit() {
        this.firebaseService.getQueue().subscribe(data => { this.items = data; this.queueSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data); this.queueSource.sort = this.sort; });
        if (this.cookie.get("User") == "" || this.cookie.get("User") == null) {
            this.user = "Mystery";
        }
        else {
            this.user = this.cookie.get("User");
        }
    }
    exportAsCSV(table) {
        this.exp.convertToCSV(table);
    }
    exportAsJSON(table) {
        this.exp.convertToJSON(table);
    }
    applyFilter(filterValue) {
        this.queueSource.filter = filterValue.trim().toLowerCase();
    }
    /**
     * Pulls up a dialog box, which has some buttons that pull up another dialog box with image-maps of the building
     * @param e the index being passed, normally from the view, to set the location to
     */
    locationPicker(e) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"](); //options for dialog boxes
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        const dialogRef = this.dialog.open(_map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], dialogConfig); //open the map component
        dialogRef.afterClosed().subscribe(data => {
            if (data != null) { //if the componenet sent back some kind of data
                this.coordArray[e] = data; //e is the index in the coord array that lines up with the queue entry 
            }
        });
    }
    /**
     *
     * @param name The name of the item getting sent
     * @param location Where it's getting sent to, from imagemap
     * @param notes Notes about the sent asset from the text box
     * @param quantity Qty to be sent out
     * @param ID Janky primary key for deleting entries
     * @param ind Index of the item in the table/observable
     */
    sendIt(name, location, notes, quantity, ID, ind, serial) {
        if (notes == null) { //firebase gets mad if its null 
            notes = "";
        }
        if (location != null && location != "") { // failsafe null or "" because i dont actually know what the default is, but it has to have a value
            let colRef = this.db.collection('Queue'); //from the queue
            let qry = colRef.ref.orderBy('ID', 'asc').get()
                .then(snapshot => {
                snapshot.forEach(doc => {
                    if (doc.data().ID == ID) { //find the doc's ID that matches the one passed 
                        this.notesArray.splice(ind, 1); //remove the item from the array
                        this.coordArray.splice(ind, 1); /*side note, not checking against serial here because there might be multiple queue'd items for the same serial, but ID is for each queue */
                        this.db.collection('Queue').doc(doc.ref.id).delete(); // delete the doc from the queue
                        this.firebaseService.manageEntry(name, this.cookie.get("User"), location, notes, quantity, serial, doc.data().ID); // and add it to the manage page
                    }
                });
            });
        }
        else { //if no location choosened
            alert("Pick a Location for: " + name);
        }
    }
};
QueueComponent.ctorParameters = () => [
    { type: _export_export_component__WEBPACK_IMPORTED_MODULE_10__["ExportComponent"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] },
    { type: src_app_global__WEBPACK_IMPORTED_MODULE_1__["Globals"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
], QueueComponent.prototype, "sort", void 0);
QueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-queue',
        template: __webpack_require__(/*! raw-loader!./queue.component.html */ "./node_modules/raw-loader/index.js!./src/app/queue/queue.component.html"),
        styles: [__webpack_require__(/*! ./queue.component.css */ "./src/app/queue/queue.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_export_export_component__WEBPACK_IMPORTED_MODULE_10__["ExportComponent"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"], src_app_global__WEBPACK_IMPORTED_MODULE_1__["Globals"]])
], QueueComponent);



/***/ }),

/***/ "./src/app/scan/scan.component.css":
/*!*****************************************!*\
  !*** ./src/app/scan/scan.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYW4vc2Nhbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/scan/scan.component.ts":
/*!****************************************!*\
  !*** ./src/app/scan/scan.component.ts ***!
  \****************************************/
/*! exports provided: ScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanComponent", function() { return ScanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _pin_pin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pin/pin.component */ "./src/app/pin/pin.component.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);







let ScanComponent = class ScanComponent {
    constructor(afs, db, cookie, pin) {
        this.afs = afs;
        this.db = db;
        this.cookie = cookie;
        this.pin = pin;
        this.param1 = "";
        this.newID = 0;
    }
    ngOnInit() {
        this.urlParams = this.getParams();
        this.sendUrlQueue();
    }
    /**
     * Gets the parameters in the URL
     */
    getParams() {
        const url = window.location.href;
        let paramValue = [];
        if (url.includes('?')) {
            var count = (url.match(new RegExp("&", "g")) || []).length + 1;
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: url.split('?')[1] });
            for (let ind = 1; ind < count + 1; ind++) {
                var p = "param" + ind;
                paramValue.push(httpParams.get(p));
                httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: url.split('&')[ind] });
            }
        }
        return paramValue;
    }
    sendUrlQueue() {
        this.delay(1500).then(() => {
            if (this.urlParams.length == 3) { //&& this.db.nameExistsInTable('Inventory', this.urlParams[0])
                while (!this.pin.approved) {
                    if (this.db.newID == 0) {
                        this.db.newID = 1;
                    }
                    this.db.queueEntry(this.urlParams[0], this.urlParams[1], this.cookie.get("User"), this.db.newID, this.urlParams[2]); //the name of the item, the nunmber 
                    break;
                }
            }
        });
    }
    delay(ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
        });
    }
};
ScanComponent.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _pin_pin_component__WEBPACK_IMPORTED_MODULE_5__["PinComponent"] }
];
ScanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scan',
        template: __webpack_require__(/*! raw-loader!./scan.component.html */ "./node_modules/raw-loader/index.js!./src/app/scan/scan.component.html"),
        styles: [__webpack_require__(/*! ./scan.component.css */ "./src/app/scan/scan.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _pin_pin_component__WEBPACK_IMPORTED_MODULE_5__["PinComponent"]])
], ScanComponent);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDa4HvodLBhScipdlM29xtM6nYIHtzpTJA",
        authDomain: "it-asset-control.firebaseapp.com",
        databaseURL: "https://it-asset-control.firebaseio.com",
        projectId: "it-asset-control",
        storageBucket: "it-asset-control.appspot.com",
        messagingSenderId: "92479072203"
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: replace, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const replace = {
    toReplace: ""
};
const environment = {
    production: false,
    toReplace: "",
    firebase: {
        apiKey: "AIzaSyDa4HvodLBhScipdlM29xtM6nYIHtzpTJA",
        authDomain: "it-asset-control.firebaseapp.com",
        databaseURL: "https://it-asset-control.firebaseio.com",
        projectId: "it-asset-control",
        storageBucket: "it-asset-control.appspot.com",
        messagingSenderId: "92479072203",
        appId: "1:92479072203:web:549ad23649fe486f"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Users\Elliot Brazier\it-asset-control\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map