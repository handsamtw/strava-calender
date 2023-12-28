import { Component } from '@angular/core';

@Component({
  selector: 'app-strava-connect-button',
  templateUrl: './strava-connect-button.component.html',
  styleUrls: ['./strava-connect-button.component.css'],
})
export class StravaConnectButtonComponent {
  redirect_to_auth_page() {
    const redirectUri = 'http://localhost:4200/loading';

    const auth_url = `https://www.strava.com/oauth/authorize?client_id=117383&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=activity:read_all`;
    window.location.href = auth_url;
  }
}
