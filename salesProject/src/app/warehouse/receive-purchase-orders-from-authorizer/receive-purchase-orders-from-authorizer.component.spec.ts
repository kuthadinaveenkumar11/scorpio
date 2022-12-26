import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePurchaseOrdersFromAuthorizerComponent } from './receive-purchase-orders-from-authorizer.component';

describe('ReceivePurchaseOrdersFromAuthorizerComponent', () => {
  let component: ReceivePurchaseOrdersFromAuthorizerComponent;
  let fixture: ComponentFixture<ReceivePurchaseOrdersFromAuthorizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivePurchaseOrdersFromAuthorizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivePurchaseOrdersFromAuthorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
