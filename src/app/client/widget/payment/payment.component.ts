import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.router.navigate(['/client']); 
      this.toastr.success('Paiement réussi');
    }, 5000);
    
  }
}
