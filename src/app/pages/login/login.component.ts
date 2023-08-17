import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'app/services/apiService/api.service';
import { ApiUrl } from 'app/services/apiService/apiUrl';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  section: number = 1
  constructor(
    private router: Router,
    public service: ApiService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  
  
    if (localStorage.getItem('QometLogin') == 'true') {
      this.router.navigate(['/0/instanceList'])
    }
  }



  onLogin(form: any) {

    if (form.valid) {
      this.spinner.show();


      this.service.postRequest(ApiUrl.login, form.value).subscribe((res: any) => {
        if (res.success == true) {
          localStorage.setItem('QometToken', res.token);
          localStorage.setItem('email', res.email);
          localStorage.setItem('QometLogin', 'true');
          this.spinner.hide()
          this.router.navigate(['/0/instanceList'])
          this.toastr.success('Login Sucessfully')


        } else {
          this.spinner.hide()
          this.toastr.error(res.error)
        }

      })

      //
    }
  }

  onReset(form: any) {
    console.log(form.value)
    if (!form.valid) {
      return;
    }

    this.service.postRequest(ApiUrl.forgotPassword, form.value).subscribe((d: any) => {
      if (d.success == true) {
        this.toastr.success('Reset Password Link sent to Email');
        this.router.navigate(['/home'])

      } else {
        this.toastr.error(d.error);
      };

    });
  }

  onRegister(form: any) {
    console.log(form.value)
    if (form.valid) {
      this.service.postRequest(ApiUrl.register, form.value).subscribe((res: any) => {
        console.log(res)
        if (res.success == true) {
          this.section = 1

          this.toastr.success('Register Sucessfully')

          alert('please check your email to activate account');
          this.router.navigate(['/home'])
        } else {
          this.toastr.error('Invalid credentials')
        }


      })
      // 
    }

  }

  changePage(page: any) {
    // 1 for login 2 for forget password 3 for register
    this.section = page

  }


}
