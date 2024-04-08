import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Redirection vers une autre page après un délai de 5 secondes
    setTimeout(() => {
      this.router.navigate(['/home']); // Remplacez '/home' par la route de votre choix
    }, 5000);
  }
}
