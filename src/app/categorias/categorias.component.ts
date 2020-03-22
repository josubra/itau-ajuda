import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../shared/models/categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['../shared/base.scss', './categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  title = 'Dúvidas por categoria';
  constructor(private categoriaService: CategoriaService) { }
  private categorias: Categoria[];

  ngOnInit() {
    this.categorias = this.listarCategorias();
  }

  direcionarCategoria(categoria: Categoria): void {
    // TODO: fazer o redirecionamento para a página de categoria específica
  }

  listarCategorias(): Categoria[] {
    return this.categoriaService.listarCategorias();
  }

  listarCategoriasAPI() {
    this.categoriaService.listarCategoriasAPI()
      .subscribe(
        categorias => this.categorias = categorias,
        error => console.log(error));
  }

}
