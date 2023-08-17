import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(    private toastr: ToastrService,private route: ActivatedRoute, private router: Router
    ) { }

  ngOnInit(): void {
    this.toastr.success('Payme Sucessfully');
    this.router.navigate(["/home"]);
      return ;

  }

}
