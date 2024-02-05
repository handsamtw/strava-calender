import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-generate-button',
  templateUrl: './generate-button.component.html',
  styleUrl: './generate-button.component.css',
})
export class GenerateButtonComponent {
  @Output() onGenerateEvent = new EventEmitter<string | null>();
  constructor() {}

  generate() {
    const uid = localStorage.getItem('uid');
    this.onGenerateEvent.emit(uid);
  }
}
