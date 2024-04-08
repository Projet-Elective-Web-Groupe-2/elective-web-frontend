import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() type: string|null = '';
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  
  clickOnButton(){
    switch(this.type){
      case 'client':
        this.router.navigate([`/${this.type}/panier`], { relativeTo: this.route });
        break;
      case 'restaurant':
        this.router.navigate([`/${this.type}/order-list`], { relativeTo: this.route });
        break;
      case 'livreur':
        this.router.navigate([`/${this.type}/order-list`], { relativeTo: this.route });
        break;
      case 'developpeur':
        this.router.navigate([`/${this.type}`], { relativeTo: this.route });
        break;
      case 'sales':
        this.router.navigate([`/${this.type}/users-info`], { relativeTo: this.route });
        break;                    
    }
  }
  

}
