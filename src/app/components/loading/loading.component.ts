import { Component, EventEmitter, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { map } from 'rxjs';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  isLoading = true;
  errorEvent = new EventEmitter<string>();
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
      this.calendarService.getUserId(code).subscribe((response: any) => {
        const uid = response['uid'];
        localStorage.setItem('uid', uid);
        this.isLoading = false;
        this.router.navigate(['/']);
      });
      // calendarImageObservable = this.calendarService.fetchCalendarImage(code);
    }
    // calendarImageObservable
    //   .pipe(
    //     map((imageData) => {
    //       const modifiedImageObservable: { [key: string]: SafeUrl } = {};
    //       for (const theme in imageData['image']) {
    //         const objectURL =
    //           'data:image/png;base64,' + imageData['image'][theme];
    //         modifiedImageObservable[theme] =
    //           this.sanitizer.bypassSecurityTrustUrl(objectURL);
    //       }
    //       return modifiedImageObservable;
    //     })
    //   )
    //   .subscribe(
    //     (modifiedImageObservable) => {
    //       this.calendarService.setCalendarImage(modifiedImageObservable);
    //       this.isLoading = false;
    //       this.router.navigate(['/']);
    //     },
    //     ({ error, status }) => {
    //       console.log(error, status);
    //       this.isLoading = false;
    //       this.calendarService.setError({
    //         error: error['detail'],
    //         status: status,
    //       });
    //       this.router.navigate(['/']);
    //     }
    //   );
  }
}
