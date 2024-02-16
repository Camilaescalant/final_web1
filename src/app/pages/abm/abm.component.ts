import { Component } from '@angular/core';
import { Superheroe } from '../../models/superheroe.model';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import axios from 'axios';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrl: './abm.component.css',
})
export class AbmComponent {
  
  users: User[] = [];
  superheroes: Superheroe[] = [];
  loadingUsers: boolean = false;
  loadingSuperhero: boolean = false;
  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  redirect() {
    this.router.navigate(['./']);
  }

  changeRol(idUser: number, rol: number) {
    this.spinner.show();
    axios
      .put('https://laravel8-vercel-six.vercel.app/abm/user/changeRol/', {
        idUser,
        rol,
      })
      .then((data: any) => {
        this.getUser();
      });
  }

  deleteUser(idUser: number, index: number) {
    this.spinner.show();
    axios
      .delete(`https://laravel8-vercel-six.vercel.app/abm/user/${idUser}`)
      .then((data) => {
        this.getUser();
      });
  }

  deleteSuperheroe(idSuperheroe: number, index: number) {
    this.spinner.show();
    axios
      .delete(`https://laravel8-vercel-six.vercel.app/abm/superheroe/${idSuperheroe}`)
      .then((data) => {
        this.getSuperhero();
      });
  }

  getUser() {
    axios
      .get<User[]>('https://laravel8-vercel-six.vercel.app/abm/user')
      .then(({data}) => {
        this.users = data;
        this.spinner.hide();
      });
  }

  getSuperhero() {
    axios
      .get<Superheroe[]>(`https://laravel8-vercel-six.vercel.app/superheroe/`)
      .then((data:any) => {
        this.superheroes = data;
        this.spinner.hide();
      });
  }

  ngOnInit() {
    this.spinner.show();
    this.getUser();
    this.getSuperhero();
  }
}
