import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { Subscription } from 'rxjs';
import { Loan } from '../../models/loan.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css']
})
export class ViewloanComponent implements OnInit, OnDestroy {
  loans?: Loan[];
  private loanSubscription?: Subscription;
  
  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.getLoans();
  }

  getLoans() {
    this.loanSubscription = this.loanService.getLoans()
    .subscribe({
      next: (response) => {
        this.loans = response;
      }
    })
  }

  ngOnDestroy(): void {
    this.loanSubscription?.unsubscribe();
  }
}
