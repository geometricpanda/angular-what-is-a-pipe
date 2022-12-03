import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bindingDemo'
})
export class BindingDemoPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'darkgreen' : 'darkred';
  }

}
