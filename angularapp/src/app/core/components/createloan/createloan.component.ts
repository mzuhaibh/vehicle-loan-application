import { Component } from '@angular/core';
import { Loan } from '../../models/loan.model';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-createloan',
  templateUrl: './createloan.component.html',
  styleUrls: ['./createloan.component.css']
})
export class CreateloanComponent {
  model: Loan;

  constructor(private loanService: LoanService) {
    this.model = {
      loanType: '',
      description: '',
      interestRate: 0,
      maximumAmount: 0
    }
  }

  createLoan() {
    this.loanService.createLoan(this.model)
    .subscribe({
      next: (response) => {
        console.log('Loan created successfully!'); 
      }
    })
  }
}
