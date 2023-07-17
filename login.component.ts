// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService) { }

  onLogin() {
   

    this.authService.login(this.username, this.password)
      .subscribe(
        (response) => {
          const accessToken = response.access_token;
          localStorage.setItem('access_token', accessToken);
          this.redirectToDashboard(); // Redirecione para o dashboard após o login bem-sucedido
        },
        (error) => {
          console.error('Erro ao fazer login:', error);
        }
      );
  }

  redirectToDashboard() {
    // Implemente o redirecionamento para a página do dashboard ou outra página protegida
    
  }

  onLogout() {
    this.authService.logout(); // Chame o método de logout ao clicar no botão de logout
  }
}
