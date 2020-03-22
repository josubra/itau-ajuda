import { Component, OnInit } from '@angular/core';
import { DuvidaService } from '../services/duvida.service';
import { Duvida } from '../shared/models/duvida.model';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['../shared/base.scss', './duvidas.component.scss']
})
export class DuvidasComponent implements OnInit {
  title = 'Dúvidas frequentes';
  constructor(private duvidaService: DuvidaService) { }
  private duvidas: Duvida[];

  ngOnInit() {
    this.duvidas = this.listarDuvidas();
    // this.listarDuvidasAPI();
  }
  direcionarDuvida(duvida: Duvida): void {
    // TODO: fazer o redirecionamento para a página de dúvida específica
  }
  listarDuvidas(): Duvida[] {
    return this.duvidaService.listarDuvidas();
  }
  listarDuvidasAPI() {
    this.duvidaService.listarDuvidasAPI()
      .subscribe(
        duvidas => this.duvidas = duvidas,
        error => console.log(error));
  }
  maisDuvidas() {
    console.log('Mais dúvidas acionado.');
  }
}
