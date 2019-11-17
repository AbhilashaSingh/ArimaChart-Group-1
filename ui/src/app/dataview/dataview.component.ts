import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.sass']
})
export class DataviewComponent implements OnInit {
  data;
  showChartImg = false;
  summaryData = [];
  private _jsonURL = 'assets/configpath.json';
  
  residual_1Path :string='';
  residual_2Path :string='';
  rollingPath :string='';

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
   
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit() {
      this.route.snapshot.data.data[0].subscribe((data)=>{
        this.data = data;
        this.route.snapshot.data.data[1].subscribe((summaryData)=>{
          this.summaryData = summaryData.response;
        })
      });

      this.getJSON().subscribe(data => {
        console.log(data);
        this.residual_1Path =data.residual_1Chart;
        this.residual_2Path =data.residual_2Chart;
        this.rollingPath =data.rollingChart;
       });
    }

  showChart(){
    this.showChartImg = !this.showChartImg;
  }

}
