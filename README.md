# Pagina de ajuda do Itau

Página feita com Angular 8 e SASS.
O objetivo desse projeto é realizar a réplica com melhorias da página de ajuda do Itaú.

# Observações

1.	Como eu não tinha os ícones, optei por utilizar o Material Design do Angular para colocar os ícones.
2.	Não leve em consideração os tipos dos ícones, procurei o mais próximo possível dos originais. 
3.	Optei por utilizar SASS para reaproveitamento de código no CSS.
4.	Decidi remover o carrossel de cima pois havia muitas coisas duplicadas. Entendo que são as dúvidas mais frequentes calculadas por       algum algoritmo. Tendo isso em vista, optei por colocar mais Cards de perguntas frequentes (melhor descrevendo as dúvidas) e no         final um link para "mais dúvidas". Coloquei 8 Cards mas há a possibilidade de aumentar, ou reduzir esse número visto que o              carregamento das mesmas está sendo feito dinamicamente no Back-end.
5.	Mantive as cores padrões do Itaú Personnalité, respeitando a marca.
6.	No lugar de Cards com ícones na parte de "outras formas de atendimento" optei por utilizar imagens (mais chamativas e mais              explicativas). Procurei as imagens na internet e tentei criar um padrão no Photoshop, mas obviamente isso iria passar pelo pessoal      de UX. É só uma ideia. Também julguei necessário colocar uma breve descrição logo abaixo para facilitar a acessibilidade.
7.	Nas partes que não modifiquei, tentei ser o mais fiel possível na reprodução, obedecendo até mesmo o hover dos elementos.
8.	Dividi dúvidas e categorias em componentes Angular separados para facilitar a reutilização do código futuramente. Cada um com seus      SCSS isolados e com SCSS global e variáveis compartilhado entre eles. Não achei necessário fazer o mesmo com "outras formas de          atendimento" por não ser uma sessão que muda com facilidade.
9.	Instalei o Angular/http somente para simular a chamada de uma API que iria retornar as dúvidas frequentes e as categorias, creio        que a melhor forma de implementar essa tela seja dessa maneira, dinamicamente. Porém como não criei essa API, fiz também um método      para retornar as dúvidas e categorias mockadas.
10.	Deixei um TODO na parte de redirecionamento de dúvida e categoria específica (click) por não saber exatamente como funciona as          outras páginas subsequentes.
11.	Consertei os testes existentes padrões (karma e Jasmine) injetando as dependências necessárias e criei mais alguns.

# Acessibilidade

1.	Nos botões clicáveis adicionei o evento keydown para facilitar a acessibilidade sem mouse.
2.	Adicionei aria-label nos elementos dinâmicos sem descrição e também o atributo "alt" para as imagens.
3.	Adicionei o tabindex para navegação via teclado. Tendo em vista que a página atual de ajuda do Itaú não tinha essa funcionalidade.
4.	Procurei adicionar um título para cada partial do Angular.