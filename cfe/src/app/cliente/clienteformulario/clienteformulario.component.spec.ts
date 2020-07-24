import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteformularioComponent } from './clienteformulario.component';

describe('ClienteformularioComponent', () => {
  let component: ClienteformularioComponent;
  let fixture: ComponentFixture<ClienteformularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteformularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
