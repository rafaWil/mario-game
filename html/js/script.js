const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump'); //Quando a animacao acontecer, vai remover */
    }, 500);

}


document.addEventListener('keydown', jump);