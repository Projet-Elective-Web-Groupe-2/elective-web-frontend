import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from '../core/services/session-storage.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  constructor(private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }
  type!:string|null;

  ngOnInit() {
    // this.type = this.sessionStorageService.getItem('type');
    // if(this.type != 'livreur'){
    //   this.router.navigate([`/error-page`], { relativeTo: this.route });
    // }
  }

}
