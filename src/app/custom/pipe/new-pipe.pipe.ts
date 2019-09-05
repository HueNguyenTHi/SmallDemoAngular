import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipe implements PipeTransform {

  transform(value: string, inputValue: string): any {
    let result = value.toUpperCase() + ' ' + inputValue;
    return result;
  }

}
