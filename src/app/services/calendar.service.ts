import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SafeUrl } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { DevEnvironment } from 'src/environment/environment';
import { ProdEnvironment } from 'src/environment/environment.prod';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { CalendarImageData, CalendarImage, Environment, Error } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {
    this.config = isDevMode() ? DevEnvironment : ProdEnvironment;
  }

  private config: Environment;
  private imageSubject = new BehaviorSubject<CalendarImage | null>(null);
  private isLoading$ = new BehaviorSubject<boolean>(false);
  private isValidUid$ = new BehaviorSubject<boolean>(false);
  private error: Error | undefined = undefined;

  getIsValidUid() {
    return this.isValidUid$.asObservable();
  }

  setIsValidUid(isValid: boolean): void {
    this.isValidUid$.next(isValid);
  }
  getIsLoading() {
    return this.isLoading$.asObservable();
  }

  setIsLoading(isLoading: boolean) {
    return this.isLoading$.next(isLoading);
  }

  checkIsValidUid(uid: string | null) {
    if (uid == null) {
      return of({ is_valid: false });
    }
    const url = `${this.config.BACKEND_ENDPOINT}/check_valid_uid?uid=${uid}`;
    return this.http.get(url);
  }
  getUserId(code: string): Observable<string> {
    const uid_url = `${this.config.BACKEND_ENDPOINT}/uid?code=${code}`;
    return this.http.get<string>(uid_url);
  }

  getCalendarImage(): Observable<CalendarImage | null> {
    return this.imageSubject.asObservable();
  }
  setCalendarImage(data: CalendarImage) {
    this.imageSubject.next(data);
  }
  getError(): Error | undefined {
    return this.error;
  }
  setError(error: Error) {
    this.error = error;
  }
  fetchCalendarImage(code: string): Observable<CalendarImageData> {
    return this.getUserId(code).pipe(
      switchMap((response: any) => {
        const uid = response['uid'];
        localStorage.setItem('uid', uid); // Save the retrieved userID
        return this.fetchCalendarImageFromUserId(uid);
      })
    );
  }

  fetchCalendarImageFromUserId(uid: string): Observable<CalendarImageData> {
    const sport = localStorage.getItem('sportType');
    const unit = localStorage.getItem('unit');

    const calendarImageEndpoint = `${this.config.BACKEND_ENDPOINT}/calendar`;
    const url = `${calendarImageEndpoint}?sport_type=${sport}&unit=${unit}&theme=All&uid=${uid}`;
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
