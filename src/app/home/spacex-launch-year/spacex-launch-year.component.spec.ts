import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchYearComponent } from './spacex-launch-year.component';

describe('SpacexLaunchYearComponent', () => {
  let component: SpacexLaunchYearComponent;
  let fixture: ComponentFixture<SpacexLaunchYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexLaunchYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
