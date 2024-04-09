import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
  selectedImage: string | ArrayBuffer | null | undefined;
  type!:string|null;

  description!:string;
  img!:string;
  price!:string;
  name!:string;

  constructor(private formBuilder: FormBuilder,private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }

  articleForm = this.formBuilder.group({
    name: new FormControl(),
    compo: new FormControl(),
    price: new FormControl(),
    photo: new FormControl(),
  });

  ngOnInit(): void {
    this.description=this.sessionStorageService.getItem("description");
    this.img=this.sessionStorageService.getItem("img");
    this.price=this.sessionStorageService.getItem("price");
    this.name=this.sessionStorageService.getItem("name");
    
    this.price = this.price.substring(0, this.price.length - 1);
    
    this.sessionStorageService.removeItem("description");
    this.sessionStorageService.removeItem("img");
    this.sessionStorageService.removeItem("price");
    this.sessionStorageService.removeItem("name");

    // this.type = this.sessionStorageService.getItem('type');
    // if(this.type != 'restaurateur'){
    //   this.router.navigate([`/error-page`], { relativeTo: this.route });
    // }
    // else{
    //   this.type = "restaurant";
    // }
    this.initForm();
  }
  initForm(){
    this.articleForm = this.formBuilder.group({
      name: new FormControl(this.name),
      compo: new FormControl(this.description),
      price: new FormControl(Number(this.price)),
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
  submitArticle(){
    console.log(this.articleForm.value);
  }
}
