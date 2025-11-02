import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { Subscription } from 'rxjs';
import { Loan } from '../../models/loan.model';

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css']
})
export class ViewloanComponent implements OnInit, OnDestroy {
  loans?: Loan[];
  private getLoansSubscription?: Subscription;
  
  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.getLoans();
  }

  getLoans() {
    this.getLoansSubscription = this.loanService.getLoans()
    .subscribe({
      next: (response) => {
        this.loans = response;
        console.log('Loans retrieved successfully!');
      }
    })
  }

  ngOnDestroy(): void {
    this.getLoansSubscription?.unsubscribe();
  }
}
