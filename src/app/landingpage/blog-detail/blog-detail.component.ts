import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/services/apiService/api.service';
import { AuthService } from 'app/shared/services/auth.service';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogDetail
  slug;
 
  constructor(
    private route: ActivatedRoute,public pageTitle: Title,public pageMeta: Meta,
    private router: Router,
    public service: ApiService,
     public auth:AuthService) {
    
   }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.auth.blogDetails(this.slug).subscribe(d=>{
      this.blogDetail= d.data.row;
      this.setSeo();

    });
      

  }

  setSeo(){
    this.pageMeta.addTags([ 
      { name: 'description', content: this.blogDetail.title + '& offers. Visit Bhramanti Tourism to know about the best ticket offers for'+  this.blogDetail.title },
      { name: 'keywords', content: this.blogDetail.title + ', ' + this.blogDetail.title + ' ticket price' } 
  ]);
  this.pageTitle.setTitle( 
    this.blogDetail.title  + ' & Ticket Prices'
  )
}

}
