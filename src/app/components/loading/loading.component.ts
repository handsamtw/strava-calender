import { Component, OnInit } from '@angular/core';
import { CalanderService } from 'src/app/services/calander.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  image: any;
  isLoading = true;
  constructor(
    private calanderService: CalanderService,
    private sanitizer: DomSanitizer
  ) {}

  //  Ref: https://stackoverflow.com/questions/55591871/view-blob-response-as-image-in-angular
  ngOnInit(): void {
    this.calanderService.getCalanderImage().subscribe((imageBlob) => {
      let objectURL = URL.createObjectURL(imageBlob);
      this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      this.isLoading = false;
    });
  }
}
