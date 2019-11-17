import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.sass']
})
export class DataviewComponent implements OnInit {
  data;
  showChartImg = false;
  summaryData = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.snapshot.data.data[0].subscribe((data)=>{
        this.data = data;
        this.route.snapshot.data.data[1].subscribe((summaryData)=>{
          this.summaryData = summaryData;
        })
      });
    }

  showChart(){
    this.showChartImg = !this.showChartImg;
  }

}
