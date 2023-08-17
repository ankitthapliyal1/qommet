import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
  
@Injectable({
    providedIn: 'root'
})

export class OrdersService {

    public orderUrl = environment.apiUrl + '/orders';
      data;
   
    constructor(private http: HttpClient) { 
    } 
    list(){
        return this.http.get<any>(this.orderUrl+'/list');
    }
    create(postData){ 
        return this.http.post<any>(this.orderUrl + '/add', postData);
    }
    reply(postData){
        return this.http.post<any>(this.orderUrl + '/reply/:id', postData);
    }  
    payInvoice(id){
        return this.http.post<any>(this.orderUrl,id);
    }   
    getById(id){
        return this.http.get<any>(this.orderUrl+'/'+id);
    }   
}
