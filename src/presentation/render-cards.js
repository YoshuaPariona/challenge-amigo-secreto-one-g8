export const renderCards = ( cards, amigos ) => {
    cards.innerHTML = '';
    let columnCards = createColumn( cards );

    amigos.forEach( ( amigo, index ) => {
        if( index > 0 && index % 4 === 0 ){
            columnCards = createColumn( cards );
        } 
        const nameCard = createCard( amigo, index, amigos, cards );
        columnCards.append(nameCard);
    });

}

const createColumn = ( cards ) => {
    const column = document.createElement('div');
    column.className = 'column-cards';
    cards.append(column);
    return column;
}

const createCard = ( amigo, index, amigos, cards ) =>{
    const card = document.createElement('div');
    card.className = 'name-card';

    const name = document.createElement('p');
    name.className = 'name-text';
    name.innerHTML = amigo;

    const btns = document.createElement('div');
    btns.className = 'inner-card-buttons';

    const editBtn = document.createElement('img');
    const eraseBtn = document.createElement('img');
    editBtn.src = './assets/edit-icon.svg';
    editBtn.height = 32;
    eraseBtn.src = './assets/erase-icon.svg';
    eraseBtn.height = 32;

    btns.append(editBtn, eraseBtn)

    card.append(name, btns);

    editBtn.addEventListener('click', () => {
        const newName = prompt('Edita el nombre del amigo:', amigo);
        if( !newName.trim()) {
            alert('Ingrese un nombre válido');
            return;
        }
        amigos[index] = newName;
        renderCards( cards, amigos );
    })

    eraseBtn.addEventListener('click', () => {
        amigos.splice( index,1 );
        renderCards( cards, amigos );
    })

    return card;
}