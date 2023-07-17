// auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
   
  }

  logout() {
    this.http.delete(`${this.apiUrl}/logout`).subscribe(
      (response) => {
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
        isTokenExpired(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) {
      return true; 
    }
    return this.jwtHelper.isTokenExpired(token);

      },
      (error) => {
        console.error('Erro ao fazer logout:', error);
      }
    );
  }
}
