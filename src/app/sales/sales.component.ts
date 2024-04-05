import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from '../core/services/session-storage.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  constructor(private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }
  type!:string|null;

  ngOnInit() {
    this.type = this.sessionStorageService.getItem('type');
    if(this.type != 'commercial'){
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }
  }
}
