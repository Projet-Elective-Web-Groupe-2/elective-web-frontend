import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  userType!: string;

  firstname!: string;
  name!: string;
  address!: string;
  mail!: string;
  phone!: string;
  password!: string;

  sponsoring!: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  initiateEditForm() {
    this.editForm = new FormGroup({
      firstName: new FormControl({value:this.firstname,disabled:true}),
      name: new FormControl({value:this.name,disabled:true}),
      address: new FormControl({value:this.address,disabled:true}),
      mail: new FormControl({value:this.mail,disabled:true}),
      phone: new FormControl({value:this.phone,disabled:true}),
      password: new FormControl({value:this.password,disabled:true}),
      confirmPassword: new FormControl({value:'',disabled:true})
    });
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
  }

  submitProfil() {
    console.log(this.editForm.value);
  }

  submitSponsorship() {
    console.log(this.sponsorshipForm.value);
  }


  editProfil(init: boolean) {
    if (init == false) {
      this.edit = !this.edit;
      var nameInput = document.getElementById('nameInput') as HTMLInputElement;
      var firstnameInput = document.getElementById('firstnameInput') as HTMLInputElement;
      var addressInput = document.getElementById('addressInput') as HTMLInputElement;
      var mailInput = document.getElementById('mailInput') as HTMLInputElement;
      var phoneInput = document.getElementById('phoneInput') as HTMLInputElement;
      var passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
      var confirmPasswordInput = document.getElementById('confirmPasswordInput') as HTMLInputElement;
      nameInput.disabled = !this.edit;
      firstnameInput.disabled = !this.edit;
      addressInput.disabled = !this.edit;
      mailInput.disabled = !this.edit;
      phoneInput.disabled = !this.edit;
      passwordInput.disabled = !this.edit;
      confirmPasswordInput.disabled = !this.edit;

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
