import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-orders-dp',
  templateUrl: './orders-dp.component.html',
  styleUrls: ['./orders-dp.component.css']
})
export class OrdersDPComponent implements OnInit {

  public items$: any;

  constructor(private service: DataService) {
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

  ngOnInit() {
    this.getAll();
  }

}
