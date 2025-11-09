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

  createLoan(loan: Loan): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/loan`, loan, { responseType: 'text' as 'json' });
  }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${environment.apiBaseUrl}/api/loans`);
  }

  getLoanById(id: string): Observable<Loan> {
    return this.http.get<Loan>(`${environment.apiBaseUrl}/api/loans/${id}`);
  }

  editLoan(loan: Loan): Observable<void> {
    return this.http.put<void>(`${environment.apiBaseUrl}/api/loan`, loan, { responseType: 'text' as 'json' });
  }

  deleteLoan(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/api/loans/${id}`, { responseType: 'text' as 'json' });
  }
}
