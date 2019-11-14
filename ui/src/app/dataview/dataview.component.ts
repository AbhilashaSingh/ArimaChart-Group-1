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
      this.data = this.route.snapshot.data.data;
      this.summaryData = ['                             ARIMA Model Results                              \n', '==============================================================================\n', 'Dep. Variable:                D.Sales   No. Observations:                   35\n', 'Model:                 ARIMA(5, 1, 0)   Log Likelihood                -196.170\n', 'Method:                       css-mle   S.D. of innovations             64.241\n', 'Date:                Thu, 14 Nov 2019   AIC                            406.340\n', 'Time:                        00:19:12   BIC                            417.227\n', 'Sample:                    02-01-1901   HQIC                           410.098\n', '                         - 12-01-1903                                         \n', '=================================================================================\n', '                    coef    std err          z      P>|z|      [0.025      0.975]\n', '---------------------------------------------------------------------------------\n', 'const            12.0649      3.652      3.304      0.003       4.908      19.222\n', 'ar.L1.D.Sales    -1.1082      0.183     -6.063      0.000      -1.466      -0.750\n', 'ar.L2.D.Sales    -0.6203      0.282     -2.203      0.036      -1.172      -0.068\n', 'ar.L3.D.Sales    -0.3606      0.295     -1.222      0.231      -0.939       0.218\n', 'ar.L4.D.Sales    -0.1252      0.280     -0.447      0.658      -0.674       0.424\n', 'ar.L5.D.Sales     0.1289      0.191      0.673      0.506      -0.246       0.504\n', '                                    Roots                                    \n', '=============================================================================\n', '                  Real          Imaginary           Modulus         Frequency\n', '-----------------------------------------------------------------------------\n', 'AR.1           -1.0617           -0.5064j            1.1763           -0.4292\n', 'AR.2           -1.0617           +0.5064j            1.1763            0.4292\n', 'AR.3            0.0816           -1.3804j            1.3828           -0.2406\n', 'AR.4            0.0816           +1.3804j            1.3828            0.2406\n', 'AR.5            2.9315           -0.0000j            2.9315           -0.0000\n', '-----------------------------------------------------------------------------\n'];
  }

  showChart(){
  }

}
