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

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, OnChanges {
  selectedImageUrl?: SafeUrl;
  imageData: any = [];
  @Input() currentTheme: string = '';
  constructor(
    private snackBar: MatSnackBar,
    private calendarService: CalendarService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.selectedImageUrl = this.imageData[this.currentTheme];
  }
  ngOnInit(): void {
    this.imageData = this.calendarService.getCalendarImage();

    if (this.imageData && Object.keys(this.imageData).length > 0) {
      const theme = localStorage.getItem('selectedTheme') ?? 'Reds';
      this.selectedImageUrl = this.imageData[theme];
    }
  }

  donwloadImage(imageUrl: any) {
    const blob = this.calendarService.b64toBlob(imageUrl);

    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'myCalendar.png'; // Set the desired file name here
    downloadLink.click();
  }

  async copyImage(imageUrl: any) {
    const blob = this.calendarService.b64toBlob(imageUrl);
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    this.showSnackbar();
  }

  private showSnackbar() {
    this.snackBar.open('Image copied!', 'Close', {
      duration: 1500, // Adjust duration as needed
    });
  }
}
