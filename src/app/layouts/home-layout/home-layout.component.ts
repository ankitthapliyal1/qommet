import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  clientHeight: number;

  constructor(){
    this.clientHeight = window.innerHeight; 
  }

  ngOnInit(): void {
  }

}
