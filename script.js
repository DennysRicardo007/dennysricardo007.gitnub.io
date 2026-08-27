// Aula 1

// console.log("JavaScript conectado!");
// console.log("Document");

// const titulo = document.querySelector("h1");
// console.log(titulo);

// const hero = document.querySelector("#hero");
// console.log(hero.textContent);


// const linkSocial = document.querySelector(".link-social");
// console.log(link-social);
// console.log(linkSocial.textContent);


// const titulo = document.querySelector("h1");
// titulo.textContent = "Maria dos Santos | Desenvolvedora Web";

// const hero = document.querySelector("#hero");
// const apresentacao = hero.querySelector("p");
// apresentacao.textContent =
//     "Olá! Sou Maria e estou começando minha jornada no desenvolvimento web.";

// titulo.style.color = "red";
// hero.style.backgroundColor = "lightblue";

// document.getElementById("hero");
// console.log(hero)

///////////////////////////////////////////////////////////////////////////////////////////
//Aula 2

// Ao clicar no botão aparece o texto no console log
//const botaoSobre = document.getElementById("botao-sobre");

//botaoSobre.addEventListener("click", function () {
//    console.log("O botão foi clicado!");
// });


//Ao clicar no botão, muda o título do site

//const titulo = document.querySelector("h1");
//botaoSobre.addEventListener("click", function () {
//    titulo.textContent = "Obrigada por visitar meu portfólio!";
//});

//Ao clicar no botão vai para o sobre
//const sobre = document.getElementById("sobre");

//botaoSobre.addEventListener("click", function () {
//    sobre.scrollIntoView();
//});


//Muda o texto e vai para o sobre
//botaoSobre.addEventListener("click", function () {

//   titulo.textContent = "Conheça um pouco mais sobre mim!";

//    sobre.scrollIntoView();

//});

//Não executar a função imediatamente, criando uma função

//function mostrarSobre() {
//    titulo.textContent = "Conheça um pouco mais sobre mim!";
//    sobre.scrollIntoView();
//}

//botaoSobre.addEventListener("click", mostrarSobre);

//Botão habilidades ao clicar vai para sessão habilidades
//const botaoHabilidades =
//    document.getElementById("botao-habilidades");

//const habilidades =
//    document.getElementById("habilidades");

//botaoHabilidades.addEventListener("click", function () {
//    habilidades.scrollIntoView();
//});

//Mouseover

//titulo.addEventListener("mouseover", function () {
//   console.log("Mouse sobre o título!");
//});

///////////////////////////////////////////////////////////////////////////////////
// AULA 3

//CRIA UM NOVO ELEMENTO NA PÁGINA

//const sobre = document.getElementById("sobre");
//const novoParagrafo = document.createElement("p");
//novoParagrafo.textContent = "Também tenho interesse em acessibilidade e experiência do usuário.";
//sobre.appendChild(novoParagrafo);


// BOTÃO VER MAIS

const botaoVerMais = document.getElementById("btn-ver-mais");
const sobreExtra = document.getElementById("sobre-extra");
 
botaoVerMais.addEventListener("click", function () {
 
    if (sobreExtra.style.display === "none") {
        sobreExtra.style.display = "block";
        botaoVerMais.textContent = "Ver menos";
    } else {
        sobreExtra.style.display = "none";
        botaoVerMais.textContent = "Ver mais";
    }
 
});

// MOUSE SAIU DO ELEMENTO
//botaoVerMais.addEventListener("mouseout", function () {
//    console.log("O mouse saiu do botão!");
//});


//CAMPO DE MENSAGEM DO FORMULÁRIO
//const mensagem = document.getElementById("mensagem");

//mensagem.addEventListener("input", function () {
//    console.log(mensagem.value);
//});

// FORMULÁRIO

//const formulario = document.querySelector("form");
//const nome = document.getElementById("nome");
//const email = document.getElementById("email");
//const assunto = document.getElementById("assunto");
//const mensagem = document.getElementById("mensagem");

//formulario.addEventListener("submit", function(event) {

//    console.log("Formulário enviado!");

//});

//formulario.addEventListener("submit", function(event) {

//    event.preventDefault();

//    console.log("Formulário enviado!");

//});

// CAPTURANDO OS DADOS DO FORMULÁRIO

//formulario.addEventListener("submit", function(event) {

//    event.preventDefault();

//    console.log("Nome:", nome.value);
//    console.log("E-mail:", email.value);
//    console.log("Assunto:", assunto.value);
//    console.log("Mensagem:", mensagem.value);

//});

//RESPOSTA AO USUÁRIO
//const mensagemSucesso =
//    document.getElementById("mensagem-sucesso");
//mensagemSucesso.textContent = "Mensagem enviada com sucesso!";

// CONTAR CARACTERES

//const contador = document.getElementById("contador");

//mensagem.addEventListener("input", function () {
//    contador.textContent = mensagem.value.length + " caracteres";
//});
