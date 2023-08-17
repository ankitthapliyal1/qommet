import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstanceService } from 'app/shared/services/instance.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { plan } from "app/shared/data/response";
import { applications } from "app/shared/data/appliation";
import { os } from "app/shared/data/os";

import { multi, single } from './data';

@Component({
  selector: 'app-instance-view',
  templateUrl: './instance-view.component.html',
  styleUrls: ['./instance-view.component.scss']
})

export class InstanceViewComponent implements OnInit {
  id='';
  snapshotList=[
      {
        "id": "cb676a46-66fd-4dfb-b839-443f2e6c0b60",
        "date_created": "2020-10-10T01:56:20+00:00",
        "description": "Example Snapshot",
        "size": 42949672960,
        "compressed_size": 949678560,
        "status": "complete",
        "os_id": 215,
        "app_id": 0
      }
    ];
  password = ''
  bandwithdata = {
    "2020-07-25": {
      "incoming_bytes": 15989787,
      "outgoing_bytes": 25327729
    },
    "2020-07-26": {
      "incoming_bytes": 13964112,
      "outgoing_bytes": 22257069
    }
  };

  tab: number = 1
  sideTab: number = 1
  instance_detail;
  upgrades;
  planList = [];
  hostname='';
  plan='';
  os = os.os;
  image_id='';
  applications = applications.applications;

  data;
  multi = [];
  applications_filtered= [];
  ui = {snapshotdesc:'Example Snapshot',os_family:'',os_id:'',image_id:'', app_id:'','app_name':'',  app_filter: 'marketplace'};
  currentPage = 1;
  start = 0;
  perpage = 20;
  endIndex = 20;
  pages;
  constructor(
    private instanceService: InstanceService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router) {
    Object.assign(this, { single, multi })
  }

  ngOnInit(): void {
    this.spinner.show()
     this.id = this.route.snapshot.paramMap.get('id')!;
    this.instanceService.instanceGet(this.id).subscribe(d => {
      this.data = d.data;
      this.instance_detail = d.data.instance;
      this.password = d.data.default_password;
      this.hostname =  d.data.instance.hostname;
      this.spinner.hide()
    });
    this.instanceService.instanceBandwith(this.id).subscribe(d => {
      this.bandwithdata = d.data.bandwidth;
      this.setGraph();

    });
    this.os = this.groupBy(this.os, 'family');

  }

  setGraph() {


    for (let k in this.bandwithdata) {
      let data = {
        "name": k,
        "series": [
          {
            "name": "Bytes Received",
            "value": this.bandwithdata[k].incoming_bytes
          },
          {
            "name": "Bytes sent",
            "value": this.bandwithdata[k].outgoing_bytes
          }
        ]
      }

      this.multi.push(data);
    }


  }

  getUpgrade() {
    this.instanceService.getUpgrades(this.instance_detail.id).subscribe(d => {
      this.upgrades = d.data.upgrades;
      this.planList = plan.plans.filter(p => this.upgrades.plans.includes(p.id));
      console.log(this.planList);
    });
  }
  tabClick(index: any) {
    this.tab = index
  }

  sideTabClick(index: any) {
    this.sideTab = index
    if (this.sideTab === 6) {
      this.getUpgrade();
    }
   
  }

  single: any[];

  legendTitle: string = '';

  view: any[] = [900, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = 'MB';

  colorScheme = {
    // domain: ['#f1968f', '#A10A28',  ]
    domain: ['#2f39bf', '#6280e3',]
  };



  onSelect(event) {
    console.log(event);
  }

  copyInputMessage() {
    alert('Copied')
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.password;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }
  changeHostname() {
    if (!this.confirmed()) {
      return;
    }
    this.spinner.show();
    this.instanceService.instanceReinstall({ id: this.data.id, hostName: this.hostname }).subscribe(d => {
      this.spinner.hide()
      if (d.data.hasOwnProperty('error')) {
        alert(d.data.error);
        return;
      }
      alert('HostName Changed');
    });
  }
  upgradePlan(){
    if(!this.plan){
      alert('select plan');
      return;
    }
    if (!this.confirmed()) {
      return;
    }
    this.spinner.show();
    this.instanceService.instanceUpgradePlan(this.data.id,{ plan: this.plan }).subscribe(d => {
      this.spinner.hide()
      if (d.data.hasOwnProperty('error')) {
        alert(d.data.error);
        return;
      }
      alert('Plan Changed');
    });

  }
  upgradeOs(){
    
  }
  upgradeApplication(){
    
    

    
    let updateData={};
    if(this.ui.image_id){
      updateData['image_id']=this.ui.image_id;
    }else if(this.ui.app_id){
      updateData['app_id']=this.ui.app_id;
    }else{
      alert('select application');
      return;
    }
    //alert(JSON.stringify(updateData));return;
    if (!this.confirmed()) {
      return;
    }
   this.spinner.show();
    this.instanceService.instanceUpgradePlan(this.data.id,updateData).subscribe(d => {
      this.spinner.hide()
      if (d.data.hasOwnProperty('error')) {
        alert(d.data.error);
        return;
      }
      alert('Application Changed');
    });
    
  }
  confirmed(reschk = 'ok') {

    let res = prompt(`Are you shure this will delete all data and files, type ${reschk} to confirm`);
    if (!res || res !== reschk) {

      return false;
    }
    return true;
  }
  filterApp() {
    let x= this.ui.app_name.toUpperCase();
    let fiterbyType = (d) => {
      return d.type === this.ui.app_filter && d.name.toUpperCase().includes(x);
    }

    this.applications_filtered = this.applications.filter(fiterbyType);
  }
  app_array() {
     return this.applications_filtered.slice(this.start, this.endIndex);
  }
  resetOsids(){
    this.ui.app_id='';
    this.ui.os_id='';
    this.ui.os_family='';
  }
  appClick(o){ 
    this.resetOsids();
    this.ui.app_id=o.id;
    this.ui.image_id=o.image_id;
  }
  getPage() {
    const pagesCount = Math.ceil(this.applications_filtered.length / this.perpage);
    return this.range(1, pagesCount);
  }
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
  selectApp(d, f){
    this.resetOsids();
    this.ui.os_family=f;
     this.ui.os_id=d;
  }
  groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }


  changeos(){
    
    
    let updateData={};
    if(this.ui.os_id){
      updateData['os_id']=this.ui.os_id;
    }else{
      alert('select os');
      return;
    }
   // alert(JSON.stringify(updateData));return;
    if (!this.confirmed()) {
      return;
    }
   this.spinner.show();
    this.instanceService.instanceUpgradePlan(this.data.id,updateData).subscribe(d => {
      this.spinner.hide()
      if (d.data.hasOwnProperty('error')) {
        alert(d.data.error);
        return;
      }
      alert('os Changed');
    });
    

  }
  createSnapshot(){
     
    let updateData={};
    if(this.id){
      updateData['description']=this.ui.snapshotdesc;
      updateData['id']=this.id;
    }else{
      alert('Instance not found');
      return;
    }
   alert(JSON.stringify(updateData));return;
    if (!this.confirmed()) {
      return;
    }
   this.spinner.show();
    this.instanceService.snapshotAdd(updateData).subscribe(d => {
      this.spinner.hide()
      if (d.data.hasOwnProperty('error')) {
        alert(d.data.error);
        return;
      }
      alert('os Changed');
    });
    

  }
  restoreSnapshot(){
    
  }
  deleteSnapshot(){
    
  }

}
