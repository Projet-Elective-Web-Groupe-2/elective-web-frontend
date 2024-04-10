import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from '../core/services/session-storage.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  constructor(private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }
  type!:string|null;

  ngOnInit() {
    // this.type = this.sessionStorageService.getItem('type');
    // if(this.type != 'restaurant'){
    //   this.router.navigate([`/error-page`], { relativeTo: this.route });
    // }
    // else{
    //   this.type = "restaurant";
    // }
  }

}
