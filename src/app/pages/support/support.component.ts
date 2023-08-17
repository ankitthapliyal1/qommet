import { Component, OnInit } from '@angular/core';
import {TicketService } from '../../shared/services/ticket.service';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  section = 1;
  file;
  list=[];
  ticketData;
  history:any = [
    {'DESCRIPTION':'Invoice #18019363', 'DATE':'01-04-2022', 'AMOUNT':'$6.0', 'BALANCE':'$-119.97', 'STATUS':'Completed',}
  ]

  quest =[ 
    {'title':'How am I billed for my instances?','desc':'All servers on your account are billed hourly up to the monthly rate cap. The hourly rate is determined by dividing the monthly rate by 672 hours (28 days). If your server is online for more than 672 hours in a calendar month, you will only be billed the monthly rate. Accumulated charges are invoiced to your account on the 1st of every month.'},
    {'title':'Do you charge for stopped instances?', 'desc':'Yes, instances in a stopped state continue to reserve dedicated system resources (RAM, SSD storage, IP aliases, vCPU) and therefore incur charges until you destroy the instance. If you wish to no longer accumulate charges for a virtual machine, please use the DESTROY  button in the customer portal.'},
  
  ]

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.getList();
  }

  openTicket(){
    this.section = 2
  }

  closeTicket(){
    this.section = 1  
  }
  onFileSelected(event) {
    this.file = event.target.files[0];
}

getList(){
  this.ticketService.list().subscribe(d=>{
    this.history = d.data;
   })
}
  generateTicket(form:any){
    let formData = new FormData();
    if(this.file?.name){
      formData.append("file", this.file, this.file.name);
    }
    formData.append("category", form.value.category);
    formData.append("subject", form.value.subject);
    formData.append("server", form.value.server);
    formData.append("message", form.value.message);

   this.ticketService.create(formData).subscribe(d=>{
    alert('kk');
    location.reload();
    this.section = 1  
   })

  }
  

}
