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
    if (code === null) {
      console.log('No code found in redirect url');
      this.isLoading = false;
      this.router.navigate(['/']);
    } else {
      this.calendarService.fetchCalendarImage(code).subscribe((imageUrls) => {
        // this.calendarService.fetchCalendarImage(code).subscribe((imageUrls) => {
        imageUrls.forEach((url: any) => {
          let objectURL = 'data:image/png;base64,' + url;
          this.calendarService.setCalendarImage(
            this.sanitizer.bypassSecurityTrustUrl(objectURL)
          );
        });
        this.isLoading = false;

        this.router.navigate(['/']);
      });
    }
  }
}
