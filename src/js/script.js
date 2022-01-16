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
    (imagens[imagemAtual].classList.add('mostrar'));
}

setaAvancar.addEventListener('click', () => {
    if(imagemAtual === (imagens.length - 1)){
        console.log('acabou as imagens');
        if (imagemAtual != -1) {
            setaAvancar.style.opacity = .5;
            setaVoltar.style.opacity = 1;
        }
        // Se a imagem atual for diferente de 2 (no caso seria a ultima imagem apresentada), se clicado mais uma vez ele ficará opaco enquanto o botão voltar ficará mais claro;
        return;
    }

    imagemAtual++;

    HiddenImages();
    ShowImages();
});

setaVoltar.addEventListener('click', () => {
    if (imagemAtual === 0) {
        console.log('acabou as imagens');
        if (imagemAtual != 1) {
            setaVoltar.style.opacity = .5;
            setaAvancar.style.opacity = 1;
        }
        // Se a imagem atual for diferente de -1 (no caso seria a imagem apresentada logo de cara na page), se clicado mais uma vez ele ficará opaco enquanto o botão avançar ficará mais claro;
        return;
    }
    imagemAtual--;

    HiddenImages();
    ShowImages();
});