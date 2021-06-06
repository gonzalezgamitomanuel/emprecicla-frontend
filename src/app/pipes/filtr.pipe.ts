// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filtr'
// })
// export class FiltrPipe implements PipeTransform {

//   transform(value: any, ...args: any[]): any {
//     return null;
//   }

// }


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtr'
})
export class FiltrPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resulConsultas = [];
    for(const consulta of value){
      if(consulta.localidad.indexOf(arg) > -1){
         resulConsultas.push(consulta);
      };
    };
    return resulConsultas;
  }

}