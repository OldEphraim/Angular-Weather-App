import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timing'
})
export class TimingPipe implements PipeTransform {

  transform(value: string): string {

  let array = Array.from<string>(value);
  let newArr = [];
  for (let i = 11; i < 16; i++) {
    newArr.push(array[i]);
  }
  let concat = Number(newArr[0] + newArr[1]);
  if (concat <= 12) {
    return newArr.join('') + " AM";
  }
  if (concat > 12 && concat < 21) {
    return ("0" + (concat - 12).toString() + ":00 PM")
  }
  if (concat >= 21) {
    return ((concat - 12).toString() + ":00 PM")
  }
  }

}

// noImplicitReturns is set to false
