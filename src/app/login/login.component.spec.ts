import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe retornar formulario invalido', ()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const form = app.form;
    const email = app.form.controls['email']
    email.setValue('seba@gmail.com')
    expect(form.invalid).toBeTrue();
  })
  it('Debe retornar formulario valido', ()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const form = app.form;
    const pass = app.form.controls['pass']
    const email = app.form.controls['email']
    email.setValue('seba@gmail.com')
    pass.setValue('1234')
    expect(form.valid).toBeTrue();
  })

});
