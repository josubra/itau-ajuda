import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Categoria} from '../shared/models/categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  listarCategoriasAPI(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('/api/categoria');
  }

  // Método mockado, em produção utilizar o método de consulta via API acima
  listarCategorias(): Categoria[] {
    const categorias = [];
    const categoria1 = new Categoria();
    categoria1.id = 1;
    categoria1.titulo = 'cartão de crédito';
    categoria1.icone = 'credit_card';
    categoria1.url = 'categoria/1';
    categorias.push(categoria1);
    const categoria2 = new Categoria();
    categoria2.id = 2;
    categoria2.titulo = 'conta corrente';
    categoria2.icone = 'local_post_office';
    categoria2.url = 'categoria/2';
    categorias.push(categoria2);
    const categoria3 = new Categoria();
    categoria3.id = 3;
    categoria3.titulo = 'pagamentos e transferências';
    categoria3.icone = 'credit_card';
    categoria3.url = 'categoria/3';
    categorias.push(categoria3);
    const categoria4 = new Categoria();
    categoria4.id = 4;
    categoria4.titulo = 'empréstimo';
    categoria4.icone = 'attach_money';
    categoria4.url = 'categoria/4';
    categorias.push(categoria4);
    const categoria5 = new Categoria();
    categoria5.id = 5;
    categoria5.titulo = 'cartão de débito';
    categoria5.icone = 'credit_card';
    categoria5.url = 'categoria/5';
    categorias.push(categoria5);
    const categoria6 = new Categoria();
    categoria6.id = 6;
    categoria6.titulo = 'tarifas e serviços';
    categoria6.icone = 'post_add';
    categoria6.url = 'categoria/6';
    categorias.push(categoria6);
    const categoria7 = new Categoria();
    categoria7.id = 7;
    categoria7.titulo = 'cheque especial';
    categoria7.icone = 'plus_one';
    categoria7.url = 'categoria/7';
    categorias.push(categoria7);
    const categoria8 = new Categoria();
    categoria8.id = 8;
    categoria8.titulo = 'itoken';
    categoria8.icone = 'flip_to_front';
    categoria8.url = 'categoria/8';
    categorias.push(categoria8);
    const categoria9 = new Categoria();
    categoria9.id = 9;
    categoria9.titulo = 'investimentos';
    categoria9.icone = 'poll';
    categoria9.url = 'categoria/9';
    categorias.push(categoria9);
    const categoria10 = new Categoria();
    categoria10.id = 10;
    categoria10.titulo = 'financiamentos';
    categoria10.icone = 'money_off';
    categoria10.url = 'categoria/10';
    categorias.push(categoria10);
    const categoria11 = new Categoria();
    categoria11.id = 11;
    categoria11.titulo = 'configurações e segurança';
    categoria11.icone = 'lock';
    categoria11.url = 'categoria/11';
    categorias.push(categoria11);
    const categoria12 = new Categoria();
    categoria12.id = 12;
    categoria12.titulo = 'seguros';
    categoria12.icone = 'security';
    categoria12.url = 'categoria/12';
    categorias.push(categoria12);
    const categoria13 = new Categoria();
    categoria13.id = 13;
    categoria13.titulo = 'capitalização (pic)';
    categoria13.icone = 'how_to_reg';
    categoria13.url = 'categoria/13';
    categorias.push(categoria13);
    const categoria14 = new Categoria();
    categoria14.id = 14;
    categoria14.titulo = 'programas sociais';
    categoria14.icone = 'group';
    categoria14.url = 'categoria/14';
    categorias.push(categoria14);
    return categorias;
  }
}
