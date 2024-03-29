import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DevEnvironment } from 'src/environment/environment';
import { ProdEnvironment } from 'src/environment/environment.prod';
import { Observable, catchError, of } from 'rxjs';
import { Environment } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {
    this.config = isDevMode() ? DevEnvironment : ProdEnvironment;
  }

  private config: Environment;

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

  fetchCalendarImageFromUserId(uid: string) {
    const sport = localStorage.getItem('sportType');
    const unit = localStorage.getItem('unit');
    const theme = localStorage.getItem('selectedTheme') ?? 'Reds';
    const calendarImageEndpoint = `${this.config.BACKEND_ENDPOINT}/calendar`;
    const url = `${calendarImageEndpoint}?sport_type=${sport}&unit=${unit}&theme=${theme}&uid=${uid}`;
    return this.http.get(url, { responseType: 'arraybuffer' }).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          const decoder = new TextDecoder('utf-8');
          const errorString = decoder.decode(error.error);
          let errorObject;
          try {
            errorObject = JSON.parse(errorString);
          } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);
            errorObject = { detail: 'Unexpected error' };
          } finally {
            return of(errorObject);
          }
        } else {
          return of(null);
        }
      })
    );
  }

  // deprecated
  //   b64toBlob(base64ImageUrl: SafeUrl) {
  //     const base64 = (
  //       base64ImageUrl as any
  //     ).changingThisBreaksApplicationSecurity.split(',')[1]; // Extract base64 data
  //     const byteCharacters = Buffer.from(base64, 'base64').toString('binary');

  //     const byteNumbers = new Array(byteCharacters.length);
  //     for (let i = 0; i < byteCharacters.length; i++) {
  //       byteNumbers[i] = byteCharacters.charCodeAt(i);
  //     }

  //     const byteArray = new Uint8Array(byteNumbers);
  //     const blob = new Blob([byteArray], { type: 'image/png' }); // Change the type based on your image type
  //     return blob;
  //   }
}
