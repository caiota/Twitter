# Controle de Feed para o Twitter

Olá, esse é o GitHub da Extensão Controle de Feed para o Twitter, uma extensão que eu fiz para combater bots e coisas indesejadas no Twitter, além de ter várias melhorias visuais que podem ser aplicadas juntas ou não.

Esta extensão tem uma vasta quantidade de recursos pra personalizar visualmente o twitter, removendo coisas indesejadas como Anúncios, tweets baseados em padrões pre-definidos ou palavras definidas por você.

# Os Recursos da Extensão (Até a versão 1.13.1)

- ### Remover Tweets Baseados em Idiomas

Com essa extensão você pode remover Tweets que contenham caracteres em Outros Idiomas nos tweets, pode ser usada para filtrar e remover tweets em Outros Idiomas.
Os caracteres suportados até agora são:
- Amárico
- Japonês
- Chinês
- Russo
- Árabe
- Hebraico
- Coreano
- Indo-Arianas (como Hindí e Nepalês)
- Vietnamita
- Tailândes
- Grego
 Os tweets são escaneados usando padrões RegEx, como **'\\uAC00-\\uD7AF\\u1100-\\u11FF\\u3130-\\u318F'** e afetam todo o conteúdo do Tweet (oque pode e deve afetar pessoas com caracteres especiais nos Nomes)

![Lista de Idiomas Suportados](img/idiomas.png)









- ### Remover Tweets baseado em Palavras pre-definidas por você
  Você também pode remover tweets que contenham palavras ou termos especificos definidos por você, usando da forma certa pode ser eficiente contra muitos tipos de BOTS e SPAMS. Esta função suporta o Uso de RegEx nas palavras para escanear usando Filtros super personalizados da sintaxe RegEx!
  Também suporta apenas ocultar a palavra encontrada ao invés de remover todo o tweet.
  ![Lista predefinida de palavras banidas](img/)
