import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-preview',
  templateUrl: './theme-preview.component.html',
  styleUrls: ['./theme-preview.component.css'],
})
export class ThemePreviewComponent {
  @Input() colorSpectrum: string[] = [];
}
