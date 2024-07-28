import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/weshoot/auth/login'; /// Update with your API endpoint
  private loggedIn = false;


  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.loggedIn = true;
          this.setUsername(username)
          console.log(response)
        }
      }),
      catchError(this.handleError)
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.loggedIn = false;
    this.router.navigate(['/login']).then(()=>window.location.reload());
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('token') !== null;
  }

  getUsername():string{
    console.log(localStorage.getItem('username'))
    return localStorage.getItem('username') || '';
  }
  setUsername(username: string) {
    localStorage.setItem('username', username);
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
