import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent {
  @Output() themeChangeEvent = new EventEmitter<string>();
  selectedTheme = localStorage.getItem('selectedTheme') ?? 'Oranges';
  selectedSport = JSON.parse(localStorage.getItem('selectedSport') ?? '[]');

  sportTypes = ['All', 'Run', 'Ride', 'Swim'];
  themeOptions = {
    'Strava Classic': 'Oranges',
    Calmness: 'BuGn',
    'Github Classic': 'Greens',
    Aurora: 'PuBu',
    Spring: 'RdPu',
    Twilight: 'twilight',
  };
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
    localStorage.setItem('selectedSport', JSON.stringify(this.selectedSport));
  }
}
