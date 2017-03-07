import { Component, OnInit } from '@angular/core';
import { CarouselConfig  } from 'ng2-bootstrap';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 50000, noPause: false}}]
})
export class CarruselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
