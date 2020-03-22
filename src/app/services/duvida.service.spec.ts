import { TestBed } from '@angular/core/testing';

import { DuvidaService } from './duvida.service';
import { HttpClientModule } from '@angular/common/http';

describe('DuvidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('deve criar o serviço de dúvidas', () => {
    const service: DuvidaService = TestBed.get(DuvidaService);
    expect(service).toBeTruthy();
  });

  it('deve retornar pelo menos uma dúvida', () => {
    const service: DuvidaService = TestBed.get(DuvidaService);
    const duvidas = service.listarDuvidas();
    expect(duvidas.length).toBeGreaterThan(1);
  });
});
