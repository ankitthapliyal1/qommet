import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/services/apiService/api.service';
import { ApiUrl } from 'app/services/apiService/apiUrl';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  refer_code;
  constructor(
    private router: Router,
    public service: ApiService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
   ) { }

  ngOnInit(): void {
    this.refer_code = this.route.snapshot.queryParamMap.get('ref');
  }

  onRegister(form:any){
      if(form.valid){
      this.service.postRequest(ApiUrl.register,form.value).subscribe((res:any)=>{
        console.log(res)
        if (res.success == true) {
         
          
          this.toastr.success('Register Sucessfully')
          
          alert('please check your email to activate account');
          this.router.navigate(['/home'])
        }else{
          this.toastr.error('Invalid credentials')
        }

       
      })
      // 
    }

  }

}
