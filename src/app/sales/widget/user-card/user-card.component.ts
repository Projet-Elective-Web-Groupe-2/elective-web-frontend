import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { messageModel } from 'src/app/core/models/message.model';
import { userSalesModel } from 'src/app/core/models/user-sales.model';
import { ProfilService } from 'src/app/core/services/profil.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() menu!: userSalesModel;
  mail!:string;
  type!:string;
  isSuspended!:number;
  token!:any;

  constructor(private sessionStorageService: SessionStorageService,
    private router: Router,
     private route: ActivatedRoute,
     public dialog: MatDialog,
     private toastr: ToastrService,
     private profilService: ProfilService,
    ) {}

  ngOnInit(): void {
    this.token = this.sessionStorageService.getItem('token');
    this.mail = this.menu.mail;
    this.type = this.menu.type;
    this.isSuspended = this.menu.isSuspended;
  }

  activateUser(){
    let dialogRef = this.dialog.open(ModalComponent, {
      data: { content: 'Voulez-vous vraiment réactiver le profil ?', title: 'Réactiver le compte ?' },
      height: '186px',
      width: '659px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log(this.token);
        this.profilService.activateUser(this.token, this.menu.userID).subscribe((response: messageModel) => {
          if (response.message == 'User unsuspended') {
            this.toastr.success("L'utilisateur a été réactivé");
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
          else {
            this.toastr.error("Une erreur est survenue");
          }
        });
      }
    });
  }


  disableUser() {
    let dialogRef = this.dialog.open(ModalComponent, {
      data: { content: 'Voulez-vous vraiment suspendre le profil ?', title: 'Suspendre le compte ?' },
      height: '186px',
      width: '659px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log(this.token);
        this.profilService.disableUser(this.token, this.menu.userID).subscribe((response: messageModel) => {
          if (response.message == 'User suspended') {
            this.toastr.success("L'utilisateur a bien été suspendu");
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
          else {
            this.toastr.error("Une erreur est survenue");
          }
        });
      }
    });
  }

  editUser() {
    this.router.navigate([`/sales/${this.type}/profil`], { relativeTo: this.route });
  }

  deleteUser() {
    let dialogRef = this.dialog.open(ModalComponent, {
      data: { content: 'Voulez-vous vraiment confirmer la suppression du profil ?', title: 'Supprimer le compte ?' },
      height: '186px',
      width: '659px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.profilService.deleteUser(this.token, this.menu.userID).subscribe((response: messageModel) => {
          if (response.message == 'User deleted') {
            this.toastr.success("L'utilisateur a bien été supprimé");
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
          else {
            this.toastr.error("Une erreur est survenue");
          }
        });
      }
    });
  }
}
