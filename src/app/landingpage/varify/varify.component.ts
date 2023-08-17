import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-varify',
  templateUrl: './varify.component.html',
  styleUrls: ['./varify.component.scss']
})
export class VarifyComponent implements OnInit {

  year:any

  constructor() { }

  ngOnInit(): void {
    const d = new Date();
this.year = d.getFullYear();
  }

}
