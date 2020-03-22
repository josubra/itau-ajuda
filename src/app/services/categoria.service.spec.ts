import { TestBed } from '@angular/core/testing';

import { CategoriaService } from './categoria.service';
import { HttpClientModule } from '@angular/common/http';

describe('CategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('deve criar o serviço de categorias', () => {
    const service: CategoriaService = TestBed.get(CategoriaService);
    expect(service).toBeTruthy();
  });

  it('deve retornar pelo menos uma categoria', () => {
    const service: CategoriaService = TestBed.get(CategoriaService);
    const categorias = service.listarCategorias();
    expect(categorias.length).toBeGreaterThan(1);
  });
});
