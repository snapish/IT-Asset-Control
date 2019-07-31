import { Injectable } from '@angular/core';
import { InventoryComponent } from 'src/app/inventory/inventory.component'
import { MapComponent } from './map/map.component';
import { Production1Component } from './map/production1/production1.component';
import { QueueComponent } from './queue/queue.component';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private map: MapComponent, private queue: QueueComponent) {
  }

  
  getCoordinate(e): string {
    var temp: string = "";
    temp = e.target.id

    return temp.toUpperCase();
  }

}
