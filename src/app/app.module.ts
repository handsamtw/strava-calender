import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// All Angular Material related module
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
//  All self defined component
import { ThemePreviewComponent } from './components/theme-preview/theme-preview.component';
import { HomeComponent } from './components/home/home.component';
import { GithubButtonComponent } from './components/github-button/github-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AppComponent } from './app.component';
import { ThemesComponent } from './components/themes/themes.component';
import { StravaConnectButtonComponent } from './components/strava-connect-button/strava-connect-button.component';
@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    StravaConnectButtonComponent,
    FooterComponent,
    GithubButtonComponent,
    CanvasComponent,
    LoadingComponent,
    HomeComponent,
    ThemePreviewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
