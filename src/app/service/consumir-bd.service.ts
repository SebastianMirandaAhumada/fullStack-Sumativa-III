import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataJuegosInteface } from '../interfaces';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class ConsumirBD {
  token = '2b3b7a34-ef56-4e29-b4be-ecccda10a576';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer 2b3b7a34-ef56-4e29-b4be-ecccda10a576',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    }),
  };
  private jsonUrl =
    'https://firebasestorage.googleapis.com/v0/b/full-stack-ii-b5c40.appspot.com/o/juegos.json?alt=media&token=2b3b7a34-ef56-4e29-b4be-ecccda10a576';

  constructor(private auth: Auth) {}

  // getJuegos(): Observable<any> {
  //   return this.http.get(this.jsonUrl);
  // }

  register(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return signOut(this.auth);
  }
}
