import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTheCourierTrackingInfoToMicroDistributorComponent } from './update-the-courier-tracking-info-to-micro-distributor.component';

describe('UpdateTheCourierTrackingInfoToMicroDistributorComponent', () => {
  let component: UpdateTheCourierTrackingInfoToMicroDistributorComponent;
  let fixture: ComponentFixture<UpdateTheCourierTrackingInfoToMicroDistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTheCourierTrackingInfoToMicroDistributorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTheCourierTrackingInfoToMicroDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
