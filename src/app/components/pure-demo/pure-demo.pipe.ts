import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pureDemo'
})
export class PureDemoPipe implements PipeTransform {

  transform(value: number): number {
    console.log('Pure Pipe: ', value);
    return value;
  }

}
