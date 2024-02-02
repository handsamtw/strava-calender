import { Component, EventEmitter, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  standalone: true,
  imports: [MatProgressBarModule],
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  errorEvent = new EventEmitter<string>();
  constructor(
    private calendarService: CalendarService,
    private router: Router
  ) {}

  //  Ref: https://stackoverflow.com/questions/55591871/view-blob-response-as-image-in-angular
  ngOnInit(): void {
    const params = new URLSearchParams(this.router.url.split('?')[1]);
    const code = params.get('code');
    if (code !== null) {
      this.calendarService.getUserId(code).subscribe((response: any) => {
        const uid = response['uid'];
        localStorage.setItem('uid', uid);
        localStorage.setItem('uidValid', 'true');
      });
    }
    // to give home component a buffer to catch latest localstorage value
    setInterval(() => {
      this.router.navigate(['/']);
    }, 500);
  }
}
