import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstanceService } from '../../shared/services/instance.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {
  loading=true;
  constructor( private spinner: NgxSpinnerService, public instanceService: InstanceService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {
    console.log('succcsss');
    let id = this.route.snapshot.paramMap.get('id');
    let payment_status = this.route.snapshot.queryParamMap.get('payment_status');

    if(payment_status !=='Credit'){
      alert('Payment Failed');
      this.router.navigate(["/home"]);
      return ;
    }
    this.spinner.show();
    setTimeout(()=>{ 
            this.spinner.hide()
            this.router.navigate(['/0/instanceList']);
      }, 3000);
    // this.spinner.show()
    // this.instanceService.createInstance({id}).subscribe(d => {
       
    //   if(d.success){
    //     this.spinner.hide()
    //       this.router.navigate(['/0/instance/instanceList']);
          
    //   }else{
    //     alert(d.error);
    //     this.router.navigate(["/login"]);
        
    //   }
    

    // })

  }

}
