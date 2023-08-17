import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  
  baseUrl: string = environment.apiUrl
 

  constructor(
    private httpClient: HttpClient
  ) { }
  

  getToken() {
    return localStorage.getItem('QometToken')
  }

  //********** Api Requests************

getRequest(url:any){
  return this.httpClient.get(this.baseUrl+url);
  
}


postRequest(url:any, data:any){
  return this.httpClient.post(this.baseUrl+url, data)
}


putRequest(url:any, data:any){
  return this.httpClient.put(this.baseUrl+url, data)
}


deleteRequest(url:any){
  return this.httpClient.delete(this.baseUrl+url)
}




}
