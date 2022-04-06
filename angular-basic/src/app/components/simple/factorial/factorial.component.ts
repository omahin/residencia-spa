import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.scss']
})
export class FactorialComponent implements OnInit {

  userInput = 1;

  constructor() { }

  showFactorial(): number {
    return this.calcFactorial(this.userInput)
  }

  calcFactorial(number: number): number {
    if (number < 0) return -1
    else if (number === 1) return 1
    else return this.calcFactorial(number - 1) * number;
  }

  ngOnInit(): void {
  }

}
