import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from '../core/services/session-storage.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  constructor(private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }
  type!:string|null;

  ngOnInit() {
    this.type = this.sessionStorageService.getItem('type');
    if(this.type != 'developpeur'){
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }
  }
  
}
