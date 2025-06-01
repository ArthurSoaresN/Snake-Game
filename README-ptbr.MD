# 🐍 Jogo da cobrinha

Um clássico jogo da cobrinha desenvolvido em JavaScript, com o objetivo principal de praticar a sintaxe da linguagem, revisar funções, aprender sobre manipulação do Canvas e entender conceitos fundamentais de programação web.

📘 [Read in English](README.md)

---

## 🎯 Objetivo do Projeto

Este projeto foi criado como um exercício prático para aprender e solidificar conhecimentos em:

* **Sintaxe Básica do JavaScript**: Variáveis, tipos de dados (arrays, objetos), operadores, etc.
* **Estruturas de Controle de Fluxo**: Uso de `if`, `else`, `while` e `for` loops.
* **Funções**: Definição e chamada de funções.
* **Manipulação da API HTML Canvas**: Desenho de formas, controle de cores e animações.
* **Manipulação de Arrays e Objetos**: Gerenciamento das posições da cobra e da comida.
* **Eventos do Navegador**: Captura de entrada do usuário (teclado) para movimentação.
* **Lógica do Jogo**: Implementação de regras básicas de um jogo de arcade.
* **Geração de Posições Aleatórias**: Para a comida.
* **Tratamento de Colisões**: Com a própria cobra e com os limites do jogo.

---

## ✨ Funcionalidades

* Interface visual básica do jogo.
* Personagem (cobra) e seus movimentos controlados pelo teclado.
* Geração de "maçãs" em posições aleatórias no tabuleiro.
* Detecção quando a maçã é "comida" pelo jogador.
* Adição de áudio quando o jogador come a maçã.
* Detecção de colisão (com os limites do jogo e com o próprio corpo da cobra).
* Tela de "Game Over" com pontuação.
* Funcionalidade de "Jogar Novamente".

---

## 🚀 Como Rodar o Jogo

Para jogar, siga estes passos simples:

1.  **Clone o repositório** (ou baixe os arquivos `index.html`, `style.css`, `script.js` e a pasta de áudio diretamente).
2.  **Abra o arquivo `index.html`** em seu navegador web (Google Chrome, Firefox, etc.). Você pode simplesmente arrastar o arquivo para a janela do navegador ou usar uma extensão como o "Live Server" do VS Code para uma experiência de desenvolvimento.
3.  Siga as instruções na tela para começar a jogar!

---

## 💡 Lições Aprendidas e Desafios Superados

Durante o desenvolvimento deste projeto, explorei e solidifiquei conhecimentos em:

* **Desenho no Canvas**: Entendimento de como usar `fillRect`, `fillStyle` e `clearRect` para criar e animar elementos visuais.
* **Gerenciamento de Estado do Jogo**: Como manter o controle da cobra (array de segmentos), da comida e do estado do jogo (jogando, game over).
* **Lógica de Movimentação da Cobra**: Adicionar e remover segmentos do array da cobra para simular o movimento e o crescimento.
* **Detecção de Colisões**: Implementação de lógica para verificar se a cabeça da cobra colidiu com as paredes ou com seu próprio corpo.
* **Manipulação de Eventos de Teclado**: Captura de `keydown` para controlar a direção da cobra.
* **Organização de Código**: Estruturação de funções para diferentes partes da lógica do jogo (desenho, atualização, colisão, etc.).
* **Integração de Áudio**: Adição de efeitos sonoros simples.

---

## 👨‍💻 Contribuição

Este é um projeto de aprendizado, mas sinta-se à vontade para inspecionar o código, sugerir melhorias ou utilizá-lo como base para seus próprios estudos.
Tive acesso a esta aula através do canal do YouTube 'Manual do Dev'.
Os visuais foram inspirados no jogo da cobrinha do Google.

---

## 📄 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).