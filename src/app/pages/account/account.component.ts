import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/apiService/api.service';
import { ApiUrl } from 'app/services/apiService/apiUrl';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  users;
  email:any
  tab:any = 1
  userdata :any ={};

  constructor(
    private service: ApiService,
    private tostr: ToastrService
  ) { }

  ngOnInit(): void {
   this.email =  localStorage.getItem('email')

   this.service.getRequest(ApiUrl.userProfile).subscribe((res:any)=>{
    console.log(res)
    this.userdata = res.data
   })


  }

  tabClick(index:any){
    this.tab = index
  }

  updateProfile(form:any){
  this.service.postRequest(ApiUrl.userProfile, form.value).subscribe((res:any)=>{
     if(res.success){
      this.tostr.success("Profile Updated");
      this.userdata = res.data

    }
  })
  }
  changePassword(form:any){
    this.service.postRequest(ApiUrl.updatepassword, form.value).subscribe((res:any)=>{
       if(res.success){
        this.tostr.success("Password Changes")
      }
    })
    }


}
