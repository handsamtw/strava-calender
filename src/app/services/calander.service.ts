import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalanderService {
  constructor(private http: HttpClient) {}

  getCalanderImage(): Observable<Blob> {
    const url =
      'https://strava-github-profile-be.vercel.app/calander?ploy_by=distance&sport_type=Run&theme=RdPu&user_id=658d171cb1bb1760fa589f0c&token=8fbd0751b4733d33628818060485cdc28d982008';

    return this.http.get(url, {
      responseType: 'blob',
    });
  }
}
