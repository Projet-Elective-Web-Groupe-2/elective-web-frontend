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
    
    setTimeout(() => {
      this.router.navigate(['/auth']); 
    }, 5000);
  }
}
