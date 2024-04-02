import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {content: string,title:string}) { }

  content!:string;
  title!:string;

  ngOnInit(): void {
    this.title = this.data.title;
    this.content = this.data.content;
  }
}
