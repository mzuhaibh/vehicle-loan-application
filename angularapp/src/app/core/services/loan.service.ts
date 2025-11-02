import { Injectable } from '@angular/core';
import { Loan } from '../models/loan.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  createLoan(model: Loan): Observable<Loan> {
    return this.http.post<Loan>('https://localhost:7080/api/loan', model);
  }
}
