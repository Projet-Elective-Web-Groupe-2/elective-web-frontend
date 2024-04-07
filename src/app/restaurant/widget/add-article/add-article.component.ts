import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  selectedImage: string | ArrayBuffer | null | undefined;
  type!:string|null;

  constructor(private formBuilder: FormBuilder,private sessionStorageService: SessionStorageService,private router: Router, private route: ActivatedRoute) { }

  articleForm = this.formBuilder.group({
    name: new FormControl(),
    compo: new FormControl(),
    price: new FormControl('0'),
    photo: new FormControl(''),
  });

  ngOnInit(): void {
    this.type = this.sessionStorageService.getItem('type');
    if(this.type != 'restaurateur'){
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }
    else{
      this.type = "restaurant";
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

  submitArticle(){
    console.log(this.articleForm.value);
  }
}
