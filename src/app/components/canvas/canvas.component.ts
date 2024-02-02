import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarService } from 'src/app/services/calendar.service';
import { SafeUrl } from '@angular/platform-browser';
import { CalendarImage } from '../../model';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, OnChanges {
  selectedImageUrl?: SafeUrl;
  imageData: CalendarImage | null = null;
  sportType = localStorage.getItem('sportType');

  @Input() currentTheme: string = '';
  constructor(
    private snackBar: MatSnackBar,
    private calendarService: CalendarService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.selectedImageUrl = this.imageData?.[this.currentTheme];
  }
  ngOnInit(): void {
    const error = this.calendarService.getError();
    if (error) {
      const errorMessage = `${error['status']}: ${error['error']}`;
      this.showSnackbar(errorMessage, 5000);
    } else {
      this.calendarService.getCalendarImage().subscribe((data) => {
        this.imageData = data;
        const theme = localStorage.getItem('selectedTheme') ?? 'Reds';
        this.selectedImageUrl = data?.[theme] ?? '';
      });

      // Check if it's mobile view and scroll down
      const isMobileView =
        window.innerWidth <= 430 && window.innerHeight <= 932;

      if (this.selectedImageUrl != null && isMobileView) {
        this.scrollToBottom();
      }
    }
  }
  scrollToBottom() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'auto',
    });
  }
  donwloadImage(imageUrl: SafeUrl) {
    const blob = this.calendarService.b64toBlob(imageUrl);

    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'myCalendar.png'; // Set the desired file name here
    downloadLink.click();
  }

  async copyImage(imageUrl: SafeUrl) {
    const blob = this.calendarService.b64toBlob(imageUrl);
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    this.showSnackbar('Image copied!', 1500);
  }

  private showSnackbar(message: string, duration: number) {
    this.snackBar.open(message, 'Close', {
      duration: duration,
    });
  }
}
