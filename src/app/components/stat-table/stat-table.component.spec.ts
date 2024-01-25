import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTableComponent } from './stat-table.component';

describe('StatTableComponent', () => {
  let component: StatTableComponent;
  let fixture: ComponentFixture<StatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
