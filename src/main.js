import { renderForm } from "./presentation/render-form.js";
import { renderCards } from "./presentation/render-cards.js";
import { renderButtons } from "./presentation/render-buttons.js";
import { renderResult } from "./presentation/render-result.js";

let amigos = [];

const form = document.querySelector('.name-form');
const cards = document.querySelector('.name-cards');
const buttons = document.querySelector('.action-buttons');
const regalo = document.querySelector('.regalo-image');

const addName = ( name ) => {
    if( amigos.length === 20 ) {
        alert('Has alcanzado el número máximo de amigos');
        return;
    }
    amigos.push( name );
    renderCards( cards, amigos );
}

const drawNames = () => {
    if(amigos.length < 2) {
        alert('Agrega al menos 2 nombres')
        return;
    }
    const indice = Math.floor( Math.random() * amigos.length );
    renderResult( amigos[indice] );
    regalo.classList.add('regalo-animation');
    setTimeout(() => {
        regalo.classList.remove('regalo-animation');
    },800)
}

const resetNames = () => {
    if(amigos.length === 0) {
        return;
    }
    amigos = [];
    renderCards( cards, amigos );
}

renderForm( form, addName );
renderButtons( buttons, drawNames, resetNames );