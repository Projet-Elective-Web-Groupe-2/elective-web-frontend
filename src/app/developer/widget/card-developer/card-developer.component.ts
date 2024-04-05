import { Component } from '@angular/core';
import { ComponentDL } from 'src/app/core/models/component.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-developer',
  templateUrl: './card-developer.component.html',
  styleUrls: ['./card-developer.component.css']
})
export class CardDeveloperComponent {

  @Input() componentDL!:ComponentDL;
}
