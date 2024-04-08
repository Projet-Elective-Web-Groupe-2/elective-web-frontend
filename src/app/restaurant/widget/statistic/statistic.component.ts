import { Component, SimpleChanges, Input, OnChanges, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { Chart, registerables } from 'node_modules/chart.js';
import { forkJoin, of, tap } from 'rxjs';
Chart.register(...registerables);

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {
  constructor(private sessionStorageService: SessionStorageService, private router: Router, private route: ActivatedRoute) { }
  type!: string | null;

  ngOnInit() {
    this.type = this.sessionStorageService.getItem('type');
    if (this.type != 'restaurateur') {
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }
    else {
      this.type = "restaurant";
      this.fetchData();
    }
  }

  dateValueSelected: number = 7;
  orderTable: Array<number> = []
  labelsChart: Array<string> = []

  myChart!: Chart<"bar", any, unknown>

  allDates(table: Array<any>): Array<any> {
    const uniqueDates = [...new Set(table)];
    return uniqueDates.sort((a, b) => Date.parse(a) - Date.parse(b));
  }


  convertDateToFormat(table: Array<any>): Array<string> {
    return table.map(data => {
      const date = new Date(data);
      return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
    });
  }

  changeDate(dateValue:number){
    this.myChart.destroy();
    this.dateValueSelected = dateValue;
    this.fetchData();
  }

  fetchData() {
    /* const order$ = this.orderService.getOrderQuantity(this.dataValueSelected).pipe(
       tap((datas) => {
         this.orderTable = datas;
         this.labelsChart.push(...datas.map((data) => data.dateCom));
       })
     );*/
    this.orderTable = [11, 21, 58, 14, 41, 10,2];
    //forkJoin({ order$ }).subscribe(() => {
      this.labelsChart = [
        "2024-04-01T00:00:00.000Z",
        "2024-04-02T00:00:00.000Z",
        "2024-04-03T00:00:00.000Z",
        "2024-04-04T00:00:00.000Z",
        "2024-04-05T00:00:00.000Z",
        "2024-04-06T00:00:00.000Z",
        "2024-04-07T00:00:00.000Z"
      ];
      //this.orderTable = this.addMissingPoint(this.orderTable, 'order');
      this.labelsChart = this.allDates(this.labelsChart);
      this.labelsChart = this.convertDateToFormat(this.labelsChart);
      this.updateChart(this.orderTable);
    //});
  }

  updateChart(orderTable: Array<any>) {
    this.myChart = new Chart("lineChart", {
      type: 'bar',
      data: {
        labels: this.labelsChart,
        datasets: [
          {
            label: "Commandes",
            data: orderTable,
            borderColor: 'rgb(70, 166, 16)',
            backgroundColor: 'rgb(70, 166, 16)',
          }
        ]
      },
      options: {
        aspectRatio: 3.2,
        plugins: {
          legend: {
            display: true,
            align: 'start',
            position: 'bottom',
            labels: {
              pointStyle: 'rect',
              usePointStyle: true,
            },
          },
        },
      }
    })
  }

}