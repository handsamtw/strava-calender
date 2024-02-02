import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAuth = false;
  constructor(private calendarService: CalendarService) {}
  ngOnInit(): void {
    this.calendarService.getIsValidUid().subscribe((isValid) => {
      if (!isValid) {
        const uid = localStorage.getItem('uid');
        this.calendarService.checkIsValidUid(uid).subscribe((response: any) => {
          const isValid = response['is_valid'] as boolean;
          if (isValid) {
            this.isAuth = true;
            this.calendarService.setIsValidUid(true);
          }
        });
      }
    });
  }
  selectedTheme = '';
  onThemeChange(theme: string) {
    this.selectedTheme = theme;
  }
}
