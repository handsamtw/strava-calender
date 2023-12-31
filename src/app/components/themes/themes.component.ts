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
  selectedSport = JSON.parse(
    localStorage.getItem('selectedSport') ?? '["Run"]'
  );

  sportTypes = ['Run', 'Ride', 'Swim'];
  themeOptions = {
    Energy: 'Reds',
    Calmness: 'BuGn',
    Forest: 'Greens',
    Ocean: 'Blues',
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
