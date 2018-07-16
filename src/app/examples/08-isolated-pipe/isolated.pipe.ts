import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'exclaim'})
export class IsolatedPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value && `${value}!`;
  }
}
