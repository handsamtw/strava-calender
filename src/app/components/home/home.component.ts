import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imageUrl: any;
  isUidValid: boolean = false;
  isLoading = false;
  errorMessage = '';
  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    const uid = localStorage.getItem('uid');
    this.calendarService.checkIsValidUid(uid).subscribe((response: any) => {
      const isValid = response['is_valid'] as boolean;
      this.isUidValid = isValid;
    });
  }

  onGenerate(uid: string | null) {
    if (uid != null) {
      this.generateCalendar(uid);
      const isMobileView =
        window.innerWidth <= 430 && window.innerHeight <= 932;
      if (this.isLoading && isMobileView) {
        this.scrollToBottom();
      }
    }
  }
  onThemeChange(theme: string) {
    if (this.imageUrl !== undefined) {
      const uid = localStorage.getItem('uid');
      this.generateCalendar(uid);
    }
  }

  private generateCalendar(uid: string | null) {
    this.isLoading = true;
    this.calendarService
      .fetchCalendarImageFromUserId(uid as string)
      .subscribe((response: any) => {
        if (response instanceof ArrayBuffer) {
          const blob = new Blob([response], { type: 'image/png' });
          const imageUrl = URL.createObjectURL(blob);
          this.imageUrl = imageUrl;
          this.errorMessage = '';
        } else if (response != null && 'detail' in response) {
          this.errorMessage = response['detail'];
        } else {
          this.errorMessage = 'Unexpected error';
        }
        this.isLoading = false;
      });
  }

  scrollToBottom() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'auto',
    });
  }
}
