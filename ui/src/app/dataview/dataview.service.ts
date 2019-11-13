import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()

export class DataviewService {
    constructor(private http: HttpClient) { }



    loadData (){
        return this.http.get<any>("URL");
    }

  }