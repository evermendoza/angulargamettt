import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button nbButton style='width:200px;height:200px' *ngIf="!value">{{ value }}</button>
      <button nbButton style='width:200px;height:200px' hero status="success" *ngIf="value == 'X'">{{ value }}</button>
      <button nbButton style='width:200px;height:200px' hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['']
})
export class SquareComponent  { 

  @Input() value: 'X' | 'O';

}
