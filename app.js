// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


const amigos = [];
//Referencias al HTML
const nuevoAmigo = document.getElementById('amigo');
const ulListaAmigos = document.getElementById('listaAmigos')

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