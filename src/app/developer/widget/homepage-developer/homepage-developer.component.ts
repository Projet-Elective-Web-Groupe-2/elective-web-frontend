import { Component } from '@angular/core';
import { ComponentDL } from 'src/app/core/models/component.model';
@Component({
  selector: 'app-homepage-developer',
  templateUrl: './homepage-developer.component.html',
  styleUrls: ['./homepage-developer.component.css']
})
export class HomepageDeveloperComponent {

  components: ComponentDL[] = [];
  urls: string[] = [
    "https://github.com/Projet-Elective-Web-Groupe-2/elective-web-frontend/blob/ee5d8717b8ca474a99683f388342305664e6c00a/src/app/technical",
    "https://github.com/Projet-Elective-Web-Groupe-2/elective-web-frontend/blob/ee5d8717b8ca474a99683f388342305664e6c00a/src/app/signup",
    "https://github.com/Projet-Elective-Web-Groupe-2/elective-web-frontend/blob/ee5d8717b8ca474a99683f388342305664e6c00a/src/app/restaurant",
    "https://github.com/Projet-Elective-Web-Groupe-2/elective-web-frontend/blob/65769fe3b53e789d3a028f5fcf3a729ce13416b9/src/app/developer",
    "https://github.com/Projet-Elective-Web-Groupe-2/elective-web-frontend/blob/ee5d8717b8ca474a99683f388342305664e6c00a/src/app/delivery",
    "https://github.com/Projet-Elective-Web-Groupe-2/elective-web-frontend/blob/ee5d8717b8ca474a99683f388342305664e6c00a/src/app/core",
    "https://github.com/Projet-Elective-Web-Groupe-2/elective-web-frontend/blob/ee5d8717b8ca474a99683f388342305664e6c00a/src/app/client",
    "https://github.com/Projet-Elective-Web-Groupe-2/elective-web-frontend/blob/ee5d8717b8ca474a99683f388342305664e6c00a/src/app/auth",
  ];

  ngOnInit() {
    for (let url of this.urls) {
      let component = new ComponentDL();
      component.desc = "Le composant de " + this.capitalizeFirstLetter(this.getComponentName(url));
      component.name = this.capitalizeFirstLetter(this.getComponentName(url));
      component.link = url;
      this.components.push(component);
    }
  }

  getComponentName(url: string): string {
    // Extraire le nom du composant à partir de l'URL
    let parts = url.split('/');
    return parts[parts.length - 1];
  }

  capitalizeFirstLetter(word: string): string {
    // Mettre en majuscule la première lettre du mot
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
