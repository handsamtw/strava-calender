import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { atob } from 'buffer';
import { Buffer } from 'buffer';
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
    const token = '9454f6c32eb763387662073899cbce37db7247ef';
    const user_id = '658d171cb1bb1760fa589f0c';
    const backend_endpoint_local = 'http://127.0.0.1:5000/calander';
    const url = `${backend_endpoint_local}?ploy_by=distance&sport_type=Run&theme=All&user_id=${user_id}&token=${token}`;

    return this.http.get<string[]>(url);
  }

  getCalenderImage(): SafeUrl[] {
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
