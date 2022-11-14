// Ativar links do menu do header

const menu = document.querySelectorAll(".menu a");

function paginaAtiva(menu) {
    const url = window.location.href;
    const href = menu.href;
    if (url.includes(href)) {
        menu.classList.add("ativo");
    }
}

menu.forEach(paginaAtiva);

// Marcar automaticamente o produto na página de orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametros) {
    const input = document.getElementById(parametros);
    if (input) {
        input.checked = true;
    }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const control = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(control);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    console.log(ativa);

    pergunta.setAttribute("aria-expanded", ativa);
}

function eventoPergunta(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPergunta);

// Galeria de imagens

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocaImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 960px)").matches;
    if (media) {
        galeriaContainer.prepend(img);
    }
}

function eventoGaleria(img) {
    img.addEventListener("click", trocaImagem);
}

galeria.forEach(eventoGaleria);

// Animação de entrada

if (window.SimpleAnime) {
    new SimpleAnime();
}
