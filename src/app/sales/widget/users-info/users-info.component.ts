import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { userSalesModel } from 'src/app/core/models/user-sales.model';
import { Users } from 'src/app/core/models/users.model';
import { SalesService } from 'src/app/core/services/sales.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent {
  usersList: userSalesModel[] = [];

  constructor(private sessionStorageService: SessionStorageService, private salesService: SalesService) { };


  ngOnInit(): void {
    let token = this.sessionStorageService.getItem('token');
    this.salesService.getUsers(token).subscribe((response: Users) => {
      console.log(response);
      for (let i = 0; i < response.allUsers.length; i++) {

        let mail = response.allUsers[i].email;
        let type = response.allUsers[i].userType;
        let userID = response.allUsers[i].userID;
        let isSuspended = response.allUsers[i].isSuspended
        this.usersList.push(
          { mail: mail, type: type,userID:userID,isSuspended:isSuspended},
        );
      }
    });
  }
}
