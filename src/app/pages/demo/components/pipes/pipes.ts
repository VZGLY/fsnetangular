import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CoquinouPipe } from '../../../../shared/pipes/coquinou-pipe';

@Component({
  selector: 'app-pipes',
  imports: [DatePipe, CurrencyPipe, CoquinouPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {
  date: Date = new Date();
  test: number = 35;
  user: string = 'Ahmed';
}
