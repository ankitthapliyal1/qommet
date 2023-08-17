import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // x['token'] = this.route.snapshot.paramMap.get('token');
  }

  changePassword(data:any){
console.log(data)
  }

}
