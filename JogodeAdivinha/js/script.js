document.addEventListener('DOMContentLoaded', function () {
    const numbersecret = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;
    let kick;

    while (kick != numbersecret) {
        kick = prompt('Digite um numero entre 1 e 10');

        if (kick == numbersecret) {
            tentativas = tentativas + 1;
            alert('Você acertou o numero secreto! O numero de chutes foi: ' + tentativas + 'x');
            break;
        } else if (kick < numbersecret) {
            tentativas = tentativas + 1;
            alert('Você errou, o numero secreto é maior do que : ' + kick + ' Você chutou: ' + tentativas + 'x');
        } else {
            tentativas = tentativas + 1;
            alert('Você errou, o numero secreto é menor do que : ' + kick + ' Você chutou: ' + tentativas + 'x');
        }
    }
});
