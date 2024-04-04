import { Component } from '@angular/core';
import { ComponentDL } from 'src/app/core/models/component.model';
@Component({
  selector: 'app-homepage-developer',
  templateUrl: './homepage-developer.component.html',
  styleUrls: ['./homepage-developer.component.css']
})
export class HomepageDeveloperComponent {

  componentTest = new ComponentDL();

  ngOnInit(){
    this.componentTest.desc="un composant super cool :]";
    this.componentTest.name="Composant Cool";
    this.componentTest.link="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
}
