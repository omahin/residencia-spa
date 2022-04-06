import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output()
  result: EventEmitter<string> = new EventEmitter<string>();

  userInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitir() {
    this.result.emit(this.userInput)
  }

}
