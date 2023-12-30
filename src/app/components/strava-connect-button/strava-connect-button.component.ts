import { Component, isDevMode } from '@angular/core';
import { DevEnvironment } from 'src/environment/environment';
import { ProdEnvironment } from 'src/environment/environment.prod';

@Component({
  selector: 'app-strava-connect-button',
  templateUrl: './strava-connect-button.component.html',
  styleUrls: ['./strava-connect-button.component.css'],
})
export class StravaConnectButtonComponent {
  config: any;
  constructor() {
    this.config = isDevMode() ? DevEnvironment : ProdEnvironment;
  }
  redirect_to_auth_page() {
    const uid = localStorage.getItem('uid');
    if (uid != null) {
      window.location.href = '/loading';
    } else {
      const redirectUriAfterAuth = this.config.REDIRECT_URI_AFTER_AUTH;
      const authUrl = `https://www.strava.com/oauth/authorize?client_id=117383&response_type=code&redirect_uri=${redirectUriAfterAuth}&approval_prompt=force&scope=activity:read_all`;
      window.location.href = authUrl;
    }
  }
}
