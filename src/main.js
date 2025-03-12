import { renderForm } from "./presentation/render-form.js";
import { renderCards } from "./presentation/render-cards.js";

const amigos = [];

const form = document.querySelector('.name-form');
const cards = document.querySelector('.name-cards');

const addName = ( name ) => {
    if( amigos.length === 20 ) {
        alert('Has alcanzado el número máximo de amigos');
        return;
    }
    amigos.push( name );
    renderCards( cards, amigos );
}

renderForm( form, addName );

const indice = () => Math.floor(Math.random() * amigos.length);

const sortearAmigo = () => {
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${ amigos[indice()] }</li>`;
}