import { Component, OnInit } from '@angular/core';
import { InstanceService } from "../../shared/services/instance.service";
import { regions } from "../../shared/data/regons";
import { plan } from "../../shared/data/response";
import { applications } from "../../shared/data/appliation";
import { os } from "../../shared/data/os";
import { plans_metal } from "../../shared/data/bm";
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/apiService/api.service';
import { ApiUrl } from 'app/services/apiService/apiUrl';


 

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.scss']
})
export class InstanceComponent implements OnInit {
  displayStyle = "none";
  pay='insta';
  os = os.os;
  plans_metal = plans_metal.plans_metal;
  applications = applications.applications;
  cart={
    count:1,
    plan:0,
    summary:0,
    gst:0,
    total:0,
    backups:0,
    ddos_protection:0
  };
  servers = [
    {
      type: 'voc', 'name': 'Optimized'
      , sub: [{ type: 'voc-g', name: 'General Purpose Optimized Cloud' }, { type: 'voc-c', name: 'CPU Optimized Cloud' }, { type: 'voc-m', name: 'Memory Optimized Cloud' }, { type: 'voc-s', name: 'Storage Optimized Cloud' }]
    },
    { type: 'vc2', 'name': 'Cloud Compute'
    , sub: [{ type: 'vc2', name: 'Cloud Compute' }, { type: 'vhf', 'name': 'High Frequency Compute ' }, { type: 'vhp', 'name': 'High Performance' }]

  },
    { type: 'vcg', 'name': 'Cloud GPU' },

    { type: 'vbm', 'name': ' Bare Metal ' }
  ];
  plans = plan.plans;
  serversize = [];
  location = regions.regions;
  server_hostname = '';
  server_lable = '';
  items=[];
  optional_charge={
    backups :6,
    ddos_protection:10,
  }
   
  quantity: number = 1
  currentPage = 1;
  start = 0;
  perpage = 20;
  endIndex = 20;
  pages;
  ui = {
    continent: 'Asia',
    servertype: 'vc2',
    servertype_tab: 'vc2',
    img: 'assets/img/japan.png',
    regionId: 'blr',
    serverimage: ['distribution', 'marketplace', 'backup', 'snapshot'],
    serverimage_tab: 'distribution',
    app_filter: 'marketplace',
    app_name: '',
    os_id:'387',
    plan:'',
    os_family:'ubuntu',
    app_id:'',
    snapshot_id:'',
    image_id:'',
    backups:false,
    ddos_protection:false,
    enable_vpc:false,
    hostname:'',
    label:''

  }
  subType = [];
  applications_filtered = [];
  continent=[];
  country_current=[];
  constructor(
    private instanceService: InstanceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    public service: ApiService
    ) { }

  ngOnInit(): void {
    // this.instanceService.planList().subscribe((res: any) => {

    //   this.plans=res.plans ;
    //       });
   
    
    this.os = this.groupBy(this.os, 'family');
      this.filterApp();
      this.continent_array();
  
   }

  filterApp() {
    let x= this.ui.app_name.toUpperCase();
    let fiterbyType = (d) => {
      return d.type === this.ui.app_filter && d.name.toUpperCase().includes(x);
    }

    this.applications_filtered = this.applications.filter(fiterbyType);
  }
  slecletServerimage(d) {
    this.ui.serverimage_tab = d;
  }
  selectCity(d) {
    this.ui.regionId = d.id

  }
  switchContent(c) {
    this.ui.continent = c;
    this.country();
  }
  switchServerType(c) {
    this.ui.servertype_tab = c.type;
    if (c.sub) {
      this.subType = c.sub;
      this.ui.servertype = c.sub[0].type;
    } else {
      this.ui.servertype = c.type;
      this.subType = [];
    }
  }
  selectApp(d, f){
    this.resetOsids();
    this.ui.os_family=f;
     this.ui.os_id=d;
  }
  selectServerType(o) {
    this.ui.servertype = o.type;
  }
  serversizeoption() {
    
    if(this.ui.servertype_tab === 'vbm'){
      let x = this.plans_metal.filter(d => {
        return d.id.startsWith(this.ui.servertype) && d.locations.includes(this.ui.regionId);
      });
      return x;
    }
    let x = this.plans.filter(d => {
      return d.id.startsWith(this.ui.servertype) && d.locations.includes(this.ui.regionId);
    });
    return x;
  }
  continent_array() {
    console.log('continent');
    let x = this.location.map(d => d.continent)
    this.continent= [... new Set(x)];
    this.country();
  }
  country() {
    console.log('country');
   
    this.country_current = this.location.filter(d => d.continent.toUpperCase() === this.ui.continent.toUpperCase());
     
  }
  
  incrementValue() {
    this.quantity = this.quantity + 1
  }

  decrimentValue() {
    if (this.quantity > 0) {
      this.quantity = this.quantity - 1
    } else {
      this.quantity = 0
    }
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


  changePage(page: number): void {
    this.currentPage = page;

    this.endIndex = this.currentPage * this.perpage;
    this.start = (this.currentPage - 1) * this.perpage;

  }
  app_array() {

    return this.applications_filtered.slice(this.start, this.endIndex);
  }
  getPage() {
    const pagesCount = Math.ceil(this.applications_filtered.length / this.perpage);
    return this.range(1, pagesCount);
  }
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
  sizeClick(o){
    this.ui.plan=o.id;
    this.cart.plan=o.monthly_cost;
    this.calCartTotal();
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
  setBackups(){
  this.cart.backups= this.ui.backups?this.optional_charge.backups:0;

   this.calCartTotal();

  }
  setddos_protection(){
    this.cart.ddos_protection= this.ui.ddos_protection?this.optional_charge.ddos_protection:0;
    this.calCartTotal();
  }
  calCartTotal(){
    this.cart.summary =  this.cart.plan+ this.cart.backups + this.cart.ddos_protection;
    this.cart.gst = this.cart.summary * 0.18;
    this.cart.total = this.cart.summary +  this.cart.gst ; 
  }
  paydeploy(){
    
    if(!this.ui.label || !this.ui.hostname){
      alert(' Please provide label and hostname ');
      return;
    }
    if(!this.cart.plan){
        alert(' Please select plan');
        return;
    }
    if(!this.ui.os_id  && !this.ui.app_id){
      alert('Please select os or marketplace ');
      return;
    }
    let data={
      deploy:{
        "region": this.ui.regionId,
        "plan":   this.ui.plan,
        "label":  this.ui.label,  
        "user_data": "",
        "backups": this.ui.backups?'enabled':'disabled',
        "hostname": this.ui.hostname
      },
      'cart':this.cart,
      'pay':this.pay
    };
    if(this.ui.os_id){
      data['deploy']["os_id"]= this.ui.os_id;
    }
    if(this.ui.app_id){
     // data['deploy']["app_id"]= this.ui.app_id;
      data['deploy']["image_id"]= this.ui.image_id;
    }

    this.instanceService.payandcreate(data).subscribe(d=>{
      if(d.success){
              window.location.href = d.data.longurl;
            }else{
              alert('Payment link error');
            }
    })
  }
  showDialog(){
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  paydeployStripe(){
    this.pay='strip';
    this.paydeploy();
  }
  paydeployInsta(){
    this.pay='insta';
    this.paydeploy();
  }
}
