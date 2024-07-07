import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataJuegosInteface, DataUsuariosInteface } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {


  url: string = 'http://localhost:3000';

  
  constructor(private http: HttpClient) {}

  getJuegos(): Observable<any> {
    const endpoint = `${this.url}/juegos`;
    return this.http.get(endpoint);
  }

  postCarrito(product: DataJuegosInteface): Observable<DataJuegosInteface> {
    const endpoint = `${this.url}/carrito`;
    return this.http.post<DataJuegosInteface>(endpoint, product);
  }
  getCarrito(): Observable<DataJuegosInteface[]> {
    const endpoint = `${this.url}/carrito`;
    return this.http.get<DataJuegosInteface[]>(endpoint);
  }

  getUser(): Observable<DataJuegosInteface> {
    const endpoint = `${this.url}/users`;
    return this.http.get<DataJuegosInteface>(endpoint);
  }
  updateUser(usuario: DataUsuariosInteface): Observable<DataUsuariosInteface> {
    const endpoint = `${this.url}/users`;
    return this.http.put<DataUsuariosInteface>(endpoint, usuario);
  }

  DeleteCarrito(product: DataJuegosInteface): Observable<DataJuegosInteface[]> {
    const endpoint = `${this.url}/carrito/${product.id}`;
    return this.http.delete<DataJuegosInteface[]>(endpoint);
  }

  agregarUsuarios(users: any): Observable<DataUsuariosInteface> {
    const endpoint = `${this.url}/users`;
    return this.http.post<DataUsuariosInteface>(endpoint, users);
  }
  obterLogin(): Observable<DataUsuariosInteface[]> {
    const endpoint = `${this.url}/users`;
    return this.http.get<DataUsuariosInteface[]>(endpoint);
  }
}
