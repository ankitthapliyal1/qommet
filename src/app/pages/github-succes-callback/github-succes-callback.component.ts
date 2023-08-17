import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-github-succes-callback',
  templateUrl: './github-succes-callback.component.html',
  styleUrls: ['./github-succes-callback.component.scss']
})
export class GithubSuccesCallbackComponent implements OnInit {

  loading=true;
  constructor(  private route: ActivatedRoute,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router, private auth: AuthService) { 

  }

  ngOnInit(): void {    
    let code = this.route.snapshot.queryParamMap.get('code');
    if(!code){
return;
    }
    this.auth.gitCallback({code}).subscribe(res=>{
       if (res.success == true) {
        localStorage.setItem('QometToken', res.token);
        localStorage.setItem('email', res.email);
        localStorage.setItem('QometLogin', 'true');
         this.router.navigate(['/0/instanceList'])
        this.toastr.success('Login Sucessfully')


      } else {
         this.toastr.error(res.error)
      }
    })
  }

}
