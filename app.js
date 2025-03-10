// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


const amigos = [];
//Referencias al HTML
const nuevoAmigo = document.getElementById('amigo');
const ulListaAmigos = document.getElementById('listaAmigos')
const ulResultado = document.getElementById('resultado')

//Función que añade el valor del input al array
agregarAmigo = () => {
    //Validación por si está vacío o son solo espacios.
    if( !nuevoAmigo.value.trim() ) {
        alert('Por favor, inserte un nombre válido.');
        return;
    }
    //Insertar nuevos amigos en la lista del HTML
    ulListaAmigos.innerHTML += `<li>${ nuevoAmigo.value }</li>`;
    //Insertar nuevos amigos al array
    amigos.push( nuevoAmigo.value );
    //Borrar valor del input
    nuevoAmigo.value = '';
}

//Función que genera un índice en basea la cantidad de elementos en la lista
const indice = () => Math.floor(Math.random() * amigos.length);

//Función que selecciona e imprime al ganador
sortearAmigo = () => {
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${ amigos[indice()] }</li>`;
}