import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: number): string {
    return value === 1 ? "1 year old" :`${value} years old` ;
  }

}
