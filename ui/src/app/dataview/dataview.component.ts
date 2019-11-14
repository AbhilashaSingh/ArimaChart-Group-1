import { Component, OnInit } from '@angular/core';
import { DataviewService } from '../dataview/dataview.service';
@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.sass']
})
export class DataviewComponent implements OnInit {
  data;
  constructor(private dataviewService : DataviewService) { }

  ngOnInit() {
    this.dataviewService.loadData().subscribe((data)=>{
      this.data = data;
    });
  }
  
}
