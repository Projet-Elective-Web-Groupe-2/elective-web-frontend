import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/core/models/menu.model';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent {
  articleList:string[] = [];
  selectedImage: string | ArrayBuffer | null | undefined;
  type!:string|null;

  description!:string;
  img!:string;
  drink!:string;
  price!:string;
  name!:string;

  constructor(private formBuilder: FormBuilder,private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }

  
  menusForm = this.formBuilder.group({
    name: new FormControl(),
    compo: new FormControl(),
    price: new FormControl(),
    drink: new FormControl(),
    photo: new FormControl(),
  });

  ngOnInit(): void {

    this.description=this.sessionStorageService.getItem("description");
    this.img=this.sessionStorageService.getItem("img");
    this.drink=this.sessionStorageService.getItem("drink");
    this.price=this.sessionStorageService.getItem("price");
    this.name=this.sessionStorageService.getItem("name");
    
    this.price = this.price.substring(0, this.price.length - 1);
    
    this.sessionStorageService.removeItem("description");
    this.sessionStorageService.removeItem("img");
    this.sessionStorageService.removeItem("drink");
    this.sessionStorageService.removeItem("price");
    this.sessionStorageService.removeItem("name");

    this.articleList.push('Big Muc');
    this.articleList.push('Sushi');
    this.articleList.push('Bucket');
    this.articleList.push('Whooper');
    this.articleList.push('Kebab');

    this.initForm();
  }

  initForm(){
    this.menusForm = this.formBuilder.group({
      name: new FormControl(this.name),
      compo: new FormControl(this.description),
      price: new FormControl(Number(this.price)),
      drink: new FormControl(this.drink),
      photo: new FormControl(this.img),
    });
    this.selectedImage=this.img;
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

  

  submitMenu(){
  }
}
