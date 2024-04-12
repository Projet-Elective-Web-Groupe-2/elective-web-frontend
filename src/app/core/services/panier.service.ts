import { Injectable } from '@angular/core';
import { PanierModel } from '../models/panier-create.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: PanierModel[] = [];

  constructor() { }

  addPanier(item: PanierModel) {
    this.panier.push(item);
  }

  deleteItem(index: number) {
    this.panier.splice(index, 1);
  }

  resetPanier() {
    this.panier = [];
  }

  getPanier() {
    return this.panier;
  }
}
