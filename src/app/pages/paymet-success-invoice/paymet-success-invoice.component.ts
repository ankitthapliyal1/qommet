import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  
@Component({
  selector: 'app-paymet-success-invoice',
  templateUrl: './paymet-success-invoice.component.html',
  styleUrls: ['./paymet-success-invoice.component.scss']
})
export class PaymetSuccessInvoiceComponent implements OnInit {
  loading=true;
  constructor(  private route: ActivatedRoute, private router: Router) { 

  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    let payment_status = this.route.snapshot.queryParamMap.get('payment_status');

    if(payment_status !=='Credit'){
      alert('Payment Failed');
      this.router.navigate(["/home"]);
      return ;
    }
          this.router.navigate(['/1/history']);
  }

}
