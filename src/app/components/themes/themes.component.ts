import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent {
  @Output() optionSelectedEvent = new EventEmitter<number>();
  selectedThemeIndex = 0;

  sportTypes = ['All', 'Run', 'Ride', 'Swim'];
  selectedSport: string[] = [];
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

  ngOnInit() {
    this.selectOption(0); // Initially selecting the first option
  }

  selectOption(themeIndex: number) {
    this.selectedThemeIndex = themeIndex;
    this.optionSelectedEvent.emit(themeIndex);
  }
}
