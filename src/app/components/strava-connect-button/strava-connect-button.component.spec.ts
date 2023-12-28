import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StravaConnectButtonComponent } from './strava-connect-button.component';

describe('StravaConnectButtonComponent', () => {
  let component: StravaConnectButtonComponent;
  let fixture: ComponentFixture<StravaConnectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StravaConnectButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StravaConnectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
