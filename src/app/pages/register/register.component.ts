import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  http = inject(HttpClient);
  
  password!: string;
  nickname!: string;
  email!: string;
  name!: string;
  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(['./login']);
  }

  register() {
    this.http
      .post('https://laravelsuperhero.000webhostapp.com/api/register', {
        email: this.email,
        password: this.password,
        name: this.name,
        nickname: this.nickname,
      })
      .subscribe((data: any) => {
        localStorage.setItem('currentUser', data[0].email);
        localStorage.setItem('idUser', data[0].id);
        this.router.navigate(['/']);
      });
  }
}
