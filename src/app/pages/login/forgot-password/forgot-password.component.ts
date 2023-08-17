import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  constructor( private router: Router,private route: ActivatedRoute, public AuthService: AuthService,    private toastr: ToastrService,
    ) {}
  ngOnInit(): void {}

  onSubmitForgot(formdata:any) {
    // this.modalService.dismissAll();
    console.log(formdata.value)

    // this.submitted = true;
    if(formdata.value.password !== formdata.value.cpassword){
      alert('new password and confirm password didnot match ');
      return ;
    }
    // stop here if form is invalid
    if (formdata.value.invalid) {
      return;
    }
    let x= formdata.value;
    x['token'] = this.route.snapshot.paramMap.get('token');
    this.AuthService.resetPassword(x).subscribe(
      (d:any) => {
        if(d.success){
         //this.modalService.dismissAll();
         this.toastr.success('password changed please login')
         this.router.navigate(['/login'])
        }else{
          this.toastr.error(d.error)
        }
                  

      } );
    // display form values on success
   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
    //console.log("res:", this.loginForm.getRawValue());
  }
  // get lf() { return this.forgotForm.controls; }



}
