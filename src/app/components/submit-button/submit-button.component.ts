import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css'],
})
export class SubmitButtonComponent {
  @Output() submitEvent = new EventEmitter<string>();

  onSubmit() {
    const data = 'data get from backend';
    this.submitEvent.emit(data);
  }
}
