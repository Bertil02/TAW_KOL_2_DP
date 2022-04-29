import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemDPComponent } from './orders-item-dp.component';

describe('OrdersItemDPComponent', () => {
  let component: OrdersItemDPComponent;
  let fixture: ComponentFixture<OrdersItemDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
