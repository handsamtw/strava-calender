import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { DevEnvironment } from 'src/environment/environment';
import { ProdEnvironment } from 'src/environment/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.config = isDevMode() ? DevEnvironment : ProdEnvironment;
  }
  // write an  environment type when available
  private config: any;
  private safeImageUrls: SafeUrl[] = [];
  setCalendarImage(safeImageUrl: any) {
    this.safeImageUrls.push(safeImageUrl);
  }
  fetchCalendarImage() {
    const token = '3665e19fc16ff790662ff99a486e6f24daefced8';
    const user_id = '658d171cb1bb1760fa589f0c';
    const calendarImageEndpoint = this.config.CALENDAR_IMAGE_ENDPOINT;
    const url = `${calendarImageEndpoint}?ploy_by=distance&sport_type=Run&theme=All&user_id=${user_id}&token=${token}`;

    return this.http.get<string[]>(url);
  }

  getCalendarImage(): SafeUrl[] {
    return this.safeImageUrls;
  }

  b64toBlob(base64ImageUrl: SafeUrl) {
    const base64 = (
      base64ImageUrl as any
    ).changingThisBreaksApplicationSecurity.split(',')[1]; // Extract base64 data
    const byteCharacters = Buffer.from(base64, 'base64').toString('binary');

    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' }); // Change the type based on your image type
    return blob;
  }
}
