import { Injectable } from '@angular/core';
import { InventoryComponent } from 'src/app/inventory/inventory.component'
import { MapComponent } from './map/map.component';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private map: MapComponent) {
  }
  
  takeCoordinate(){

  }
  openMapDialog(section:string){
    this.map.openDialog(section);
  }

  getCoordinate(e): string {
    var temp: string = "";
    temp = e.target.id

    return temp.toUpperCase();
  }

}
