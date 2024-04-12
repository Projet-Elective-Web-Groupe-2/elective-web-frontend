import { Component, SimpleChanges, Input, OnChanges, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { Chart, registerables } from 'node_modules/chart.js';
import { forkJoin, of, tap } from 'rxjs';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
Chart.register(...registerables);

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {
  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private toastr: ToastrService
  ) { }
  type!: string | null;
  token!: any;
  restaurantID!: any;

  ngOnInit() {
    this.restaurantID = this.sessionStorageService.getItem('restaurantID');
    this.token = this.sessionStorageService.getItem('token');
    this.type = this.sessionStorageService.getItem('type');
    if (this.type != 'restaurant') {
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }
    else {
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

  changeDate(dateValue: number) {
    this.myChart.destroy();
    this.dateValueSelected = dateValue;
    this.fetchData();
  }

  fetchData() {
    this.restaurantService.getOrdersNumbers(this.token, this.restaurantID, this.dateValueSelected).subscribe({
      next: (response: HttpResponse<any>) => {
        //this.orderTable = datas;
        //this.labelsChart.push(...datas.map((data) => data.dateCom));
      },
      error: () => {
        this.toastr.error("Erreur lors de la recupération des commandes ");
      }
    });

    this.orderTable = [11, 21, 58, 14, 41, 10, 2];
    if (this.dateValueSelected == 7) {
      this.labelsChart = [
        "2024-04-06T00:00:00.000Z",
        "2024-04-07T00:00:00.000Z",
        "2024-04-08T00:00:00.000Z",
        "2024-04-09T00:00:00.000Z",
        "2024-04-10T00:00:00.000Z",
        "2024-04-11T00:00:00.000Z",
        "2024-04-12T00:00:00.000Z"
      ];
    }
    else if (this.dateValueSelected == 14) {
      this.labelsChart = [
        "2024-03-30T00:00:00.000Z",
        "2024-03-31T00:00:00.000Z",
        "2024-04-01T00:00:00.000Z",
        "2024-04-02T00:00:00.000Z",
        "2024-04-03T00:00:00.000Z",
        "2024-04-04T00:00:00.000Z",
        "2024-04-05T00:00:00.000Z",
        "2024-04-06T00:00:00.000Z",
        "2024-04-07T00:00:00.000Z",
        "2024-04-08T00:00:00.000Z",
        "2024-04-09T00:00:00.000Z",
        "2024-04-10T00:00:00.000Z",
        "2024-04-11T00:00:00.000Z",
        "2024-04-12T00:00:00.000Z"
      ];
    }
    else {
      this.labelsChart = [
        "2024-03-13T00:00:00.000Z",
        "2024-03-14T00:00:00.000Z",
        "2024-03-15T00:00:00.000Z",
        "2024-03-16T00:00:00.000Z",
        "2024-03-17T00:00:00.000Z",
        "2024-03-18T00:00:00.000Z",
        "2024-03-19T00:00:00.000Z",
        "2024-03-20T00:00:00.000Z",
        "2024-03-21T00:00:00.000Z",
        "2024-03-22T00:00:00.000Z",
        "2024-03-23T00:00:00.000Z",
        "2024-03-24T00:00:00.000Z",
        "2024-03-25T00:00:00.000Z",
        "2024-03-26T00:00:00.000Z",
        "2024-03-27T00:00:00.000Z",
        "2024-03-28T00:00:00.000Z",
        "2024-03-29T00:00:00.000Z",
        "2024-03-30T00:00:00.000Z",
        "2024-03-31T00:00:00.000Z",
        "2024-04-01T00:00:00.000Z",
        "2024-04-02T00:00:00.000Z",
        "2024-04-03T00:00:00.000Z",
        "2024-04-04T00:00:00.000Z",
        "2024-04-05T00:00:00.000Z",
        "2024-04-06T00:00:00.000Z",
        "2024-04-07T00:00:00.000Z",
        "2024-04-08T00:00:00.000Z",
        "2024-04-09T00:00:00.000Z",
        "2024-04-10T00:00:00.000Z",
        "2024-04-11T00:00:00.000Z",
        "2024-04-12T00:00:00.000Z"];
    }
    //this.orderTable = this.addMissingPoint(this.orderTable, 'order');
    this.labelsChart = this.allDates(this.labelsChart);
    this.labelsChart = this.convertDateToFormat(this.labelsChart);
    this.updateChart(this.orderTable);
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