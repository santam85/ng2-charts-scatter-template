import { Component } from '@angular/core';
import { ChartConfiguration, ScatterDataPoint } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'ng2-charts-demo';

  public scatterChartDatasets: ChartConfiguration<'scatter'>['data']['datasets'] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3},
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];

  public scatterChartOptions: ChartConfiguration<'scatter'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

}
