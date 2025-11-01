import { Component } from '@angular/core';
import { Loan } from '../../models/loan.model';

@Component({
  selector: 'app-createloan',
  templateUrl: './createloan.component.html',
  styleUrls: ['./createloan.component.css']
})
export class CreateloanComponent {
  model: Loan;

  constructor() {
    this.model = {
      loanType: '',
      description: '',
      interestRate: 0,
      maximumAmount: 0
    }
  }

  createLoan() {

  }
}
