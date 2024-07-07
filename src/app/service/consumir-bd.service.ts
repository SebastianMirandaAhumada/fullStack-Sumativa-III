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
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ConsumirBD {
  constructor(private auth: Auth, private firestore: Firestore) {}

  register(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return signOut(this.auth);
  }

  getJuegos(): Observable<DataJuegosInteface[]> {
    const dataJuegos = collection(this.firestore, 'juegos.json');
    return collectionData(dataJuegos,{idField:'id'}) as Observable<DataJuegosInteface[]>
  }
}
