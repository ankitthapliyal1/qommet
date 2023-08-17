import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/apiService/api.service';
import { ApiUrl } from 'app/services/apiService/apiUrl';
import { InstanceService } from 'app/shared/services/instance.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {

  tab:number = 6
  amount=10;
  userdata;
  constructor( private service: ApiService, private instanceService:InstanceService) {
   
   }

  ngOnInit(): void {
    this.service.getRequest(ApiUrl.userProfile).subscribe((res:any)=>{
      console.log(res)
      this.userdata = res.data
     }) 
  }

  tabClick(index:any){
    this.tab = index
  }

  payInstatcMojo(){
  

    
      this.instanceService.payInstatMojo(this.amount).subscribe(d=>{
        if(d.success){
          window.location.href = d.data.longurl
        }else{
          alert('Payment link error');
        }
      })
    
  }
  payWithStrip(){
   

    
      this.instanceService.payStrip(this.amount).subscribe(d=>{
        if(d.success){console.log(d)
          window.location.href = d.data.longurl
        }else{
          alert('Payment link error');
        }
      })
    
  }
}
