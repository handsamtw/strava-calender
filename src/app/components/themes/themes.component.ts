import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent {
  @Output() themeChangeEvent = new EventEmitter<string>();
  selectedTheme = localStorage.getItem('selectedTheme') ?? 'Reds';
  selectedSport = localStorage.getItem('selectedSport') || 'Run';

  sportTypes = [
    'Run',
    'Ride',
    'Swim',
    'Walk',
    'Hike',
    'Trail Run',
    'Alpine Ski',
    'Yoga',
    'HIIT',
    'Weight Training',
    'Workout',
  ];
  themeOptions = {
    Energy: 'Reds',
    Daisy: 'YlGn',
    Forest: 'Greens',
    Ocean: 'Blues',
    Aurora: 'PuBu',
    Spring: 'RdPu',
    Twilight: 'twilight',
  };

  previewColors = [
    ['#F4CDB9', '#EA7759', '#CF4032', '#6A1414'],
    ['#FBFDD1', '#D3EAA5', '#73B672', '#1F4D25'],
    ['#CCE7C1', '#86C17D', '#45894D', '#1F4D25'],
    ['#AAC9DF', '#6A9FC9', '#3F75B3', '#183976'],
    ['#D6D6E6', '#7AA4C9', '#3E7DB3', '#1A4267'],
    ['#F8E1DE', '#EB97B0', '#C63F91', '#661070'],
    ['#B7C5CD', '#C5A690', '#5D54A8', '#39143A'],
  ];
  // Function to convert object into an array of key-value pairs
  getThemesAsArray() {
    return Object.entries(this.themeOptions);
  }

  ngOnInit() {}

  setSelectTheme(selectedTheme: string) {
    this.selectedTheme = selectedTheme;
    localStorage.setItem('selectedTheme', this.selectedTheme);
    this.themeChangeEvent.emit(selectedTheme);
  }
  setSelectedSport() {
    localStorage.setItem('selectedSport', this.selectedSport);
  }
}
