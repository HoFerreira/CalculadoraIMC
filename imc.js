const calcular = document.getElementById('calcular');
const result = document.getElementById('resutlado');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = 'está abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns.';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade de grau 1.'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau 2.';
        } else {
            classificacao = 'com obesidade grau 3. Cuidado!'
        }

        result.textContent = `${nome} seu IMC é ${valorIMC}. Você está ${classificacao}`;

    } else {
        result.textContent = 'Preencha todos os campos.';
    }
}

calcular.addEventListener('click', imc);