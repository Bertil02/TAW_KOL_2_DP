import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-dp',
  templateUrl: './orders-item-dp.component.html',
  styleUrls: ['./orders-item-dp.component.css']
})
export class OrdersItemDPComponent implements OnInit {

  @Input() image?: string;
  @Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
