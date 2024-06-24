import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DataUsuariosInteface } from '../interfaces';
import { Router } from '@angular/router';

/**
 * @description
 * Componente para manejar el formulario de inicio de sesión.
 */

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  /**
   * @constructor
   * @param {Router} router - Servicio de Angular para la navegación.
   */
  constructor(private router: Router) {}
  /**
   * @description
   * FormGroup para manejar los controles del formulario de inicio de sesión.
   */
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    pass: new FormControl('', [Validators.required]),
  });
  /**
   * @description
   * Getter para obtener los controles del formulario.
   * @returns {FormGroup['controls']} Los controles del formulario.
   */
  get f() {
    return this.form.controls;
  }

  /**
   * @description
   * Maneja el envío del formulario. Verifica las credenciales y redirige al usuario a la página principal si son correctas.
   */
  submit() {
    const user = localStorage.getItem('form');
    const form: DataUsuariosInteface = user ? JSON.parse(user) : null;
    console.log(form)
    if (
      form.email == this.form.value.email &&
      form.pass == this.form.value.pass
    ) {
      localStorage.setItem('token', 'aaaaa');
      this.router.navigate(['/', 'home']).then(() => {
        window.location.reload();
      });
    }
  }
}
