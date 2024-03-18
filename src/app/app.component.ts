import { Component } from '@angular/core';// import et telechargement de metadonnées
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',//metadonnées qui contiennent le template html + css

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Elective-web-frontend';
}

