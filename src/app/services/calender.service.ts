import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class CalenderService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}
  private safeImageUrls: SafeUrl[] = [];
  setCalenderImage(safeImageUrl: any) {
    this.safeImageUrls.push(safeImageUrl);
  }
  fetchCalanderImage() {
    const url =
      'http://127.0.0.1:5000/calander?ploy_by=distance&sport_type=Run&theme=All&user_id=658d171cb1bb1760fa589f0c&token=607587e674b284fa69213ed70a3df5bff14c09ba';

    return this.http.get<string[]>(url);
  }

  getCalenderImage(): SafeUrl[] {
    return this.safeImageUrls;
  }
}
