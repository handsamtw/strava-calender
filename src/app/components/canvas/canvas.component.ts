import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalenderService } from 'src/app/services/calender.service';
import { SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, OnChanges {
  imageUrl = '';
  selectedImageUrl?: SafeUrl;
  safeImageUrls: SafeUrl[] = [];
  @Input() selectedThemeIndex = 0;
  constructor(
    private clipboardService: ClipboardService,
    private snackBar: MatSnackBar,
    private calenderService: CalenderService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.selectedImageUrl = this.safeImageUrls[this.selectedThemeIndex];

    // this.previewImgUrl = `../../../assets/preview/${this.previewTheme}-calender.png`;
  }
  ngOnInit(): void {
    this.safeImageUrls = this.calenderService.getCalenderImage();

    if (this.safeImageUrls.length > 0) {
      this.selectedImageUrl = this.safeImageUrls[this.selectedThemeIndex];
    }
  }

  donwloadImage() {
    const link = document.createElement('a');
    link.href = this.imageUrl;
    link.download = 'downloaded_image.png'; // Specify the downloaded file name
    link.click();
  }

  copyImage() {
    this.clipboardService.copyFromContent(this.imageUrl);
    this.showSnackbar();
  }

  showSnackbar() {
    this.snackBar.open('Image URL copied!', 'Close', {
      duration: 1000, // Adjust duration as needed
    });
  }
}
