import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cancle',
  templateUrl: './cancle.component.html',
  styleUrls: ['./cancle.component.scss']
})
export class CancleComponent implements OnInit {

  constructor(    private toastr: ToastrService,private route: ActivatedRoute, private router: Router
    ) { }

  ngOnInit(): void {
    this.toastr.error('Payme Cancled');
    this.router.navigate(["/home"]);
      return ;

  }

}
