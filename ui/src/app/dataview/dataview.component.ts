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
    //this.data = this.dataviewService.loadData();
    this.data = { 
      "prediction":[ 
         { 
            "Predicted":349.1176779980997,
            "Expected":342.3
         },
         { 
            "Predicted":306.5129909871782,
            "Expected":339.7
         },
         { 
            "Predicted":387.3764396919057,
            "Expected":440.4
         },
         { 
            "Predicted":348.15413219824944,
            "Expected":315.9
         },
         { 
            "Predicted":386.3088674041348,
            "Expected":439.3
         },
         { 
            "Predicted":356.08208239262063,
            "Expected":401.3
         },
         { 
            "Predicted":446.37946223209974,
            "Expected":437.4
         },
         { 
            "Predicted":394.73731962650584,
            "Expected":575.5
         },
         { 
            "Predicted":434.91541312028994,
            "Expected":407.6
         },
         { 
            "Predicted":507.9234041508823,
            "Expected":682.0
         },
         { 
            "Predicted":435.48298680990547,
            "Expected":475.3
         },
         { 
            "Predicted":652.7438068583242,
            "Expected":581.3
         },
         { 
            "Predicted":546.3435438390516,
            "Expected":646.9
         }
      ],
      "MSE":"6958.322",
      "chartUrl":"chart/foo.png"
   };
  }

}
