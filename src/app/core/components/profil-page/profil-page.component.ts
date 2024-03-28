import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {
  userType!: string;
  name!:string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = "Amara Ahmed"
    this.route.params.subscribe(params => {
      this.userType = params['type'];
    });
  }
}
