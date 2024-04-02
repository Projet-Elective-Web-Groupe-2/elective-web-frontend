import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() restaurant!:Restaurant;
  @Input() menu!:Menu;
  @Input() isResto!:boolean;

  quantity !: number;

  decrease = document.querySelector('.decrease');
  increase = document.querySelector('.increase');
  text = document.querySelector('.text-quantity');
  num=0;
  
  
  onChangePlus(){
    console.log('+')
    this.num +=1;
    this.text!.innerHTML=this.num.toString();
  }
  
  onChangeMinus(){
    console.log('-')
    this.num -=1;
    this.text!.innerHTML=this.num.toString();
  }
}
