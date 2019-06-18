import { Injectable } from '@angular/core';
import { InventoryComponent } from 'src/app/inventory/inventory.component'
import { MapComponent } from './map/map.component';
import { Production1Component } from './map/production1/production1.component';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private map: MapComponent, private prod1: Production1Component  ) {
  }

  takeCoordinate() {
    this.map.coordinate;
  }
  openMapDialog(section: string) {
    switch (section) {
      case 'offices':
        this.map.openDialogOffices();
        break;
      case 'production1':
        this.map.openDialogProduction1();
        break;
      case 'production2':
        this.map.openDialogProduction2();
        break;
      case 'shipping':
        this.map.openDialogShipping();
      default:
        break;
    }
  }
prod1Coords(){
  return this.prod1.closeDialog()
}
  getCoordinate(e): string {
    var temp: string = "";
    temp = e.target.id

    return temp.toUpperCase();
  }

}
