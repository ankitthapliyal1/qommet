import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstanceService } from 'app/shared/services/instance.service';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.scss']
})
export class ServerStatusComponent implements OnInit {
  availability:any = "High"

  
  regions;
  detail = {}
  constructor(private router: Router,
    public instanceService: InstanceService,
  ) { }

  ngOnInit(): void {

    this.instanceService.getServerStatus().subscribe((res: any) => {

      this.regions = res.data.regions;
   console.log( this.regions.ams.country)
    });
    window.scrollTo(0, 0);

   
  }


  updateData(d) {
    this.detail = d;
  }



}
