import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coquinou',
})
export class CoquinouPipe implements PipeTransform {
  transform(value: string): string {
    let names = ["ahmed", "mederic", "damien"]

    if (names.includes(value.toLowerCase())) {
      return value + " ❤️"
    }
    else{
      return value + " 💀"
    }
  }
}
