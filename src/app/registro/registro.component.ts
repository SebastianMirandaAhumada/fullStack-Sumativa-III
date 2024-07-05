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
import { Router } from '@angular/router';

import { ConsumirBD } from '../service/consumir-bd.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  constructor(

    private router: Router,
    private _auth: ConsumirBD
  ) {}

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

  get f() {
    return this.form.controls;
  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get('pass')?.value === control.get('passconfirm')?.value
      ? null
      : { mismatch: true };
  }

  submit() {
    window.alert(`Hola ${this.form.value.name}, te has registrado correctamente!`);

    this._auth.register(this.form.value.email, this.form.value.pass)
      .then(result => {        
        this.router.navigate(['/', 'login']).then(() => {
          window.location.reload();
        });
      })
      .catch(error => {
        console.log(error);
      });

    // this.localStorageService.addItem('form', this.form.value);
  }
}
