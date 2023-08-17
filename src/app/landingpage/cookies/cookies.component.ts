import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

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
       this.authService.pageDetails('cookies').subscribe(d => {
        if(d){
          this.name = d.data.name;
        this.active= d.data.active,
        this.one = d.data.one;
        }
        
      });
    
  }


}
