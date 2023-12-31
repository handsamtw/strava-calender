import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { DevEnvironment } from 'src/environment/environment';
import { ProdEnvironment } from 'src/environment/environment.prod';
import { switchMap } from 'rxjs';
type calendarImage = { [key: string]: SafeUrl };

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.config = isDevMode() ? DevEnvironment : ProdEnvironment;
  }
  // write an  environment type when available
  private config: any;
  private imageData: calendarImage = {};

  getUserId(code: string) {
    const uid_url = `${this.config.BACKEND_ENDPOINT}/uid?code=${code}`;
    return this.http.get<string>(uid_url);
  }
  setCalendarImage(data: calendarImage) {
    this.imageData = data;
  }
  fetchCalendarImage(code: string) {
    let uid: string = localStorage.getItem('uid') ?? '';

    if (uid === '') {
      return this.getUserId(code).pipe(
        switchMap((response: any) => {
          uid = response['uid'];
          localStorage.setItem('uid', uid); // Save the retrieved userID
          return this.fetchCalendarImageFromUserId(uid);
        })
      );
    } else {
      return this.fetchCalendarImageFromUserId(uid);
    }
  }

  fetchCalendarImageFromUserId(uid: string) {
    const selectedSport = JSON.parse(
      localStorage.getItem('selectedSport') ?? '["Run"]'
    );
    const calendarImageEndpoint = `${this.config.BACKEND_ENDPOINT}/calendar`;
    const url = `${calendarImageEndpoint}?sport_type=${selectedSport.join(
      ','
    )}&theme=All&uid=${uid}`;

    return this.http.get<string[]>(url);
  }

  getCalendarImage(): { [key: string]: SafeUrl } {
    return this.imageData;
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
