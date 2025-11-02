import { Injectable } from '@angular/core';
import { Loan } from '../models/loan.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  createLoan(model: Loan): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/loan`, model);
  }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${environment.apiBaseUrl}/api/loans`);
  }
}
