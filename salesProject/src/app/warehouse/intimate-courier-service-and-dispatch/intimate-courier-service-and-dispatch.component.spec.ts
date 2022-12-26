import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntimateCourierServiceAndDispatchComponent } from './intimate-courier-service-and-dispatch.component';

describe('IntimateCourierServiceAndDispatchComponent', () => {
  let component: IntimateCourierServiceAndDispatchComponent;
  let fixture: ComponentFixture<IntimateCourierServiceAndDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntimateCourierServiceAndDispatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntimateCourierServiceAndDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
