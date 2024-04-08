import { Component } from '@angular/core';
import { userSalesModel } from 'src/app/core/models/user-sales.model';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent {
  usersList:userSalesModel[] = [];

  ngOnInit(): void {
    this.usersList.push(
      { mail: "amara.ahmed@gmail.com", type: "client"},
      { mail: "amara2.ahmed@gmail.com", type: "restaurant"},
      { mail: "amara3.ahmed@gmail.com", type: "livreur"},
      { mail: "amara4.ahmed@gmail.com", type: "Développeur Tiers"},
      { mail: "amara5.ahmed@gmail.com", type: "client"},
    );
  }
}
