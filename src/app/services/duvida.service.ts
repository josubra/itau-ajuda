import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Duvida} from '../shared/models/duvida.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuvidaService {

  constructor(private http: HttpClient) { }

  listarDuvidasAPI(): Observable<Duvida[]> {
    return this.http.get<Duvida[]>('/api/duvida');
  }

  // Método mockado, em produção utilizar o método de consulta via API acima
  listarDuvidas(): Duvida[] {
    const duvidas = [];
    const duvida1 = new Duvida();
    duvida1.id = 1;
    duvida1.titulo = 'programa sempre<br> presente';
    duvida1.descricao = 'Como resgato os meus pontos?';
    duvida1.icone = 'drag_indicator';
    duvida1.url = 'duvida/1';
    duvidas.push(duvida1);
    const duvida2 = new Duvida();
    duvida2.id = 2;
    duvida2.titulo = 'empréstimo';
    duvida2.descricao = 'Como simulo ou contrato um empréstimo no Itaú?';
    duvida2.icone = 'attach_money';
    duvida2.url = 'duvida/2';
    duvidas.push(duvida2);
    const duvida3 = new Duvida();
    duvida3.id = 3;
    duvida3.titulo = 'iToken';
    duvida3.descricao = 'Como cadastro o iToken no app?';
    duvida3.icone = 'flip_to_front';
    duvida3.url = 'duvida/3';
    duvidas.push(duvida3);
    const duvida4 = new Duvida();
    duvida4.id = 4;
    duvida4.titulo = 'pacote de serviços';
    duvida4.descricao = 'O que está incluso no meu pacote de serviços e quanto pago por ele?';
    duvida4.icone = 'view_module';
    duvida4.url = 'duvida/4';
    duvidas.push(duvida4);
    const duvida5 = new Duvida();
    duvida5.id = 5;
    duvida5.titulo = 'cartões';
    duvida5.descricao = 'Como desbloqueio o meu cartão?';
    duvida5.icone = 'credit_card';
    duvida5.url = 'duvida/5';
    duvidas.push(duvida5);
    const duvida6 = new Duvida();
    duvida6.id = 6;
    duvida6.titulo = 'Conta';
    duvida6.descricao = 'Como faço um DOC ou TED?';
    duvida6.icone = 'local_post_office';
    duvida6.url = 'duvida/6';
    duvidas.push(duvida6);
    const duvida7 = new Duvida();
    duvida7.id = 7;
    duvida7.titulo = 'financiamentos';
    duvida7.descricao = 'Buscando renegociar a sua dívida?';
    duvida7.icone = 'money_off';
    duvida7.url = 'duvida/7';
    duvidas.push(duvida7);
    const duvida8 = new Duvida();
    duvida8.id = 8;
    duvida8.titulo = 'outros serviços';
    duvida8.descricao = 'Como consigo meu IR de 2020?';
    duvida8.icone = 'poll';
    duvida8.url = 'duvida/8';
    duvidas.push(duvida8);
    return duvidas;
  }
}
