import { Component } from '@angular/core';
import { DataJuegosInteface, DataUsuariosInteface } from '../interfaces';
import { NgFor, NgIf } from '@angular/common';
import { dataUsuarios } from '../../dataUsuarios';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocalStorageService } from '../../../service/localStorage.service';
/**
 * @description
 * Componente de Administrador
 *
 * En este componente muestra la vista de la pagina de administracion de usuarios
 *
 */

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  public data: DataUsuariosInteface[] = dataUsuarios;

  items: DataUsuariosInteface[] = [];

  /**
   * Borrar Usuario
   * @param {string} name - El nombre de usuario
   * @returns{Array} - retorna el arreglo con el filtro incluido y un mensaje
   */
  borrar(name: string) {
    this.data = this.data.filter((user) => user.name !== name);
    window.alert(`Usuario ${name}, Eliminado correctamente!`);
  }

  constructor(private localStorageService: LocalStorageService) {}

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
   * Borrar Usuario
   * @param {string} name - El nombre de usuario
   * @returns{FormControl: FormControl} - retorna el formulario con los datos que vienen del arreglo
   * y se lo pasa en un objeto
   */
  getform(name: string) {
    const user = dataUsuarios.find((user) => user.name === name);

    this.form.setValue({
      name: user?.name,
      email: user.email,
      phone: user.phone,
      pass: user.pass,
      passconfirm: user.passconfirm,
    });
  }
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
   *@description
   *  Maneja el envío del formulario de Edicion. Alerta al usuario
   */
  submit() {
    window.alert(`Usuario ${this.form.value.name}, Editado!`);
  }
}
