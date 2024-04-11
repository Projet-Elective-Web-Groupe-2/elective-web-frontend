import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageModel } from 'src/app/core/models/message.model';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  selectedImage: string | ArrayBuffer | null | undefined;
  type!: string | null;
  token!: any;
  userID!:any;

  constructor(private formBuilder: FormBuilder,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private toastr: ToastrService
  ) { }

  articleForm = this.formBuilder.group({
    name: new FormControl(),
    compo: new FormControl(),
    price: new FormControl('0'),
    photo: new FormControl(''),
  });

  ngOnInit(): void {
    this.userID = this.sessionStorageService.getItem('restaurantID');
    this.token = this.sessionStorageService.getItem('token');
    this.type = this.sessionStorageService.getItem('type');
    if (this.type != 'restaurant') {
      this.router.navigate([`/error-page`], { relativeTo: this.route });
    }
    else {
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

  submitArticle() {
    this.restaurantService.createArticle(this.token,this.userID,this.articleForm.value).subscribe((response: MessageModel) => {
      if(response.message == "Product added successfully"){
        this.toastr.success("L'article a été ajouté avec succès");
        setTimeout(() => {
          this.router.navigate(['/restaurant']);
        }, 2000);
      }
      else{
        this.toastr.error("Erreur lors de la création de l'article");
      }
    }, (error) => {
      this.toastr.error("Erreur lors de la création de l'article : " + error);
    });
  }
}
