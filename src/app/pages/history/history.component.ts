import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'app/shared/services/order.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history:any = [
    {'DESCRIPTION':'Invoice #18019363', 'DATE':'01-04-2022', 'AMOUNT':'$6.0', 'BALANCE':'$-119.97', 'STATUS':'Completed',}
  ]

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.ordersService.list().subscribe(d=>{
      this.history= d.data;
    });
  }
 
}
