import { Component } from '@angular/core';

import { DataJuegosInteface } from '../interfaces';
import { NgFor } from '@angular/common';
import { dataJuego } from '../../dataJuego';

import { LocalStorageService } from '../../../service/localStorage.service';

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
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public data: DataJuegosInteface[] = dataJuego;

  private items: DataJuegosInteface[] = [];
/**
   * @constructor
   * @param {LocalStorageService} localStorageService - Servicio para manejar el almacenamiento en localStorage.
   */
  constructor(private localStorageService: LocalStorageService) {}
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
}
