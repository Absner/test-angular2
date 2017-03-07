import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class RestPaisesService {

  constructor(private http: Http) { }

  public getByIdPaises(){
    let paises  = this.http.get('https://restcountries.eu/rest/v2/region/Americas')
    .map((res:Response) =>  res.json());
    return paises;
  }

}
