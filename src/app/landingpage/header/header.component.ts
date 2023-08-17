import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('myTopnav', { static: false }) public mydiv: ElementRef | undefined;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }
  homePage(){
    this.authService.redirectTo('/');
  }

  myFunction() {
    // var x = document.getElementById("myTopnav");

    var x = document.getElementById('myTopnav') as HTMLElement;


    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
