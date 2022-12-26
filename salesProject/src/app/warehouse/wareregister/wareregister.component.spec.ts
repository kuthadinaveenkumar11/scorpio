import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareregisterComponent } from './wareregister.component';

describe('WareregisterComponent', () => {
  let component: WareregisterComponent;
  let fixture: ComponentFixture<WareregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WareregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
