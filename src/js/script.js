const imagens = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function HiddenImages() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
}

function ShowImages() {
    imagens[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', () => {
    if(imagemAtual === (imagens.length - 1)){
        console.log('acabou as imagens');
        return;
    }

    imagemAtual++;

    HiddenImages();
    ShowImages();
});

setaVoltar.addEventListener('click', () => {
    if (imagemAtual === 0) {
        console.log('acabou as imagens');
        return;
    }
    imagemAtual--;

    HiddenImages();
    ShowImages();
});