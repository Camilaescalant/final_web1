import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  http = inject(HttpClient);
  userInfo!: User;
  modEdit: Boolean = false;
  constructor(private router: Router) {}
  /* Envia los datos a la api */
  changeProfile() {
    this.http
      .put(
        `https://webapi-camilaescalant-camilas-projects-97c18b85.vercel.app/user/info/${localStorage.getItem('idUser')}`,
        this.userInfo
      )
      .subscribe((data: any) => {
        this.userInfo = data;
      });
    this.modEdit = false;
  }

  goAbm(){
    this.router.navigate(['./abm']);
  }

  goBack() {
    this.router.navigate(['./']);
  }

  activeEdit() {
    this.modEdit = true;
  }

  disableEdit() {
    this.modEdit = false;
  }
  /* Cuando se monte nuestro componente pediremos lso datos del perfil de usuario */
  ngOnInit() {
    this.http
      .get(
        `https://webapi-camilaescalant-camilas-projects-97c18b85.vercel.app/user/info/${localStorage.getItem('idUser')}`
      )
      .subscribe((data: any) => {
        this.userInfo = data[0];
      });
  }
}
