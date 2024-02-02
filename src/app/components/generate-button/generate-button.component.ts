import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-generate-button',
  templateUrl: './generate-button.component.html',
  styleUrl: './generate-button.component.css',
})
export class GenerateButtonComponent {
  constructor(
    private calendarService: CalendarService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  generate() {
    const uid = localStorage.getItem('uid');
    let calendarImageObservable =
      this.calendarService.fetchCalendarImageFromUserId(uid as string);

    calendarImageObservable
      .pipe(
        map((imageData) => {
          const modifiedImageObservable: { [key: string]: SafeUrl } = {};
          for (const theme in imageData['image']) {
            const objectURL =
              'data:image/png;base64,' + imageData['image'][theme];
            modifiedImageObservable[theme] =
              this.sanitizer.bypassSecurityTrustUrl(objectURL);
          }
          return modifiedImageObservable;
        })
      )
      .subscribe(
        (modifiedImageObservable) => {
          this.calendarService.setCalendarImage(modifiedImageObservable);
        },
        ({ error, status }) => {
          console.log(error, status);
          this.calendarService.setError({
            error: error['detail'],
            status: status,
          });
          this.router.navigate(['/']);
        }
      );
  }
}
