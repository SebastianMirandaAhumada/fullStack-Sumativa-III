import { Component } from '@angular/core';
import { DataJuegosInteface } from '../interfaces';
import { CartService } from '../cart.service';
import { NgFor } from '@angular/common';

/**
 * @description
 * Componente de Juegos
 *
 * En este componente muestra la vista de los juegos en el carrito de compras
 *
 */

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.scss',
})
export class JuegosComponent {
  items: DataJuegosInteface[] = [];
  precio: number = 0;

  constructor() {}

  /**
   * @description Método que se ejecuta al inicializar el componente.
   * Obtiene los juegos guardados en el localStorage con la clave 'carrito',
   * los parsea y los asigna a la variable `items`.
   * Calcula y asigna la suma de los precios de los juegos a la variable `precio`.
   */

  ngOnInit(): void {
    const item = localStorage.getItem('carrito');
    this.items = item ? JSON.parse(item) : null;
    if (item && this.items) {
      this.items.forEach((e) => {
        this.precio += e.precio;
      });
    } else {
      
     
    }
  }

  /**
   * Borrar Usuario
   * @param {string} name - El nombre del juego que es unico
   * @returns{LocalStorage} - Filtra los juegos por nombre y despues lo setea
   * en el localStorage cuando se borre un juego
   * Ademas, le hace un descuento por cada juego que se filtre y te muestre un
   * precio total menors
   */

  borrar(name: string) {
    this.items = this.items.filter((user) => user.title !== name);
    this.items.forEach((e) => {
      this.precio += e.precio;
    });
    localStorage.setItem('carrito', JSON.stringify(this.items));
    window.alert(`Usuario ${name}, Eliminado correctamente!`);
    window.location.reload();
  }
}
