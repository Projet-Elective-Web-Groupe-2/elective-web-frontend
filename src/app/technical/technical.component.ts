import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../core/services/logs.service';
import { SessionStorageService } from '../core/services/session-storage.service';
import { HttpResponse } from '@angular/common/http';
import { LogModel } from '../core/models/log.model';
import { ComponentService } from '../core/services/component.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent {

  logs:string[]=[];
  token!:any;
  log!:any;
  constructor(private toastr:ToastrService,private router: Router,private logservice: LogService,private sessionStorage : SessionStorageService,private composantService: ComponentService) { }

  ngOnInit() {
    this.token = this.sessionStorage.getItem("token");

    this.getLog();
  }

  getLog() {
    this.log = this.logservice.getLog(this.token).subscribe((response: LogModel) => {
      this.logs = response.logs;
    }, (error) => {
      this.toastr.error("Erreur lors de la récupération des logs : " + error);
    });
    this.log = this.composantService.getLogComponent(this.token).subscribe((response: LogModel) => {
      this.logs= response.logs;
    });
    //console.log(this.log);
  }

  onClick() {
    console.log("test click");
    window.location.href = "http://localhost:8080";
  }
}
