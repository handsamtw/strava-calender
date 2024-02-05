import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarImage } from '../../model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, OnChanges {
  imageData: CalendarImage | null = null;
  sportType = localStorage.getItem('sportType');
  @Input() isLoading: boolean = false;
  @Input() imageUrl: string = '';
  @Input() errorMessage: string = '';
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
  scrollToBottom() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'auto',
    });
  }
  donwloadImage() {
    this.http
      .get(this.imageUrl, { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'myCalendar.png'; // You can set the desired filename here
        downloadLink.click();
      });
  }

  async copyImage() {
    this.http
      .get(this.imageUrl, { responseType: 'blob' })
      .subscribe(async (blob: Blob) => {
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ]);
      });
    this.showSnackbar('Image copied!', 1500);
  }

  private showSnackbar(message: string, duration: number) {
    this.snackBar.open(message, 'Close', {
      duration: duration,
    });
  }
}
