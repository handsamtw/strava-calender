import { Component, OnChanges, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges {
  isUidValid = localStorage.getItem('uidValid') == 'true' ? true : false;
  constructor(private calendarService: CalendarService) {}
  ngOnChanges() {}
  ngOnInit(): void {
    console.log(this.isUidValid);
    if (!this.isUidValid) {
      const uid = localStorage.getItem('uid');
      this.calendarService.checkIsValidUid(uid).subscribe((response: any) => {
        const isValid = response['is_valid'] as boolean;
        if (isValid) {
          this.isUidValid = true;
          localStorage.setItem('uidValid', 'true');
        }
      });
    }
  }
  selectedTheme = '';
  onThemeChange(theme: string) {
    this.selectedTheme = theme;
  }
}
