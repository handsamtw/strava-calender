import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, OnChanges {
  imageUrl = '';
  previewImgUrl = '';
  @Input() previewTheme = '';
  constructor(
    private clipboardService: ClipboardService,
    private snackBar: MatSnackBar
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.previewImgUrl = `../../../assets/preview/${this.previewTheme}-calender.png`;
  }
  ngOnInit(): void {
    console.log(this.previewTheme);
    if (this.previewTheme !== '') {
      this.previewImgUrl = `../../../assets/preview/${this.previewTheme}-calender.png`;
    }

    console.log(this.previewImgUrl);
  }

  donwloadImage() {
    const link = document.createElement('a');
    link.href = this.imageUrl;
    link.download = 'downloaded_image.png'; // Specify the downloaded file name
    link.click();
  }

  copyImage() {
    console.log(this.previewTheme);
    this.clipboardService.copyFromContent(this.imageUrl);
    this.showSnackbar();
  }

  showSnackbar() {
    this.snackBar.open('Image URL copied!', 'Close', {
      duration: 1000, // Adjust duration as needed
    });
  }
}
