import { Component, OnInit } from '@angular/core';
import { CalenderService } from 'src/app/services/calender.service';
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
    private calenderService: CalenderService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  //  Ref: https://stackoverflow.com/questions/55591871/view-blob-response-as-image-in-angular
  ngOnInit(): void {
    this.calenderService.fetchCalanderImage().subscribe((imageUrls) => {
      imageUrls.forEach((url: any) => {
        let objectURL = 'data:image/jpeg;base64,' + url;
        this.calenderService.setCalenderImage(
          this.sanitizer.bypassSecurityTrustUrl(objectURL)
        );
      });
      this.isLoading = false;
      console.log(this.calenderService.getCalenderImage());
      this.router.navigate(['/']);
    });
  }
}
