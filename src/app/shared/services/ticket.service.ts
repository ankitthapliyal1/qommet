import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
  
@Injectable({
    providedIn: 'root'
})

export class TicketService {

    public ticketUrl = environment.apiUrl + '/tickets';
      data;
   
    constructor(private http: HttpClient) { 
    } 
    list(){
        return this.http.get<any>(this.ticketUrl+'/list');
    }
     
    
    create(postData){ 
        return this.http.post<any>(this.ticketUrl + '/add', postData);
    }

    reply(postData, id){
        return this.http.post<any>(this.ticketUrl + `/${id}`, postData);
    }  

    // reply(postData, ){
    //     return this.http.post<any>(this.ticketUrl + `/reply/:id`, postData);
    // } 


    byId(id){
        return this.http.get<any>(this.ticketUrl+'/'+id);
    }   
}
