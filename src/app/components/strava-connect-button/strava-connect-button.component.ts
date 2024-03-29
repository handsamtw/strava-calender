import { Component, isDevMode } from '@angular/core';
import { DevEnvironment } from 'src/environment/environment';
import { ProdEnvironment } from 'src/environment/environment.prod';
import { Environment } from 'src/app/model';
import { CalendarService } from 'src/app/services/calendar.service';
import { of, switchMap } from 'rxjs';
@Component({
  selector: 'app-strava-connect-button',
  templateUrl: './strava-connect-button.component.html',
  styleUrls: ['./strava-connect-button.component.css'],
})
export class StravaConnectButtonComponent {
  config: Environment;
  constructor() {
    this.config = isDevMode() ? DevEnvironment : ProdEnvironment;
  }

  redirect_to_auth_page() {
    const redirectUriAfterAuth = this.config.REDIRECT_URI_AFTER_AUTH;
    const authUrl = `https://www.strava.com/oauth/mobile/authorize?client_id=117383&response_type=code&redirect_uri=${redirectUriAfterAuth}&approval_prompt=force&scope=activity:read_all`;
    window.location.href = authUrl;
  }
}
