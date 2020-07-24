import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialformularioComponent } from './materialformulario.component';

describe('MaterialformularioComponent', () => {
  let component: MaterialformularioComponent;
  let fixture: ComponentFixture<MaterialformularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialformularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
