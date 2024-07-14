import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpServiceService } from './http-service.service';
import { DataJuegosInteface, DataUsuariosInteface } from '../interfaces';
import { HttpClient } from '@angular/common/http';

describe('HttpServiceService', () => {
  let service: HttpServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpServiceService]
    });
    service = TestBed.inject(HttpServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Sevicio creado', () => {
    expect(service).toBeTruthy();
  });

  it('Buscar los juegos con GET', () => {
    const mockJuegos = [{ id: 1, title: 'Juego 1' }];

    service.getJuegos().subscribe((juegos) => {
      expect(juegos).toEqual(mockJuegos);
    });

    const req = httpMock.expectOne(`${service.url}/juegos`);
    expect(req.request.method).toBe('GET');
    req.flush(mockJuegos);
  });

  it('Mostrar el envio de juegos con POST', () => {
    const mockProduct: any = { id: 1, title: 'Juego 1' };

    service.postCarrito(mockProduct).subscribe((product) => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne(`${service.url}/carrito`);
    expect(req.request.method).toBe('POST');
    req.flush(mockProduct);
  });


  it('Obtener el usuario user con GET', () => {
    const mockUser: any = { id: 1, title: 'Usuario 1' };

    service.getUser().subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${service.url}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('Actualizar usuarios con PUT', () => {
    const mockUser: any = {  name: 'Usuario 1', email: 'usuario1@example.com' };

    service.updateUser(mockUser).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${service.url}/users`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockUser);
  });

  it('Como se añade un nuevo usuario con POST', () => {
    const mockUser: any = { id: 1, title: 'Usuario 1', email: 'usuario1@example.com' };

    service.agregarUsuarios(mockUser).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${service.url}/users`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });

  it('Mostrar los usuarios con GET', () => {
    const mockUsers: any[] = [{ id: 1, title: 'Usuario 1', email: 'usuario1@example.com' }];

    service.obterLogin().subscribe((users) => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(`${service.url}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});
