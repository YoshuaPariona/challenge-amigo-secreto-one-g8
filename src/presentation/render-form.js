export const renderForm = ( form, addName ) => {
    const nameInput = document.createElement('input');
    const addBtn = document.createElement('button');

    nameInput.type = 'text';
    nameInput.className = 'name-input';
    nameInput.placeholder = 'Escribe un nombre.';

    addBtn.innerText = 'Agregar';
    addBtn.className = 'button-add';

    form.append( nameInput, addBtn );

    addBtn.addEventListener('click', () => {
        if( !nameInput.value.trim() ) {
            alert('Por favor, inserte un nombre válido.');
            return;
        }

        addName( nameInput.value );
        nameInput.value = '';
    })
}