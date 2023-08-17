import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/apiService/api.service';
import { ApiUrl } from 'app/services/apiService/apiUrl';
import { AuthService } from 'app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  Testimonials = [
    {name:'John Doe'}, {name:'John John'}, {name:'Doe'}
  ]

  factors:any=[
    {
      img:'assets/img/home/factor1.png',
      title:'Global footprint',
      desc:'It’s a long established fact that a reader will be distracted by the.'
    },
    {
      img:'assets/img/home/factor2.png',
      title:'One click apps',
      desc:'It’s a long established fact that a reader will be distracted by the.'
    },
    {
      img:'assets/img/home/factor3.png',
      title:'Full resource control',
      desc:'It’s a long established fact that a reader will be distracted by the.'
    },
    {
      img:'assets/img/home/factor4.png',
      title:'Upload ISO',
      desc:'It’s a long established fact that a reader will be distracted by the.'
    },
    {
      img:'assets/img/home/factor5.png',
      title:'Linux & BSD',
      desc:'It’s a long established fact that a reader will be distracted by the.'
    },
    {
      img:'assets/img/home/factor6.png',
      title:'No long term contracts',
      desc:'It’s a long established fact that a reader will be distracted by the.'
    },
  ]


  articles= [
    {},{},{},{},{},{}
  ]

  articlesFormatter:any
  clientId = '665154461427-a3g1gp14osusd9ejsfof8q17rdqnltp2.apps.googleusercontent.com';


  constructor(
    private router: Router,
    public service: ApiService,
    private toastr: ToastrService,
    private auth:AuthService
   ) { 

   
   }

  ngOnInit(): void {
      // @ts-ignore
      window.onGoogleLibraryLoad = () => { 
        // @ts-ignore
        google.accounts.id.initialize({
          client_id: this.clientId,
          callback: this.handleCredentialResponse.bind(this),
          auto_select: false,
          cancel_on_tap_outside: true
        });
        // @ts-ignore
        google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("buttonDiv"),
          { theme: "outline", size: "large", width: "100%" } 
        );
        // @ts-ignore
        google.accounts.id.prompt((notification: PromptMomentNotification) => {});
      };

    this.auth.blogList().subscribe(d=>{
      this.articles=d.data;
      this.formateItems();
    });

  }
  async handleCredentialResponse(respons) {
    console.log('respons', respons);
    this.service.postRequest(ApiUrl.googleredirect, respons).subscribe((res: any) => {
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
  formateItems(){
    this.articlesFormatter = [];
    var j = -1;
    
    for (var i = 0; i < this.articles.length; i++) {
        if (i % 3 == 0) {
            j++;
            this.articlesFormatter[j] = [];
            this.articlesFormatter[j].push(this.articles[i]);
        }
        else {
            this.articlesFormatter[j].push(this.articles[i]);
        }
    }

  }

  onRegister(form:any){
    console.log(form.value)
    if(form.valid){
      this.service.postRequest(ApiUrl.register,form.value).subscribe((res:any)=>{
        console.log(res)
        if (res.success == true) {
         
          
          this.toastr.success('Register Sucessfully')
          
          alert('please check your email to activate account');
          this.router.navigate(['/home'])
        }else{
          this.toastr.error('Invalid credentials')
        }

       
      })
      // 
    }

  }

  githubLogin(){
    
  
    this.auth.gitLogin({}) 
  }
  
  showLogin(){
    
  
    this.auth.redirectTo('/login'); 
  }

}
