/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar de o body tem a classe modo escuro
        - Passo 7 remover a classe do modo-escuro do body
        - passo 8 mudar a imagem para o sol
   */

// obj 1 passo - 1
const botaoalterarTema = document.getElementById("botao-alterar-tema");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
// obj 1 passo - 2
const body = document.querySelector("body");




botaoalterarTema.addEventListener("click", () => {
    // obj 1 passo - 3
const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
body.classList.remove("modo-escuro");
  // obj 2 passo - 6
  if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    body.classList.add("modo-escuro");
    // obj 1 passo - 5
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
  // obj 1 passo - 4
});
