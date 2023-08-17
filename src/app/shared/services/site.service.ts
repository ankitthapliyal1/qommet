import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SiteService {
 
    public siteUrl = environment.apiUrl + '/settings/filter/SITE';
     public data = { q: '' }

    constructor(private http: HttpClient) { }
    siteData() {
        let params = new HttpParams()
      //  params = params.set('sort', 'position');
        return this.http.get<any>(this.siteUrl, { params});
    }
    SiteOrg(org:any) {
        let params = new HttpParams()
        params = params.set('groupId', org);
        params = params.set('sort', 'position');
        return this.http.get<any>(this.siteUrl, { params });
    }
 

    SiteAdd(postdata:any) {
        return this.http.post<any>(this.siteUrl, postdata);
    }
    SiteEdit(id:any, data:any) {

        return this.http.put<any>(this.siteUrl + id, data)
    }
    SiteDelete(id:any) {
        return this.http.delete<any>(this.siteUrl + id).pipe(

        )
    }

 
    


}
