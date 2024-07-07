import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { DataJuegosInteface, DataUsuariosInteface } from '../../interfaces';
import { dataJuego } from '../../../dataJuego';
/**
 * @description
 * Componente de la barra de navegacion
 *
 * En este componente muestra en el header de la pagina
 */
/**
 * @usageNotes
 * 1. Se importa este componente  y en app.component.ts
 * 2. Añade el 'app-nav-bar' en la plantilla de pie de pagina
 */

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  flag: boolean = false;
  isAuthenticated: boolean = false;
  name: string = '';
  photo:string ='./assets/img/shopping-cart_1170678.png';
  public data: DataJuegosInteface[] = dataJuego;

  constructor() {}

   /**
   * @description
   * Inicializa el componente, verificando la autenticación del usuario y mostrando su nombre si está autenticado.
   * 
   * @returns {void}
   */

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.isAuthenticated = !!token;
    console.log(this.isAuthenticated)
    // this.mostrarUser();
  }

  /**
   * @description
   * Muestra el nombre de usuario en la barra de navegación si el usuario está autenticado.
   * 
   */
  mostrarUser() {
    const token = localStorage.getItem('form');

    const form: DataUsuariosInteface = token ? JSON.parse(token) : null;
    if (form && form.name) {
      this.name = form.name;
    } else {
      this.name = 'usuario';
    }
  }
}
