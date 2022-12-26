import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparePackingListAsPerPurchaseOrderComponent } from './prepare-packing-list-as-per-purchase-order.component';

describe('PreparePackingListAsPerPurchaseOrderComponent', () => {
  let component: PreparePackingListAsPerPurchaseOrderComponent;
  let fixture: ComponentFixture<PreparePackingListAsPerPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparePackingListAsPerPurchaseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparePackingListAsPerPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
