import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstanceService } from 'app/shared/services/instance.service';
import { OrdersService } from 'app/shared/services/order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {
  order;
  id;
  constructor(private ordersService:OrdersService,private instanceService:InstanceService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get('id')!;
    this.ordersService.getById(this.id).subscribe(d=>{
      this.order = d.data;

    })

  }

  payinvoice(){
    this.instanceService.payInvoice(this.id).subscribe(d=>{
      if(d.success){
        window.location.href = d.data.longurl
      }else{
        alert('Payment link error');
      }
    })
  }
 
}
