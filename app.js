let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 3;


console.log(numeroSecreto);

function asignarTexto(elemento, texto){
    // let es para declarar una variable 
    let elementoHTML = document.querySelector(elemento);
    // innerHTML es para cambiar el contenido de un elemento
    elementoHTML.innerHTML = texto;
    return;
}

//CREAMOS LA FUNCION PARA USAR EL EVENTO ONCLICK EN EL BOTON
function verificarIntento(){
    //parseInt es para convertir un string a un numero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTexto('p',`Felicidades has adivinado el numero secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto 
        if(numeroDeUsuario > numeroSecreto){
            asignarTexto('p','El numero secreto es menor');
        } else{
            asignarTexto('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    // VERIFICA QUE EL ARRAY NO SUPERE EL TAMAÑO ELEGIDO    

    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTexto('p','Ya se han agotado los numeros');
    }else{
        

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

}

function condicionesIniciales(){
    asignarTexto('h1','Juego del numero secreto');
    asignarTexto('p', 'Dime un numero del 1 al '+numeroMaximo+'');
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    // limpiar la caja de texto
    limpiarCaja();
    // indicar el mensaje de intervalo de numeros
    // generar un nuevo numero secreto
    // reiniciar los intentos
    condicionesIniciales();
    // desabilitar el boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();

