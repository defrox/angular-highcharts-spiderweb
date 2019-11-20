import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  stock: Chart;

  ngOnInit() {
    this.stock = new Chart({
        chart: {
            polar: true,
            type: 'line',
            backgroundColor: 'transparent',
            zoomType: 'xy',
            zoomKey: 'z',

            scrollablePlotArea: {
              minHeight: 768,
              minWidth: 768
            }
        },
        title: {
            text: 'Title',
            align: 'center',
            textOverflow: 'ellipsis',
        },
        pane: {
            size: '90%'
        },
        xAxis: {
          labels: {
            reserveSpace: true,
            /*align: 'center',*/
                style: {
                    fontSize:'14px'
                }
            },
            categories: ['Cat1 texto largo largo largisimo y mas alla', 'Cat2 texto largo largo largisimo y mas alla', 'Cat3 texto largo largo largisimo y mas alla', 'Cat4 texto largo largo largisimo y mas alla', 'Cat5 texto largo largo largisimo y mas alla', 'Cat6 texto largo largo largisimo y mas alla', 'Cat7 texto largo largo largisimo y mas alla', 'Cat8 texto largo largo largisimo y mas alla', 'Cat9 texto largo largo largisimo y mas alla', 'Cat10 texto largo largo largisimo y mas alla'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            tickInterval: 50,
            minorTickInterval: 25,
            lineWidth: 0,
            min: 0,
            max: 100
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: 'Serie',
                color: '#88a682',
                type: 'area',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                pointPlacement: 'on'
            }
        ],
        responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      align: 'center',
                      verticalAlign: 'bottom'
                  },
                  pane: {
                      size: '70%'
                  }
              }
          }]
        }
    });
  }
}
