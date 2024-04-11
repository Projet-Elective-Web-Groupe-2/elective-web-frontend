import { Component } from '@angular/core';
import { ComponentDL } from 'src/app/core/models/component.model';
import { Input } from '@angular/core';
import { ComponentService } from 'src/app/core/services/component.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-card-developer',
  templateUrl: './card-developer.component.html',
  styleUrls: ['./card-developer.component.css']
})
export class CardDeveloperComponent {
  token!:any;
  constructor(private componentService:ComponentService,private sessionStorage : SessionStorageService){}

  @Input() componentDL!:ComponentDL;

  ngOnInit(){
    this.token = this.sessionStorage.getItem("token");
  }

  onClick(name:any){
    this.componentService.writeLogComponent(this.token,name).subscribe((response: any) => {
      
    });
  }
}
