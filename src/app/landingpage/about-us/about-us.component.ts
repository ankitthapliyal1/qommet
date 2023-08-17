import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

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
       this.authService.pageDetails('about').subscribe(d => {
        if(d){
          this.name = d.data.name;
        this.active= d.data.active,
        this.one = d.data.one;
        }
        
      });
    
  }


}
