import { Component } from '@angular/core';
import * as L from 'leaflet'; 
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { DeliveryService } from 'src/app/core/services/delivery.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModel } from 'src/app/core/models/message.model';

@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.component.html',
  styleUrls: ['./delivery-map.component.css']
})
export class DeliveryMapComponent {

  private map!:any;

  private address!:string; 
  private orderID!:string|null;

  constructor(private toastr: ToastrService, 
  private sessionStorageService: SessionStorageService,
   private deliveryService: DeliveryService,
   private http: HttpClient,
   public dialog: MatDialog,
   private route: ActivatedRoute,
   private router: Router,
  ) { }

  ngAfterViewInit(): void {
    this.address = this.sessionStorageService.getItem("deliveryAddress");
    console.log(this.address);
    this.route.paramMap.subscribe(params => {
      this.orderID = params.get('id');
    });
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

  ValidateOrder(){
    let token = this.sessionStorageService.getItem('token');
    let dialogRef = this.dialog.open(ModalComponent, {
      data: { content: 'Confirmes-tu la livraison ?', title: 'Confirmation livraison' },
      height: '186px',
      width: '659px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deliveryService.validateDelivery(token,this.orderID).subscribe({
          next: (response: MessageModel) => {
            if(response.message == "Delivery has been validated"){
              this.toastr.success("Commande délivré");
              this.router.navigate([`/delivery`], { relativeTo: this.route });
            }
            else{
              this.toastr.error("Erreur lors de la livraison");
            }
          },
          error: () => {
            this.toastr.error("Erreur lors de la récupération des commandes");
          }
        });
      }
    });
  }

  ShowClientInfo() {
    let dialogRef = this.dialog.open(ModalComponent, {
      data: { content: 'Numéro de téléphone : +33 6 26 45 75 89', title: 'Appeler le Client',delivery:true },
      height: '186px',
      width: '659px',
    });
  }
}

