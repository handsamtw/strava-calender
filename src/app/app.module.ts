import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import the MatSnackBarModule
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ThemesComponent } from './components/themes/themes.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { StravaConnectButtonComponent } from './components/strava-connect-button/strava-connect-button.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { GithubButtonComponent } from './components/github-button/github-button.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ThemesComponent,
    SubmitButtonComponent,
    DisplayCardComponent,
    StravaConnectButtonComponent,
    FooterComponent,
    GithubButtonComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
