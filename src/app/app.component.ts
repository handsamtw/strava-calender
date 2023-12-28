import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalanderService } from './services/calander.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private calanderService: CalanderService) {}
  ngOnInit(): void {}

  imageToShow: any;
  selectedTheme = '';
  imageResult: string = '';
  onOptionSelected(selectedTheme: string) {
    this.selectedTheme = selectedTheme;
    console.log('Selected Option:', selectedTheme);
  }

  onSubmitEvent() {
    this.calanderService.getCalanderImage();
  }
}
