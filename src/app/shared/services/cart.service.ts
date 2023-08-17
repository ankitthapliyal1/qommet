import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
 
@Injectable({
    providedIn: 'root'
})

export class CartService {

    public cartUrl = environment.apiUrl + '/cart';
     public destination = {}
     public date =''
     id;
     data;
      
    
    constructor(private http: HttpClient) { 
        let x=  localStorage.getItem("cart_id");
        if(x){
          this.id=x;
        } 
    }
      cartcount(){
      return  this.data?.TourDetails.length;
    }
    setCartId(id:any){
        if(!this.id){
             localStorage.setItem("cart_id",id);
        }
       
    }
    cartTourDetailAdd(postdata:any) {
        if(this.id){
            postdata['id']=this.id;
        }
        return this.http.post<any>(this.cartUrl+'/tour-detail', postdata);
    }
    cartRemoveItem(postdata:any) {
        return this.http.post<any>(this.cartUrl+'/cart-remove', postdata);
    }
    cartDetail(postdata) {
        return this.http.post<any>(this.cartUrl+'/cart-detail/', postdata);
    }
    cartTourPassengerAdd(id, postdata:any) {
        return this.http.post<any>(this.cartUrl+'/tour-passenger/'+id, postdata);
    }
    cartSave(id:any, data:any) {

        return this.http.put<any>(this.cartUrl + id, data)
    }
    cartDelete(id:any) {
        return this.http.delete<any>(this.cartUrl + id).pipe(

        )
    }
   
    checkAvailibility(id:any) {
        return this.http.get<any>(this.cartUrl+'/check-availability/' + id).pipe()
    }
    deploy(postData:any) {
        return this.http.post<any>(this.cartUrl+'/book-depploy/', postData);
    }
     
    viewInvoice(id:any) {
        return this.http.get<any>(this.cartUrl+'/invoice-view/'+id);
    }
}
