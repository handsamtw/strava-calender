import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarService } from 'src/app/services/calendar.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, OnChanges {
  selectedImageUrl?: SafeUrl;
  safeImageUrls: SafeUrl[] = [];
  @Input() selectedThemeIndex = 0;
  constructor(
    private clipboardService: ClipboardService,
    private snackBar: MatSnackBar,
    private calendarService: CalendarService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.selectedImageUrl = this.safeImageUrls[this.selectedThemeIndex];
  }
  ngOnInit(): void {
    this.safeImageUrls = this.calendarService.getCalendarImage();

    if (this.safeImageUrls.length > 0) {
      this.selectedImageUrl = this.safeImageUrls[this.selectedThemeIndex];
    }
  }

  donwloadImage(imageUrl: any) {
    // saveAs(url, 'my_image.png');

    const blob = this.calendarService.b64toBlob(imageUrl);

    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'myCalendar.png'; // Set the desired file name here
    downloadLink.click();
  }

  copyImage() {
    // this.clipboardService.copyFromContent(this.imageUrl);
    // this.showSnackbar();
  }

  showSnackbar() {
    this.snackBar.open('Image URL copied!', 'Close', {
      duration: 1000, // Adjust duration as needed
    });
  }
}
