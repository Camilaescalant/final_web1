import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Superheroe } from '../../models/superheroe.model';
import axios from 'axios';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  http = inject(HttpClient);
  Superheroes: Superheroe[] = [];
  mySuperheroes: Superheroe[] = [];
  myHeroes: Boolean = false;
  constructor(private spinner: NgxSpinnerService) {}
  /* Cambia el valor para mostar los superheroes agregados o todos */
  changeToMyHeroe(event: any) {
    this.myHeroes = true;
  }

  changeToAllMyHeroe(event: any) {
    this.myHeroes = false;
  }

  /**
   * @Superheroe
   * @PUT
   */
  deleteSuperhero(index: number, Superheroe: Superheroe) {
    this.spinner.show();
    this.mySuperheroes.splice(index, 1);
    axios
      .put<Superheroe[]>('https://webapi-camilaescalant-camilas-projects-97c18b85.vercel.app/mysuperheroe', {
        idUser: localStorage.getItem('idUser'),
        idSuperhero: Superheroe.id,
      })
      .then(({ data }) => {
        this.mySuperheroes = data;
        this.spinner.hide();
      });
  }
  /**
   * @Superheroe
   * @POST
   */
  addSuperhero(Superheroe: Superheroe) {
    this.spinner.show();
    axios
      .post<Superheroe[]>('https://webapi-camilaescalant-camilas-projects-97c18b85.vercel.app/mysuperheroe', {
        idUser: localStorage.getItem('idUser'),
        idSuperhero: Superheroe.id,
      })
      .then(({ data }) => {
        this.mySuperheroes = data;
        this.spinner.hide();
      });
  }
  /* ------------------------------------------------------------- */

  /*
   * GET Superheroe
   *
   */
  ngOnInit() {
    this.spinner.show();
    axios
      .get<Superheroe[]>('https://webapi-camilaescalant-camilas-projects-97c18b85.vercel.app/superheroe')
      .then(({ data }) => {
        this.Superheroes = data;
      });

    axios
      .get<Superheroe[]>(
        `https://webapi-camilaescalant-camilas-projects-97c18b85.vercel.app/mysuperheroe/${localStorage.getItem(
          'idUser'
        )}`
      )
      .then(({ data }) => {
        this.mySuperheroes = data;
        this.spinner.hide();
      });
  }
  /* ------------------------------------------------------------- */
}
