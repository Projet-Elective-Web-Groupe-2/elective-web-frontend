import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '../../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { SessionStorageService } from '../../services/session-storage.service';
import { ProfilService } from '../../services/profil.service';
import { UserInfo } from '../../models/userInfo.model';
import { HttpResponse } from '@angular/common/http';
import { messageModel } from '../../models/message.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {
  token: any;
  userID: any;
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
  confirmPassword!: string;

  sponsoring!: string;

  isSales: boolean = false;

  constructor(
    private profilService: ProfilService,
    private sessionStorageService: SessionStorageService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService
  ) { }

  initiateEditForm() {
    if (this.userType == 'client' || this.userType == 'delivery') {
      this.editForm = new FormGroup({
        firstName: new FormControl({ value: '', disabled: true }),
        name: new FormControl({ value: '', disabled: true }),
        address: new FormControl({ value: '', disabled: true }),
        mail: new FormControl({ value: '', disabled: true }),
        phone: new FormControl({ value: '', disabled: true }),
        password: new FormControl({ value: '', disabled: true }),
        confirmPassword: new FormControl({ value: '', disabled: true })
      });
    }
    else if (this.userType == 'developer') {
      this.editFormDev = new FormGroup({
        mail: new FormControl({ value: '', disabled: true }),
        phone: new FormControl({ value: '', disabled: true }),
        password: new FormControl({ value: '', disabled: true }),
        confirmPassword: new FormControl({ value: '', disabled: true })
      });
    }
    else if (this.userType == 'restaurant') {
      this.editFormRestaurant = new FormGroup({
        name: new FormControl({ value: '', disabled: true }),
        address: new FormControl({ value: '', disabled: true }),
        mail: new FormControl({ value: '', disabled: true }),
        phone: new FormControl({ value: '', disabled: true }),
        password: new FormControl({ value: '', disabled: true }),
        confirmPassword: new FormControl({ value: '', disabled: true })
      });
    }
    else {
      this.toastr.error('ERROR IN ROUTING');
    }
  }

  sponsorshipForm = new FormGroup({
    sponsorship: new FormControl(),
  });

  ngOnInit(): void {
    this.token = this.sessionStorageService.getItem('token');
    this.userID = this.sessionStorageService.getItem('userID');


    this.profilService.getUserInfo(this.token).subscribe((response: UserInfo) => {
      this.firstname = response.user.firstName;
      this.name = response.user.lastName;
      this.address = response.user.address;
      this.mail = response.user.email;
      this.phone = response.user.phoneNumber;
      this.sponsoring = response.user.referralCode;

      if (this.userType == 'client' || this.userType == 'delivery') {
        this.editForm.patchValue({
          firstName: this.firstname,
          name: this.name,
          address: this.address,
          mail: this.mail,
          phone: this.phone
        });
      }
      else if (this.userType == 'developer') {
        this.editFormDev.patchValue({
          mail: this.mail,
          phone: this.phone
        });
      }
      else if (this.userType == 'restaurant') {
        this.editFormRestaurant.patchValue({
          name: this.name,
          address:this.address,
          mail: this.mail,
          phone: this.phone
        });
      }
      else {
        this.toastr.error('ERROR IN ROUTING');
      }
    });


    this.route.params.subscribe(params => {
      this.userType = params['type'];
    });


    this.initiateEditForm();
    this.editProfil(true);
    this.verifyIfSales();
  }

  submitProfil() {
    if (this.userType == 'client' || this.userType == 'delivery') {
      let editFormValue = this.editForm.value;
      if (editFormValue.password != '' && editFormValue.confirmPassword != '' && editFormValue.password == editFormValue.confirmPassword) {
        this.profilService.editUser(this.token, this.userID, editFormValue).subscribe((response: messageModel) => {
          if (response.message == 'User edited') {
            this.toastr.success("L'utilisateur a bien été édité");
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
          else {
            this.toastr.error('Une erreur est survenue');
          }
        })
      }
      else {
        this.toastr.error('Mots de passe incorrect');
      }
    }
    else if (this.userType == 'developer') {
      let editFormValue = this.editFormDev.value;
      if (editFormValue.password != '' && editFormValue.confirmPassword != '' && editFormValue.password == editFormValue.confirmPassword) {
        this.profilService.editUser(this.token, this.userID, editFormValue).subscribe((response: messageModel) => {
          if (response.message == 'User edited') {
            this.toastr.success("L'utilisateur a bien été édité");
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
          else {
            this.toastr.error('Une erreur est survenue');
          }
        })
      }
      else {
        this.toastr.error('Mots de passe incorrect');
      }
    }
    else if (this.userType == 'restaurant') {
      let editFormValue = this.editFormRestaurant.value;
      if (editFormValue.password != '' && editFormValue.confirmPassword != '' && editFormValue.password == editFormValue.confirmPassword) {
        this.profilService.editUser(this.token, this.userID, editFormValue).subscribe((response: messageModel) => {
          if (response.message == 'User edited') {
            this.toastr.success("L'utilisateur a bien été édité");
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
          else {
            this.toastr.error('Une erreur est survenue');
          }
        })
      }
      else {
        this.toastr.error('Mots de passe incorrect');
      }
    }
    else {
      this.toastr.error('ERREUR : Vous n\'etes pas reconnu par notre système');
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
      if (this.userType == 'client' || this.userType == 'delivery' || this.userType == 'restaurant') {
        if (this.userType == 'client' || this.userType == 'delivery') {
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
        this.profilService.deleteUser(this.token, this.userID).subscribe((response: messageModel) => {
          if (response.message == 'User deleted') {
            this.toastr.success("L'utilisateur a bien été supprimé");
            setTimeout(() => {
              this.router.navigate(['/auth']);
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
