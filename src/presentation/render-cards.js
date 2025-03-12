export const renderCards = ( cards, amigos ) => {
    
    cards.innerHTML = '';

    let columnCards = createColumn( cards );

    amigos.forEach( ( amigo, index ) => {
        //Cuando existan 4, agrega una columna
        if( index > 0 && index % 4 === 0 ){
            columnCards = createColumn( cards );
        } 
        const nameCard = createCard( amigo );
        columnCards.append(nameCard)
    });
}

const createColumn = ( cards ) => {
    const column = document.createElement('div');
    column.className = 'column-cards';
    cards.append(column);
    return column;
}

const createCard = ( amigo ) =>{
    const card = document.createElement('div');
    card.className = 'name-card';
    card.innerHTML = `<p>${ amigo }</p>`;
    return card;
}