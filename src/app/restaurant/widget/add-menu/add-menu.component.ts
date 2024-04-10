import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuArticle } from 'src/app/core/models/menuArticle.model';
import { MessageModel } from 'src/app/core/models/message.model';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  token!: any;
  userID!: any;
  articleList: string[] = [];
  articlesInfoList: MenuArticle[] = [];

  selectedImage: string | ArrayBuffer | null | undefined;
  type!: string | null;

  constructor(private formBuilder: FormBuilder,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private restaurantService: RestaurantService,
    private toastr: ToastrService
  ) { }

  menusForm = this.formBuilder.group({
    name: new FormControl(),
    compo: new FormControl(),
    price: new FormControl('0'),
    drink: new FormControl(false),
    photo: new FormControl(''),
  });
  
  ngOnInit(): void {
    this.userID = this.sessionStorageService.getItem('restaurantID');
    this.token = this.sessionStorageService.getItem('token');
    this.articlesInfoList = JSON.parse(this.sessionStorageService.getItem('articleList'));
    for (let i = 0; i < this.articlesInfoList.length; i++) {
      this.articleList.push(this.articlesInfoList[i].name);
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  getIdFromArticle() {
    let idList:string[] = [];
    for (let i = 0; i < this.articleList.length; i++) {
      if (this.articleList.includes(this.menusForm.value.compo[i])) {
        const index = this.articleList.indexOf(this.menusForm.value.compo[i]);
        idList.push(this.articlesInfoList[index]._id);
      }
    }
    return idList;
  }



  submitMenu() {
    let idList = this.getIdFromArticle();
    this.restaurantService.createMenu(this.token, this.userID, this.menusForm.value,idList).subscribe((response: MessageModel) => {
      if (response.message == "Menu added successfully") {
        this.toastr.success("L'article a été ajouté avec succès");
        setTimeout(() => {
          this.router.navigate(['/restaurant']);
        }, 2000);
      }
      else {
        this.toastr.error("Erreur lors de la création de l'article");
      }
    })
  }
}
