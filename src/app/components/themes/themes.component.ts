import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent {
  @Output() optionSelected = new EventEmitter<string>();
  selectedTheme = 'Oranges';
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
    this.selectOption('Oranges'); // Initially selecting the first option
  }

  selectOption(theme: string) {
    this.selectedTheme = theme;
    this.optionSelected.emit(theme);
  }
}
