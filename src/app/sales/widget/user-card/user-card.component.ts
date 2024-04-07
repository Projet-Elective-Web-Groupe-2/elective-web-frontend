import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/core/modal/modal.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() mail!: string;
  @Input() type!: string;

  constructor(private router: Router, private route: ActivatedRoute,public dialog: MatDialog) {}


  disableUser() {
    let dialogRef = this.dialog.open(ModalComponent, {
      data: { content: 'Voulez-vous vraiment suspendre le profil ?', title: 'Suspendre le compte ?' },
      height: '186px',
      width: '659px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('Le profil sera désactiver.');
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
        console.log('Le profil sera supprimé.');
      }
    });
  }
}
