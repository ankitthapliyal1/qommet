import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { id } from '@swimlane/ngx-charts';
import { TicketService } from 'app/shared/services/ticket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-support-reply',
  templateUrl: './support-reply.component.html',
  styleUrls: ['./support-reply.component.scss']
})
export class SupportReplyComponent implements OnInit {

  loading = false
  
  ticketData;
  id;
  messages;

  constructor(private ticketService:TicketService,
     private route: ActivatedRoute,
     private tostr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getdata()

  }


  getdata(){
    this.ticketService.byId(this.id).subscribe(d=>{
      this.ticketData = d.data;
      console.log(this.ticketData)
      this.messages = d.data.messages
      console.log(d)
      

    });

  }

  postReply(form:any){

    let val  = {
      'message':form.value.message,
     
    }

    this.ticketService.reply(val, this.id).subscribe(d=>{
     
  if(d.success){
    this.tostr.success("message sent Successfully")
    location.reload()
  }
      
     
     })





  }

}
