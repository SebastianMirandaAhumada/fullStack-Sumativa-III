import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from '../../../service/localStorage.service';
import { Router } from '@angular/router';

/**
 * @description
 * Componente para manejar el formulario de registro de usuarios.
 */

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
})
export class RegistroComponent {
  /**
   * @constructor
   * @param {LocalStorageService} localStorageService - Servicio para manejar el almacenamiento en localStorage.
   * @param {Router} router - Servicio de Angular para la navegación.
   */
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  /**
   * @description
   * FormGroup para manejar los controles del formulario de registro.
   */
  form = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      pass: new FormControl('', [Validators.required]),
      passconfirm: new FormControl(''),
    },
    {
      validators: this.passwordMatchValidator,
    }
  );
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
   * Validador para comprobar que las contraseñas coincidan.
   * @param {AbstractControl} control - El grupo de controles que contiene las contraseñas.
   * @returns {ValidationErrors | null} Un objeto de errores de validación si las contraseñas no coinciden, de lo contrario null.
   */
  passwordMatchValidator(control: AbstractControl) {
    return control.get('pass')?.value === control.get('passconfirm')?.value
      ? null
      : {
          mismatch: true,
        };
  }
  /**
   * @description
   * Maneja el envío del formulario. Alerta al usuario y redirige a la página de inicio de sesión.
   */
  submit() {
    window.alert(
      `Hola ${this.form.value.name}, te has registrado correctamente!`
    );
    this.router.navigate(['/', 'login']).then(() => {
      window.location.reload();
    });
    this.localStorageService.addItem('form', this.form.value);
  }
}
