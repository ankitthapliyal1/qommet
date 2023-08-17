import { Injectable, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, map, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
 
 
const transactionApi = environment.apiUrl + '/transactions';
@Injectable({
    providedIn: 'root'
})

export class TransactionService {
    // tslint:disable-next-line: variable-name
    private _loading = true;
    // tslint:disable-next-line: variable-name
    // private _search$ = new Subject<void>();
    // tslint:disable-next-line: variable-name
    private _tables= [];
    // tslint:disable-next-line: variable-name
    private _total = 0;
    // tslint:disable-next-line: variable-name
    private _state: any = {
        page: 1,
        pageSize: 10,
        searchTerm: '',
        sortColumn: '0',
        sortDirection: 'desc',
        startIndex: 0,
        endIndex: 9,
        totalRecords: 0
    };
    tableData= [] ;

    constructor(private pipe: DecimalPipe, private http: HttpClient) {}
    //getUsers
    getList() {
      let  data = {
            order: [{ column: this.sortColumn, dir: this.sortDirection }],
            start: (this.page - 1)* this.pageSize,
            length: this.pageSize,
            search: { value: this.searchTerm, regex: 'false' },
            s_date: '',
            e_date: '',
            status: 'active'
        };

        return this.http.post<any>(transactionApi, data).pipe(
            map((response: any) => {
            this._state.startIndex = (this._state.page - 1) * this.pageSize + 1;
            this._state.endIndex = (this._state.page - 1) * this.pageSize + this.pageSize;
            this._state.totalRecords=response.recordsTotal;
            if (this.endIndex > this.totalRecords) {
                        this.endIndex = this.totalRecords;
            }
                return response.data;
            })
        );;
    }
     
   
  getTransaction(id:any) {
    return this.http.get<any>(transactionApi +'/'+id);
  }

  update(id: string, data: any) {
    //return this.http.post<any>(transactionApi +'/'+id, data);
  }
  
  delete(id: string) {
    //return this.http.delete(transactionApi +'/'+id);
  }
  createTransaction(id: string, data: any) {
   // return this.http.post<any>(transactionApi +'/add/player/' + id, data);
  }





  
    /**
     * Returns the value
     */
    get tables() { return this.tableData; }
    get loading() { return this._loading; }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }

    get startIndex() { return this._state.startIndex; }
    get endIndex() { return this._state.endIndex; }
    get totalRecords() { return this._state.totalRecords; }

    /**
     * set the value
     */
    // tslint:disable-next-line: adjacent-overload-signatures
    set page(page: number) { this._set({ page }); }
    // tslint:disable-next-line: adjacent-overload-signatures
    set pageSize(pageSize: number) { this._set({ pageSize }); }
    // tslint:disable-next-line: adjacent-overload-signatures
    // tslint:disable-next-line: adjacent-overload-signatures
    set startIndex(startIndex: number) { this._set({ startIndex }); }
    // tslint:disable-next-line: adjacent-overload-signatures
    set endIndex(endIndex: number) { this._set({ endIndex }); }
    // tslint:disable-next-line: adjacent-overload-signatures
    set totalRecords(totalRecords: number) { this._set({ totalRecords }); }
    // tslint:disable-next-line: adjacent-overload-signatures
    set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
    set sortColumn(sortColumn: any) { this._set({ sortColumn }); }
    set sortDirection(sortDirection: any) { this._set({ sortDirection }); }

    private _set(patch: any) {
        Object.assign(this._state, patch);
     }

    
}
