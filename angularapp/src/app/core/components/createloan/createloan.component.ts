import { Component, OnDestroy } from '@angular/core';
import { Loan } from '../../models/loan.model';
import { LoanService } from '../../services/loan.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createloan',
  templateUrl: './createloan.component.html',
  styleUrls: ['./createloan.component.css']
})
export class CreateloanComponent implements OnDestroy {
  loan: Loan;
  private createLoanSubscription?: Subscription;

  constructor(private loanService: LoanService, private router: Router) {
    this.loan = {
      loanType: '',
      description: '',
      interestRate: 0,
      maximumAmount: 0
    }
  }

  createLoan() {
    this.createLoanSubscription = this.loanService.createLoan(this.loan)
    .subscribe({
      next: () => {
        this.router.navigate(['/admin/loans']);
      }
    })
  }

  ngOnDestroy(): void {
    this.createLoanSubscription?.unsubscribe();
  }
}
