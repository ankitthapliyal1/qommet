import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { os } from 'app/shared/data/os';
// import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';


import { InstanceService } from 'app/shared/services/instance.service';
import { NgxSpinnerService } from 'ngx-spinner';


import { multi, single } from './data';

@Component({
  selector: 'app-instance-list',
  templateUrl: './instance-list.component.html',
  styleUrls: ['./instance-list.component.scss']
})
export class InstanceListComponent implements OnInit {
  
  intervalId: any;
  maxAttempts: number = 5;
  currentAttempts: number = 0;
  section:number = 1

  tab:number = 1
  sideTab:number = 1
  instanceList = [
    
  ]

  constructor(
    private instanceService: InstanceService,
    private spinner: NgxSpinnerService
    ) {
      console.log('constructor');
    Object.assign(this, { multi})   
  }

  ngOnInit(): void {
    // this.spinner.show()
    this.instanceService.instanceList().subscribe(d=>{
      this.instanceList = d.data;
      // this.spinner.hide()
      if(d.data.length !=0){
        let records = d.data.filter(d=>d.instance.status ==='pending');
       
        if(records.length !==0){
             this.checkStatus();
         }
      }
      
    })
 
  }

  serchVal:any
  tabClick(index:any){
    this.tab = index
  }

  sideTabClick(index:any){
    this.sideTab = index
  }

  serverDetails(){
    this.section = 2;
  }

  onSelect(event) {
    console.log(event);
  }

  checkStatus() {
    
    console.log('checkStatus');

     for(let row of this.instanceList ){
      if(row.instance.status ==='active'){
        continue;
      }
      this.instanceService.instanceGet(row.instanceId).subscribe((response) => {
        row.instance=response.data.instance
       });
     }

     setTimeout(()=>{location.reload()},5000);

    


     
 
  }

  stop(id){
    if(!confirm('Stop server !!')){
      return;
    }
    this.spinner.show()
    this.instanceService.instanceStop({id}).subscribe(d=>{
      this.spinner.hide()
      if(d.data.hasOwnProperty('error') ){
        alert(d.data.error);
        return;
      } 
       alert('stoped');
      
    })
  }
  confirmed(reschk='ok'){
     
    let res =  prompt(`Are you shure this will delete all data and files, type ${reschk} to confirm`);
    if(!res || res!== reschk){

      return false;
    }
    return true;
  }
  consoleview(url){
    window.open(url);
  }
  restart(id){
    if(!confirm('Restart server !!')){
      return;
    }
    this.spinner.show()
    this.instanceService.instanceRestart({id}).subscribe(d=>{
      this.spinner.hide()
      if(d.data.hasOwnProperty('error') ){
        alert(d.data.error);
        return;
      } 
         
        alert('Restart');
      
     
   })
  }
  destroy(id){
    if(!this.confirmed()){
      return;
    }
    
    this.spinner.show()
    this.instanceService.instanceDelete({id}).subscribe(d=>{
      this.spinner.hide()
      if(d.data.hasOwnProperty('error') ){
        alert(d.data.error);
        return;
      } 
        alert('destroyed');
   })
  
  
  }
  reinstall(id){
    if(!this.confirmed()){
      return;
    }
    this.spinner.show()
    this.instanceService.instanceReinstall({id}).subscribe(d=>{
      this.spinner.hide()
      if(d.data.hasOwnProperty('error') ){
        alert(d.data.error);
        return;
      } 
        alert('Reinstalled');
      
     
   });
  
  }



 
}


