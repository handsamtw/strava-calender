import { Component, OnInit } from '@angular/core';
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
