import { Component, OnDestroy } from '@angular/core';
import { Loan } from '../../models/loan.model';
import { LoanService } from '../../services/loan.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-createloan',
  templateUrl: './createloan.component.html',
  styleUrls: ['./createloan.component.css']
})
export class CreateloanComponent implements OnDestroy {
  model: Loan;
  private createLoanSubscription?: Subscription;

  constructor(private loanService: LoanService) {
    this.model = {
      loanType: '',
      description: '',
      interestRate: 0,
      maximumAmount: 0
    }
  }

  createLoan() {
    this.createLoanSubscription = this.loanService.createLoan(this.model)
    .subscribe({
      next: (response) => {
        console.log('Loan created successfully!');
      }
    })
  }

  ngOnDestroy(): void {
    this.createLoanSubscription?.unsubscribe();
  }
}
