import { Component } from '@angular/core';
import * as L from 'leaflet'; 
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.component.html',
  styleUrls: ['./delivery-map.component.css']
})
export class DeliveryMapComponent {

  private map!:any;

  private address = 'saint nazaire'; // Adresse à convertir en coordonnées

  constructor(private http: HttpClient,public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([0, 0], 2); // Initialiser la carte avec une vue globale

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    });

    tiles.addTo(this.map);

    // Convertir l'adresse en coordonnées
    this.http.get<any>(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(this.address)}`).subscribe(data => {
      if (data && data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        this.map.setView([lat, lon], 13); // Centrer la carte sur les coordonnées de l'adresse avec un zoom de 13

        const customIcon = L.icon({
          iconUrl: 'https://emassi.fr/wp-content/uploads/2017/10/Map-Marker-PNG-File.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });

        const marker = L.marker([lat, lon], { icon: customIcon }).addTo(this.map).bindPopup(this.address).openPopup();
      } else {
        console.error('Unable to find coordinates for the given address');
      }
    }, error => {
      console.error('Error fetching coordinates:', error);
    });
  }

  ShowClientInfo() {
    let dialogRef = this.dialog.open(ModalComponent, {
      data: { content: 'Numéro de téléphone : +33 6 26 45 75 89', title: 'Appeler le Client' },
      height: '186px',
      width: '659px',
    });
    
  }
}

