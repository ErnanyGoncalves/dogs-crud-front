import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight',
  standalone: true
})
export class WeightPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value < 1 ? `${value * 1000} g` : `${value} kg`;
  }

}
