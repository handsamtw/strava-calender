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
      'https://strava-calender-api.vercel.app/calander?ploy_by=distance&sport_type=Run&theme=Greens&user_id=658d171cb1bb1760fa589f0c&token=607587e674b284fa69213ed70a3df5bff14c09ba';

    return this.http.get(url, {
      responseType: 'blob',
    });
  }
}
