// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filt'
// })
// export class FiltPipe implements PipeTransform {

//   transform(value: any, ...args: any[]): any {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filt'
})
export class FiltPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resuConsultas = [];
    for(const consulta of value){
      if(consulta.name.indexOf(arg) > -1){
         resuConsultas.push(consulta);
      };
    };
    return resuConsultas;
  }

}
