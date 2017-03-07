import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  minutos: number;
  segundos: number;

  constructor() { 

    this.minutos  = 24;
    this.segundos = 59;
    setInterval(()  => this.contador(),1000);
  }

  ngOnInit() {
  }

  private contador(): void{
    if (--this.segundos < 0){
      this.segundos = 59;
      if (--this.minutos  < 0){
        this.minutos  = 24;
        this.segundos = 59
      }
    }
  }

}
