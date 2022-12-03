import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'impureDemo',
  pure: false
})
export class ImpureDemoPipe implements PipeTransform {

  transform(value: number): number {
    console.log('Impure Pipe: ', value);
    return value;
  }

}
