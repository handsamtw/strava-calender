import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { CalenderService } from 'src/app/services/calender.service';
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
