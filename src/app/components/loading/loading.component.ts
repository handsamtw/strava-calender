import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  image: any;
  isLoading = true;
  constructor(
    private calendarService: CalendarService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  //  Ref: https://stackoverflow.com/questions/55591871/view-blob-response-as-image-in-angular
  ngOnInit(): void {
    const params = new URLSearchParams(this.router.url.split('?')[1]);
    const code = params.get('code');

    let calendarImageObservable;

    if (code === null) {
      const uid = localStorage.getItem('uid');
      calendarImageObservable =
        this.calendarService.fetchCalendarImageFromUserId(uid as string);
    } else {
      calendarImageObservable = this.calendarService.fetchCalendarImage(code);
    }

    calendarImageObservable.subscribe((imageUrls) => {
      imageUrls.forEach((url: any) => {
        const objectURL = 'data:image/png;base64,' + url;
        this.calendarService.setCalendarImage(
          this.sanitizer.bypassSecurityTrustUrl(objectURL)
        );
      });
      this.isLoading = false;
      this.router.navigate(['/']);
    });
  }
}
