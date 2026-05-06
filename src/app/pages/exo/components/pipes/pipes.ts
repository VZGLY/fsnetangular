import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {

  interval : number | undefined;

  startCount(){
    this.interval = setInterval(() => {

    }, 1000)
  }

  stopCount(){
    clearInterval(this.interval);
  }

}
