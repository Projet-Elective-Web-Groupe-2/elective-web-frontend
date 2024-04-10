import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  articleList:string[] = [];
  selectedImage: string | ArrayBuffer | null | undefined;
  type!:string|null;

  constructor(private formBuilder: FormBuilder,private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }

  
  menusForm = this.formBuilder.group({
    name: new FormControl(),
    compo: new FormControl(),
    price: new FormControl('0'),
    drink: new FormControl(false),
    photo: new FormControl(''),
  });

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
