import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./shared/base.scss', './app.component.scss']
})
export class AppComponent {
  title = 'Página de ajuda do Itaú';
  redirecionarFuncao(funcao) {
    switch (funcao) {
      case 'mensagem':
        console.log('Mensagem foi acionada.');
        break;
      case 'chat':
        console.log('Chat foi acionada.');
        break;
      case 'telefone':
        console.log('Telefones foi acionada.');
        break;
      case 'agencia':
        console.log('Agências foi acionada.');
        break;
    }
  }
}
