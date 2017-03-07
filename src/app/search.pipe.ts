import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, cont: any): any {

    if (cont === undefined) return value;

    return value.filter(function(val){
      return val.continente == cont
    });

    
  }

}
