import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { CalendarService } from 'src/app/services/calendar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  imageToShow: any;
  selectedThemeIndex = 0;
  imageResult: string = '';
  onOptionSelected(selectedThemeIndex: number) {
    this.selectedThemeIndex = selectedThemeIndex;
  }
}
