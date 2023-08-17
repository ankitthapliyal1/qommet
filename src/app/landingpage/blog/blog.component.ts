import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor( private auth:AuthService) { }

  blogs= [
    {}, {} ,{} , {}
  ]

  ngOnInit(): void {
    this.auth.blogList().subscribe(d=>{
      this.blogs=d.data;
     });
   window.scrollTo(0, 0);
  }

}
