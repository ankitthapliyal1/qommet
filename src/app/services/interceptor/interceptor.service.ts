import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ApiService } from '../apiService/api.service';
// import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private apiService: ApiService,
    // private toastr: ToastrService,
    // private document: Document
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.apiService.getToken()

    const changedReq = req.clone({ 
      headers: req.headers.set('Authorization', `Bearer ${token}`)});
    return next.handle(changedReq)
  };
}
