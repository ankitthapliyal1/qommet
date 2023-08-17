import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  active: any = false;
  constructor(
     
    private authService: AuthService,
  ) { }

  type = 'PAGE'
  name: any
  commission: any
  id: any;
  one = {
    title: '',
    content: '' 
  }

  ngOnInit(): void {
       this.authService.pageDetails('privacy').subscribe(d => {
        if(d){
          this.name = d.data.name;
        this.active= d.data.active,
        this.one = d.data.one;
        }
        
      });
    
  }




}
