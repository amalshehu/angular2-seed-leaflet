import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  options: any;

  constructor() {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '...'
        })
      ],
      zoom: 5,
      center: L.latLng({
        lat: 38.991709,
        lng: -76.886109
      })
    };
  }

  ngOnInit() {

  }

  }

