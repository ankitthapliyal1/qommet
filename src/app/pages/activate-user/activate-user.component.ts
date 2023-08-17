import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent implements OnInit {
 
  constructor( private router: Router, private route: ActivatedRoute, public AuthService: AuthService,    private toastr: ToastrService,
    ) {}
  ngOnInit(): void {
    let id =  this.route.snapshot.paramMap.get('id');
    let token =  this.route.snapshot.paramMap.get('token');
    
    this.AuthService.activateUser({id, token}).subscribe((d:any) => {
      if(d.success){
        //this.modalService.dismissAll();
        this.toastr.success('User Activated Success');
        this.router.navigate(['/login'])
       }else{
         this.toastr.error(d.error)
       }
    })
  }
}
