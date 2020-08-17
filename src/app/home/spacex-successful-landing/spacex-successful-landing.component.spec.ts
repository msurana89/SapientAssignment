import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexSuccessfulLandingComponent } from './spacex-successful-landing.component';

describe('SpacexSuccessfulLandingComponent', () => {
  let component: SpacexSuccessfulLandingComponent;
  let fixture: ComponentFixture<SpacexSuccessfulLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexSuccessfulLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexSuccessfulLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
