import { DataviewService } from './dataview.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class DataviewResolver implements Resolve<any> {
  constructor(private service: DataviewService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return [this.service.loadData(), this.service.loadSummaryData()];
  }
}