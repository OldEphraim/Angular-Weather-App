import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compass'
})
export class CompassPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 0 && value < 22.5) {
      return "N";
    }
    if (value >= 22.5 && value < 67.5) {
      return "NE";
    }
    if (value >= 67.5 && value < 112.5) {
      return "E";
    }
    if (value >= 112.5 && value < 157.5) {
      return "SE";
    }
    if (value >= 157.5 && value < 202.5) {
      return "S";
    }
    if (value >= 202.5 && value < 247.5) {
      return "SW";
    }
    if (value >= 247.5 && value < 292.5) {
      return "W";
    }
    if (value >= 292.5 && value < 337.5) {
      return "NW";
    }
    if (value >= 337.5) {
      return "N";
    }
  }

}
