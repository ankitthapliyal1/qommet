import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/apiService/api.service';
import { ApiUrl } from 'app/services/apiService/apiUrl';

@Component({
  selector: 'app-referral-program',
  templateUrl: './referral-program.component.html',
  styleUrls: ['./referral-program.component.scss']
})
export class ReferralProgramComponent implements OnInit {
  refrer_code='';
  userdata;
  constructor( private service: ApiService) {
   
   }

  ngOnInit(): void {
    this.service.getRequest(ApiUrl.userProfile).subscribe((res:any)=>{
       this.userdata = res.data
     }) 
  }

  copyInputMessage(val:any){
    alert('Copied')
 console.log(val)
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    
  }

}
