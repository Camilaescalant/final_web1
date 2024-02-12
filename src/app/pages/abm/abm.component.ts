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
      .put('http://127.0.0.1:8000/api/abm/user/changeRol/', {
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
      .delete(`http://127.0.0.1:8000/api/abm/user/${idUser}`)
      .then((data) => {
        this.getUser();
      });
  }

  deleteSuperheroe(idSuperheroe: number, index: number) {
    this.spinner.show();
    axios
      .delete(`http://127.0.0.1:8000/api/abm/superheroe/${idSuperheroe}`)
      .then((data) => {
        this.getSuperhero();
      });
  }

  getUser() {
    axios
      .get<User[]>('http://127.0.0.1:8000/api/abm/user')
      .then(({data}) => {
        this.users = data;
        this.spinner.hide();
      });
  }

  getSuperhero() {
    axios
      .get<Superheroe[]>(`http://127.0.0.1:8000/api/superheroe/`)
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
