import { Component } from '@angular/core';
import { salesValueModel } from 'src/app/core/models/salesValue.model';
import { SalesService } from 'src/app/core/services/sales.service';

@Component({
  selector: 'app-homepage-sales',
  templateUrl: './homepage-sales.component.html',
  styleUrls: ['./homepage-sales.component.css']
})
export class HomepageSalesComponent {

  //  TABLE variables
  valuesTables: salesValueModel[] = [];
  valuesHeader: string[] = ['Numéro commande','Restaurant','Prix','Acceptation commande','Acceptation livraison', 'Acquittement livraison'];

  arrayModelLength! :number;
  countTotalRow!: number;
  labelCountRowsOn: number = 20;
  pagesNumber!: number;
  selectChangePage: number[] = [];
  actualPageDisplay: number = 1;
  startLineDisplay: number = 0;
  endLineDisplay: number = 20;

  constructor(salesService: SalesService) {}

  ngOnInit(): void {
    this.valuesTables.push(
      { number: "1", restaurant: "Restaurant A", price: "50", acceptedOrder: true, acceptedDelivery: true, endDelivery: false },
      { number: "2", restaurant: "Restaurant B", price: "30", acceptedOrder: true, acceptedDelivery: false, endDelivery: false },
      { number: "3", restaurant: "Restaurant C", price: "70", acceptedOrder: false, acceptedDelivery: false, endDelivery: false },
      { number: "4", restaurant: "Restaurant D", price: "45", acceptedOrder: true, acceptedDelivery: true, endDelivery: true },
      { number: "5", restaurant: "Restaurant E", price: "55", acceptedOrder: true, acceptedDelivery: false, endDelivery: true }
    );
  }

  submitOrder() {
    this.valuesTables = [];
     /* this.salesService.getInfoForSales().subscribe(response => {
        this.valuesTables = response;
        this.displayRowsElements();
        //this.checkDataNotEmpty(this.ordersArrayModel$, dateStart, dateEnd);
      })*/
  }

  /**************MANAGEMENT PAGINATION TABLE**************/

  displayNextPage() {
    let amountRowsToDisplay = parseInt((<HTMLInputElement>document.getElementById("selectRows")).value);
    let selectPagination = document.getElementById("selectPagination") as HTMLInputElement;
    let valueSelectPagination = parseInt((selectPagination.value)) + 1;
    if (this.pagesNumber > valueSelectPagination) {
      selectPagination.value = valueSelectPagination.toString();
    } else { return }
    this.startLineDisplay = valueSelectPagination * amountRowsToDisplay;
    this.endLineDisplay = (valueSelectPagination + 1) * amountRowsToDisplay;
  }

  displayPreviousPage() {
    let amountRowsToDisplay = parseInt((<HTMLInputElement>document.getElementById("selectRows")).value);
    let selectPagination = document.getElementById("selectPagination") as HTMLInputElement;
    var valueSelectPagination = parseInt(selectPagination.value);
    if (valueSelectPagination > 0) {
      selectPagination.value = (valueSelectPagination - 1).toString();
    } else { return }
    this.startLineDisplay = ((valueSelectPagination - 1) * 1) * amountRowsToDisplay;
    this.endLineDisplay = (valueSelectPagination) * amountRowsToDisplay;
  }


  displayPageOnSelect() {
    let selectPagination = document.getElementById("selectPagination") as HTMLInputElement;
    let valueSelectPagination = parseInt(selectPagination.value);
    let amountRowsToDisplay = parseInt((<HTMLInputElement>document.getElementById("selectRows")).value);
    this.actualPageDisplay = valueSelectPagination + 1
    this.startLineDisplay = valueSelectPagination * amountRowsToDisplay;
    this.endLineDisplay = (valueSelectPagination + 1) * amountRowsToDisplay;
  }

  displayRowsElements() {
    this.arrayModelLength = 0;
    let selectPagination = document.getElementById("selectPagination") as HTMLInputElement;
    selectPagination.value = '0';
    let amountRowToDisplay = parseInt((<HTMLInputElement>document.getElementById("selectRows")).value);
    this.startLineDisplay = 0;
    this.endLineDisplay = amountRowToDisplay;
    this.labelCountRowsOn = amountRowToDisplay;
    this.manageDisplayFooterTable(this.valuesTables, amountRowToDisplay);
    this.arrayModelLength = this.valuesTables.length;
  }

  displayRowElement() {
    this.countTotalRow = 1;
    this.labelCountRowsOn = 1;
    this.pagesNumber = 1;
    this.selectChangePage.push(1);
  }

  manageDisplayFooterTable(array: any[], amountRowToDisplay: number) {
    this.countTotalRow = 0;
    this.pagesNumber = 0;
    this.selectChangePage = [];
    if (array !== null) {
      this.countTotalRow = array.length;
      this.pagesNumber = Math.ceil(array.length / amountRowToDisplay);
      for (let i = 1; i <= this.pagesNumber; i++) {
        this.selectChangePage.push(i);
      }
    }
    else {
      this.labelCountRowsOn = 0;
    }
  }
}
