import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'game-cell',
  templateUrl: 'game-cell.component.html'
})
export class GameCellComponent {

  @Input() game: any;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  constructor() {
  }
}
