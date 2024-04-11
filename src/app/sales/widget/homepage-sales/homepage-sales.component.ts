import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { salesValueModel } from 'src/app/core/models/salesValue.model';
import { SalesService } from 'src/app/core/services/sales.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-homepage-sales',
  templateUrl: './homepage-sales.component.html',
  styleUrls: ['./homepage-sales.component.css']
})
export class HomepageSalesComponent {
  
  //  TABLE variables 
  valuesTables: salesValueModel[] = [];

  valuesHeader: string[] = ['ID du Client','Prix total','Status'];

  arrayModelLength!: number;
  countTotalRow!: number;
  labelCountRowsOn: number = 20;
  pagesNumber!: number;
  selectChangePage: number[] = [];
  actualPageDisplay: number = 1;
  startLineDisplay: number = 0;
  endLineDisplay: number = 20;

  constructor(private sessionStorageService: SessionStorageService, private salesService: SalesService) { }

  ngOnInit(): void {
    let token = this.sessionStorageService.getItem('token');
    this.salesService.getAllOrders(token).subscribe((response: any) => {
      if (response && response.orders) {
        this.valuesTables = response.orders;
      }
    });
  }
}
