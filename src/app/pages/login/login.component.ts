import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  http = inject(HttpClient);
  email!: string;
  password!: string;
  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(['./register']);
  }

  login() {
    this.http
      .post('https://webapi-camilaescalant-camilas-projects-97c18b85.vercel.app/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe((data: any) => {
        localStorage.setItem('currentUser', data[0].email);
        localStorage.setItem('idUser', data[0].id);
        this.router.navigate(['/']);
      });
  }
}
