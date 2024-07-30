const mario = document.querySelector('.mario'); /*Funcao para pegar a imagem do mario */
const pipe = document.querySelector('.pipe'); /* Funcao para trabalhar com a imagem do pipe */

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump'); //Quando a animacao acontecer, vai remover */
    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; //Pegando imagem do pipe para usarmos a posição 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //Pegando imagem mario e todos os estilos aplicados, usando + para fazer conversao em valores numericos
    
    if (pipePosition <= 120) { //Condicao para verificar posicao do mario com o pipe

        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`; //Quando ele tocar no pipe ele para nesta posicao 
    }

}, 10);


document.addEventListener('keydown', jump); // Quando clicar em qualquer botao executar minha ação de pular 