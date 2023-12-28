import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubButtonComponent } from './github-button.component';

describe('GithubButtonComponent', () => {
  let component: GithubButtonComponent;
  let fixture: ComponentFixture<GithubButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
