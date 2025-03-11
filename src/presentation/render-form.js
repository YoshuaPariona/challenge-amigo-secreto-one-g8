import { addName } from "./render-name.js";

export const renderForm = ( form ) => {
    const inputName = document.createElement('input');
    const btnAdd = document.createElement('button');

    inputName.type = 'text';
    inputName.id = 'amigo';
    inputName.className = 'input-name';
    inputName.placeholder = 'Escribe un nombre.';

    btnAdd.innerText = 'Agregar';
    btnAdd.className = 'button-add';

    form.append( inputName, btnAdd );

    btnAdd.addEventListener('click', () => {
        if( !inputName.value.trim() ) {
            alert('Por favor, inserte un nombre válido.')
        }
        addName( inputName.value );
        inputName.value = '';
    })
}