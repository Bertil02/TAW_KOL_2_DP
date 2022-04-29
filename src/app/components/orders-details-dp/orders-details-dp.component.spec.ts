import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsDPComponent } from './orders-details-dp.component';

describe('OrdersDetailsDPComponent', () => {
  let component: OrdersDetailsDPComponent;
  let fixture: ComponentFixture<OrdersDetailsDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
