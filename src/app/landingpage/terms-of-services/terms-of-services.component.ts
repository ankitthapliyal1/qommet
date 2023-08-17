import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-terms-of-services',
  templateUrl: './terms-of-services.component.html',
  styleUrls: ['./terms-of-services.component.scss']
})
export class TermsOfServicesComponent implements OnInit {
  
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
       this.authService.pageDetails('terms').subscribe(d => {
        this.name = d.data.name;
        this.active= d.data.active,
        this.one = d.data.one;
      });
    
  }



}
