import { Component, HostListener, OnInit } from '@angular/core';
import { SessionStorageService } from '../core/services/session-storage.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  constructor(private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }
  type!:string|null;

  ngOnInit() {
    this.type = this.sessionStorageService.getItem('type');
    if(this.type != 'client'){
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }
  }
}
