import { Component } from '@angular/core';
import { AuthService } from '../services_club/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    console.log("TEST")
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.authService.setUsername(this.username);
        this.router.navigate(['/home'])//.then(()=>window.location.reload());
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }
}
