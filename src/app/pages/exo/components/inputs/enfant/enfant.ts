import { Component, input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.scss',
})
export class Enfant {

  list = input<string[]>();


}
