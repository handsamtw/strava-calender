import { Component, OnInit } from '@angular/core';
import { CalanderService } from 'src/app/services/calander.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private calanderService: CalanderService) {}
  ngOnInit(): void {}

  imageToShow: any;
  selectedTheme = '';
  imageResult: string = '';
  onOptionSelected(selectedTheme: string) {
    this.selectedTheme = selectedTheme;
    console.log('Selected Option:', selectedTheme);
  }
}
