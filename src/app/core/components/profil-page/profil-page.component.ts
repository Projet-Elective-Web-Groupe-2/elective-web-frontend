import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '../../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {
  edit: boolean = false;
  editForm!: FormGroup;
  editFormDev!: FormGroup;
  editFormRestaurant!: FormGroup;
  userType!: string;

  firstname!: string;
  name!: string;
  address!: string;
  mail!: string;
  phone!: string;
  password!: string;

  sponsoring!: string;

  isSales: boolean = false;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private router: Router) { }

  initiateEditForm() {
    console.log(this.userType);
    if (this.userType == 'client' || this.userType == 'livreur') {
      this.editForm = new FormGroup({
        firstName: new FormControl({ value: this.firstname, disabled: true }),
        name: new FormControl({ value: this.name, disabled: true }),
        address: new FormControl({ value: this.address, disabled: true }),
        mail: new FormControl({ value: this.mail, disabled: true }),
        phone: new FormControl({ value: this.phone, disabled: true }),
        password: new FormControl({ value: this.password, disabled: true }),
        confirmPassword: new FormControl({ value: '', disabled: true })
      });
    }
    else if (this.userType == 'developpeur') {
      this.editFormDev = new FormGroup({
        mail: new FormControl({ value: this.mail, disabled: true }),
        phone: new FormControl({ value: this.phone, disabled: true }),
        password: new FormControl({ value: this.password, disabled: true }),
        confirmPassword: new FormControl({ value: '', disabled: true })
      });
    }
    else if (this.userType == 'restaurant') {
      this.editFormRestaurant = new FormGroup({
        name: new FormControl({ value: this.name, disabled: true }),
        address: new FormControl({ value: this.address, disabled: true }),
        mail: new FormControl({ value: this.mail, disabled: true }),
        phone: new FormControl({ value: this.phone, disabled: true }),
        password: new FormControl({ value: this.password, disabled: true }),
        confirmPassword: new FormControl({ value: '', disabled: true })
      });
    }
    else {
      console.log("ERROR IN ROUTING");
    }
  }

  sponsorshipForm = new FormGroup({
    sponsorship: new FormControl(),
  });


  ngOnInit(): void {
    this.firstname = "Ahmed";
    this.name = "Amara";
    this.address = "211 rue de la Republique , 95239";
    this.mail = "amara.ahmed@gmail.com";
    this.phone = "+33542465791";
    this.password = "PASSWORD";
    this.sponsoring = "3BEZADGE54TEfdrR"
    this.route.params.subscribe(params => {
      this.userType = params['type'];
    });
    this.initiateEditForm();
    this.editProfil(true);
    this.verifyIfSales();
  }

  submitProfil() {
    if (this.userType == 'client' || this.userType == 'livreur') {
      console.log(this.editForm.value);
    }
    else if (this.userType == 'developpeur') {
      console.log(this.editFormDev.value);
    }
    else if (this.userType == 'restaurant') {
      console.log(this.editFormRestaurant.value);
    }
    else {
      console.log("ERROR IN ROUTING");
    }
  }

  submitSponsorship() {
    console.log(this.sponsorshipForm.value);
  }

  verifyIfSales() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('sales')) {
      this.isSales = true
    }
  }

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


  editProfil(init: boolean) {
    if (init == false) {
      this.edit = !this.edit;
      var mailInput = document.getElementById('mailInput') as HTMLInputElement;
      var phoneInput = document.getElementById('phoneInput') as HTMLInputElement;
      var passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
      var confirmPasswordInput = document.getElementById('confirmPasswordInput') as HTMLInputElement;
      mailInput.disabled = !this.edit;
      phoneInput.disabled = !this.edit;
      passwordInput.disabled = !this.edit;
      confirmPasswordInput.disabled = !this.edit;
      if (this.userType == 'client' || this.userType == 'livreur' || this.userType == 'restaurant') {
        if (this.userType == 'client' || this.userType == 'livreur') {
          var firstnameInput = document.getElementById('firstnameInput') as HTMLInputElement;
          firstnameInput.disabled = !this.edit;
        }
        var nameInput = document.getElementById('nameInput') as HTMLInputElement;
        var addressInput = document.getElementById('addressInput') as HTMLInputElement;
        nameInput.disabled = !this.edit;
        addressInput.disabled = !this.edit;
      }

      var editButton = document.getElementById('edit-button') as HTMLButtonElement;
      editButton.disabled = this.edit;
    }
  }

  deleteProfil() {
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
