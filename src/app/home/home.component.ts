import { Component, OnInit } from '@angular/core';

import { DataJuegosInteface } from '../interfaces';
import { CommonModule, NgFor } from '@angular/common';
import { dataJuego } from '../../dataJuego';

import { LocalStorageService } from '../../../service/localStorage.service';
import { ConsumirBD } from '../service/consumir-bd.service';
import { HttpClientModule } from '@angular/common/http';

/**
 * @description
 * Componente de Inicio
 *
 * En este componente muestra la vista del inicio de la pagina cuando se entra a ella
 *
 */

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HttpClientModule, CommonModule],
  providers: [ConsumirBD],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public data: DataJuegosInteface[] = dataJuego;

  private items: DataJuegosInteface[] = [];
  /**
   * @constructor
   * @param {LocalStorageService} localStorageService - Servicio para manejar el almacenamiento en localStorage.
   */
  constructor(
    private localStorageService: LocalStorageService,
    private service: ConsumirBD
  ) {
  }
  /**
   * Borrar Usuario
   * @param {DataJuegosInteface} product - un objeto que sigue la interfaz DataJuegosInteface,
   *  que representa un producto
   * y lo guarda dentro del arreglo this.item, para que despues este lo guarde en el localStorage
   */
  addToCart(product: DataJuegosInteface) {
    this.items.push(product);
    this.localStorageService.addItem('carrito', this.getItems());
    window.alert('Producto añadido al carrito!');
  }
  /**
   * @description
   * Devuelve todos los productos añadidos al carrito.
   * @returns {DataJuegosInteface[]} El arreglo de productos añadidos al carrito.
   */
  getItems() {
    return this.items;
  }
  ngOnInit(){
    this.mostrarJuegos();

  }

  mostrarJuegos() {
    // this.service.getJuegos().subscribe({
    //   next: (e) => {
    //     console.log(e);
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   },
    // });
  }
}
