import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasComponent } from './categorias.component';
import { HttpClientModule } from '@angular/common/http';

describe('CategoriasComponent', () => {
  let component: CategoriasComponent;
  let fixture: ComponentFixture<CategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ CategoriasComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente de categorias', () => {
    expect(component).toBeTruthy();
  });
});
