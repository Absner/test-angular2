import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ChartModule } from 'angular2-highcharts';
import { ModalModule, DatepickerModule, CarouselModule } from 'ng2-bootstrap';


import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { GraficaComponent } from './grafica/grafica.component';
import { FormularioComponent} from './formulario/formulario.component';
import { SearchPipe } from './search.pipe';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    FormularioComponent,
    SearchPipe,
    CarruselComponent,
    CardsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ChartModule.forRoot(require('highcharts')),
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent, 
              GraficaComponent,
              FormularioComponent,
              CarruselComponent,
              CardsComponent,
              FooterComponent
  ]
})
export class AppModule { }
