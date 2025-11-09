import { Component, OnDestroy, OnInit } from '@angular/core';
import { Loan } from '../../models/loan.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../../services/loan.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editloan',
  templateUrl: './editloan.component.html',
  styleUrls: ['./editloan.component.css']
})
export class EditloanComponent implements OnInit, OnDestroy {
  loanId: string | null = null;
  loan?: Loan;

  private paramsSubscription?: Subscription;
  private loanSubscription?: Subscription;
  
  constructor(private loanService: LoanService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.loanId = params.get('id');

        if(this.loanId) {
          this.loanService.getLoanById(this.loanId).subscribe({
            next: (response) => {
              this.loan = response;
            }
          });
        }
      }
    })
  }

  editLoan() {
    if(this.loan) {
      this.loanSubscription = this.loanService.editLoan(this.loan).subscribe({
        next: () => {
          this.router.navigate(['/admin/loans']);
        }
      });
    }
  }

  deleteLoan() {
    if(this.loanId) {
      this.loanService.deleteLoan(this.loanId).subscribe({
        next: () => {
          this.router.navigate(['/admin/loans']);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.loanSubscription?.unsubscribe();
  }
}
