import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexSuccessfulLaunchComponent } from './spacex-successful-launch.component';

describe('SpacexSuccessfulLaunchComponent', () => {
  let component: SpacexSuccessfulLaunchComponent;
  let fixture: ComponentFixture<SpacexSuccessfulLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexSuccessfulLaunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexSuccessfulLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
