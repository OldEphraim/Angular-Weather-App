import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timing'
})
export class TimingPipe implements PipeTransform {

  transform(value: number): string {
    const date = new Date(value * 1000); 

    let hours = date.getHours();  
    const minutes = date.getMinutes();  

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 

    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutesStr} ${ampm}`;
  }

}

// noImplicitReturns is set to false