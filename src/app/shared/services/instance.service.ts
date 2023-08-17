import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
  

@Injectable({
    providedIn: 'root'
})

export class InstanceService {

    public vultrUrl = environment.apiUrl + '/vultr';
    public instancesUrl = environment.apiUrl + '/instances';
     data;
    public filter = {
        id:'',
        countryId: 13063,
        cityId: '',
        travelDate: '', contractId: '', tourId: '',
        noOfAdult: 1,
        noOfChild: 0,
        noOfInfant: 0
    }
    list:{
        application:[],
        backup:[],
        bare_metal:[],
        billing:[],
        block_storage:[],
        dns:[],
        firewall:[],
        instances:[],
        iso:[],
        kubernetes:[],
        load_balancer:[],
        object_storage:[],
        operating_system:[],
        plans:[],
        private_networks:[],
        vpc:[],
        reversed_id:[],
        regisons:[],
        snapshots:[],
        ssh_keys:[],
        startup_scripts:[],
        users:[]
        

    };
    selected:{

    };
    filtered:{

    };

    constructor(private http: HttpClient) {console.log('instace service');
        // let x = localStorage.getItem("filter");
        // if (x) {
        //     this.filter = JSON.parse(x);
        // }
    } 
    applicationList(){
        return this.http.get<any>(this.vultrUrl + '/instances-list');
    }
    planList(){console.log('planList');
        return this.http.get<any>(this.vultrUrl + '/plan-list');
    }

    payandcreate(data){
        return this.http.post<any>(this.vultrUrl + '/pay-create', data);
    }
    createInstance(postData){
        return this.http.post<any>(this.vultrUrl + '/instance-create', postData);
    }
    instanceList(){
        return this.http.get<any>(this.vultrUrl + '/instances-mylist');
    }
    instanceStop(postData){
        return this.http.post<any>(this.vultrUrl + '/instance-halt',postData);
    }
    instanceRestart(postData){
        return this.http.post<any>(this.vultrUrl + '/instance-restart',postData);
    }
    instanceReinstall(postData){

        return this.http.post<any>(this.vultrUrl + '/instance-reinstall',postData);
    }
    instanceUpgradePlan(id, postData){
        return this.http.post<any>(this.vultrUrl + '/instance-update/'+id,postData);
    }
    snapshotList(id, postData){
        return this.http.get<any>(this.vultrUrl + '/snapshot-list');
    }
    snapshotAdd(postData){
        return this.http.post<any>(this.vultrUrl + '/snapshot-create',postData);
    }
    snapshotDel(id){
        return this.http.post<any>(this.vultrUrl + '/snapshot-delete/'+id,{});
    }
     
    instanceDelete(postData){
        return this.http.post<any>(this.vultrUrl + '/instance-delete',postData);
    }
    instanceGet(id: any){
        return this.http.get<any>(this.vultrUrl + '/instance-view/'+id);
    }
    instanceBandwith(id){
        return this.http.get<any>(this.vultrUrl + '/instance-bandwidth/'+id);
    }
    payInvoice(id){
        return this.http.post<any>(this.vultrUrl + '/pay-invoice',{id});
    }
    payInstatMojo(amount){
        return this.http.post<any>(this.vultrUrl + '/pay-addmoney',{cart:{total:amount} ,pay:'insta'});
    }
    payStrip(amount){
        return this.http.post<any>(this.vultrUrl + '/pay-addmoney',{cart:{total:amount}, pay:'strip'});
    }
    getUpgrades(id){
        return this.http.get<any>(this.vultrUrl + '/instance-upgrades/'+id);

    }
    getServerStatus(){
        return this.http.get<any>(this.vultrUrl + '/server-status/');
    }
}
