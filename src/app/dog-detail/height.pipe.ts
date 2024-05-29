import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height',
  standalone: true
})
export class HeightPipe implements PipeTransform {

  transform(value: number): string {
    return `${value} cm`;
  }

}
