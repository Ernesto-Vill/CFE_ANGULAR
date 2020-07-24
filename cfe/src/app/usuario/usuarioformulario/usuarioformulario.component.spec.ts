import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioformularioComponent } from './usuarioformulario.component';

describe('UsuarioformularioComponent', () => {
  let component: UsuarioformularioComponent;
  let fixture: ComponentFixture<UsuarioformularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioformularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
