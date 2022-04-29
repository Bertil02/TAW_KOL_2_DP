import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDPComponent } from './orders-dp.component';

describe('OrdersDPComponent', () => {
  let component: OrdersDPComponent;
  let fixture: ComponentFixture<OrdersDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
