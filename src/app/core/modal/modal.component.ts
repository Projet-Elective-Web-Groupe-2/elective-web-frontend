import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {content: string,title:string,delivery:boolean},public dialogRef: MatDialogRef<ModalComponent>) { }

  content!:string;
  title!:string;
  delivery:boolean = false;

  ngOnInit(): void {
    this.title = this.data.title;
    this.content = this.data.content;
    this.delivery = this.data.delivery;
  }

  confirm() {
    this.dialogRef.close(true); 
  }

  cancel() {
    this.dialogRef.close(false); 
  }
}
