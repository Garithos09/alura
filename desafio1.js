// DESAFIO 1 - CALCULADORA DE IMC
function calcularMasaCorporal(){
    let altura = document.getElementById('altura').value;
    let peso   = document.getElementById('peso').value;
    let imc = peso/(altura * altura);
   
    return imc;
}
function mostrarResultado(imc){
    resultado = document.querySelector('p');
    resultado.innerHTML = `Tu indice de masa corporal es ${imc.toFixed(2)}`;
}

let imcValor = calcularMasaCorporal();
mostrarResultado(imcValor);

//DESAFIO 2 FACTORIAL
function factorial(){
    let numero = document.getElementById('numero').value;
    let resultado = 1;
    for(let i=1; i<=numero; i++){
        resultado = resultado * i;
    }
    let respuesta = document.querySelector('#resultadoFactorial');
    respuesta.innerHTML = `El factorial del ${numero} es ${resultado}`;
}

// DESAFIO 3 - CONVERTIR USD A REALES
function convertirDolares(){
    let dolar = document.getElementById('usd').value;
    let real = dolar * 4.80;

    let respuesta = document.querySelector('#resultadoUsd');
    respuesta.innerHTML = 'El valor del dolar en REALES es: ' + real;
}

//  DESAFIO 4  CALCULAR PERIMETRO DE UN CUADRADO
function calcularPerimetro(){
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura2').value);
    
    let area = (base * altura);
    let perimetro = (base + altura) * 2;

    console.log(perimetro);
    console.log(area);

    let resultado = document.querySelector('#resultadoPerimetro');
    resultado.innerHTML = 'El perimetro del rectangulo es: ' + perimetro + ' y el area es: ' + area;
}
