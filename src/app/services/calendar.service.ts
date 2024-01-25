import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SafeUrl } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { DevEnvironment } from 'src/environment/environment';
import { ProdEnvironment } from 'src/environment/environment.prod';
import { Observable, switchMap } from 'rxjs';
import {
  CalendarImageData,
  CalendarImage,
  CalendarStat,
  Environment,
  Error,
} from '../model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {
    this.config = isDevMode() ? DevEnvironment : ProdEnvironment;
  }
  // write an  environment type when available
  private config: Environment;
  private imageData!: CalendarImage;
  private calendarStat!: CalendarStat[];
  private error: Error | undefined = undefined;

  getUserId(code: string): Observable<string> {
    const uid_url = `${this.config.BACKEND_ENDPOINT}/uid?code=${code}`;
    return this.http.get<string>(uid_url);
  }

  getCalendarStat(): CalendarStat[] {
    return this.calendarStat;
  }
  setCalendarStat(stat: CalendarStat[]) {
    this.calendarStat = stat;
  }

  getCalendarImage(): CalendarImage {
    return this.imageData;
  }
  setCalendarImage(data: CalendarImage) {
    this.imageData = data;
  }
  getError(): Error | undefined {
    return this.error;
  }
  setError(error: Error) {
    this.error = error;
  }
  fetchCalendarImage(code: string): Observable<CalendarImageData> {
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

  fetchCalendarImageFromUserId(uid: string): Observable<CalendarImageData> {
    const selectedSport = JSON.parse(
      localStorage.getItem('selectedSport') ?? '["Run"]'
    );
    const calendarImageEndpoint = `${this.config.BACKEND_ENDPOINT}/calendar`;
    const url = `${calendarImageEndpoint}?sport_type=${selectedSport.join(
      ','
    )}&theme=All&uid=${uid}`;

    return this.http.get<CalendarImageData>(url);
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
