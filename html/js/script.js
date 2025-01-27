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
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { //Condicao para verificar posicao do mario com o pipe para executar funções

        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`; //Quando ele tocar no pipe ele para nesta posicao 

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`; //Para parar o mario aonde ele encostar no tubo(PIPE)
        //Este if para quando dar game over no caso

        mario.src = 'images/game-over.png'; //Quando o mario perde muda para a imagem de game over
        mario.style.width = '75px'; //Adicionando tamanho ao meu mario quando der game over
        mario.style.marginLeft = '50px'; //Colocando uma margin mais apropriada ao visual do game over

        clearInterval(loop); //Para fazer o programa parar meu loop 

    }

}, 10);


document.addEventListener('keydown', jump); // Quando clicar em qualquer botao executar minha ação de pular 