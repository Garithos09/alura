let listaGenerica = [1,2,3,4,'Laura', 'LA Sufrida', 'ashley',5,6];
let LenguagesDeProgramacion = ['Python', 'Java', 'PHP', 'C#', 'C++', 'Ruby', 'Swift', 'Go', 'Kotlin'];


let titulo = document.querySelector('h1');
titulo.innerHTML = 'lenguajes de programacion aprendidos';

let lenguajes = document.getElementById('lenguajesAprendidos');
for(let i=0; i<LenguagesDeProgramacion.length;i++){
    lenguajes.innerHTML += '<li>'+ LenguagesDeProgramacion[i] +'</li>';
}


function agregarLenguaje(){
    let lenguajeNuevo = document.getElementById('nuevoLenguaje').value;
    LenguagesDeProgramacion.push(lenguajeNuevo);
    
}

