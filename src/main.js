import { renderForm } from "./presentation/render-form.js";
import { renderCards } from "./presentation/render-cards.js";
import { renderButtons } from "./presentation/render-buttons.js";

let amigos = [];

const form = document.querySelector('.name-form');
const cards = document.querySelector('.name-cards');
const buttons = document.querySelector('.action-buttons');

const addName = ( name ) => {
    if( amigos.length === 20 ) {
        alert('Has alcanzado el número máximo de amigos');
        return;
    }
    amigos.push( name );
    renderCards( cards, amigos );
}

const drawNames = () => {
    const indice = Math.floor( Math.random() * amigos.length );
    console.log(amigos[indice]);
}

const eraseNames = () => {
    amigos = [];
    renderCards( cards, amigos );
}

renderForm( form, addName );
renderButtons( buttons, drawNames, eraseNames );