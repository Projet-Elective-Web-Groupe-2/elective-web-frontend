import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() type: string = '';
  
  clickOnButton(){
    console.log("CLICK ON THE BUTTON")
  }
  

}
