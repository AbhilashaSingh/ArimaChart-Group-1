import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()

export class DataviewService {
    constructor(private http: HttpClient) { }



    loadData (){
        console.log("Inside loadData");
        return this.http.get<any>("http://127.0.0.1:5000/series");
    }

  }