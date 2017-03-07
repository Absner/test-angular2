import { Component, OnInit } from '@angular/core';
import { RestPaisesService } from '../rest-paises.service';
import { SearchPipe } from  '../search.pipe';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css'],
  providers: [RestPaisesService]
})
export class GraficaComponent implements OnInit {

  constructor(private paisesService: RestPaisesService) { 
    
  }
  options: Object;
  paises: Array <any>  = [{
    id : '01',
    nombre  : 'Angola',
    continente  : 'Africano',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/120px-Flag_of_Angola.svg.png'
  },
  {
    id : '02',
    nombre  : 'Egipto',
    continente  : 'Africano',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/120px-Flag_of_Egypt.svg.png'
  },
  {
    id : '03',
    nombre  : 'Canadá',
    continente  : 'America',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/120px-Flag_of_Canada.svg.png'
  },
  {
    id : '04',
    nombre  : 'Venezuela',
    continente  : 'America',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/120px-Flag_of_Venezuela.svg.png'
  },
  {
    id : '05',
    nombre  : 'China',
    continente  : 'Asia',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/120px-Flag_of_the_People%27s_Republic_of_China.svg.png'
  },
  {
    id : '06',
    nombre  : 'Japon',
    continente  : 'Asia',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/120px-Flag_of_Japan.svg.png'
  },
  {
    id : '07',
    nombre  : 'Alemania',
    continente  : 'Europa',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/120px-Flag_of_Germany.svg.png'
  },
  {
    id : '08',
    nombre  : 'Suecia',
    continente  : 'Europa',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/120px-Flag_of_Sweden.svg.png'
  },
  {
    id : '09',
    nombre  : 'Tonga',
    continente  : 'Oceania',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/120px-Flag_of_Tonga.svg.png'
  },
  {
    id : '10',
    nombre  : 'Australia',
    continente  : 'Oceania',
    foto  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/120px-Flag_of_Australia.svg.png'
  }];

  continentes = [{
    id  : '01',
    nombre  : 'Africano'
  },
  {
    id  : '02',
    nombre  : 'America'
  },
  {
    id  : '03',
    nombre  : 'Asia'
  },
  {
    id  : '04',
    nombre  : 'Europa'
  },
  {
    id  : '05',
    nombre  : 'Oceania'
  }]

  ngOnInit() {
    this.loadGraph();
  }

  cargarPaises(){
    this.paisesService.getByIdPaises().subscribe(data =>  this.paises = data, error => console.log(error),
                () => console.log(this.paises));
  }

  public loadGraph(): void{
    this.options = {
        chart:{
          type:'bar'
        },
        title:{
          text: 'Top paises que trabajan con nosotros'
        },
        xAxis:{
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
              text: null
          }
        },
        plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
        },
        legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ('#FFFFFF'),
        shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Año 2014',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Año 2015',
            data: [133, 156, 947, 408, 6]
        }, {
            name: 'Año 2016',
            data: [1052, 954, 4250, 740, 38]
        }]
    };
  }

}
