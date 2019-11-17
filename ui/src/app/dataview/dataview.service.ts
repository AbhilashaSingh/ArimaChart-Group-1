import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Options } from 'selenium-webdriver/chrome';

@Injectable()

export class DataviewService {
    
    constructor(private http: HttpClient) { }



    loadData (){
        return this.http.get<any>("http://127.0.0.1:5000/series");
    }

    loadSummaryData (){
        return this.http.get<any>("http://127.0.0.1:5000/arimaseries");
    }

  }