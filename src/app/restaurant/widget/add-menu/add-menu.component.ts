import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  articleList:string[] = [];
  selectedImage: string | ArrayBuffer | null | undefined;
  
  constructor(private formBuilder: FormBuilder) {}
  
  menusForm = this.formBuilder.group({
    name: new FormControl(),
    compo: new FormControl(),
    price: new FormControl('0'),
    drink: new FormControl(false),
    photo: new FormControl(''),
  });//https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt9418bc6e38e6544a/660439b26eb29729ab905cdf/MxBO_BIGMAC.png?auto=webp&width=1280&disable=upscale

  ngOnInit(): void {
    this.articleList.push('Big Muc');
    this.articleList.push('Sushi');
    this.articleList.push('Bucket');
    this.articleList.push('Whooper');
    this.articleList.push('Kebab');
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
    console.log(this.menusForm.value);
  }
}
