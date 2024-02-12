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
      .post('http://127.0.0.1:8000/api/login', {
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
