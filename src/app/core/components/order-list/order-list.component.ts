import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  userType!: string;
  
  constructor(private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }
  type!:string|null;

  ngOnInit() {
    this.type = this.sessionStorageService.getItem('type');
    if ((this.type == 'client' && this.userType == 'client') ||
      (this.type == 'restaurateur' && this.userType == 'restaurant')) {
    }
    else {
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }

    this.route.params.subscribe(params => {
      this.userType = params['type'];
    });
  }
}
