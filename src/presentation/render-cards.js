export const renderCards = ( cards, amigos ) => {
    
    cards.innerHTML = '';

    amigos.forEach( ( amigo ) => {
        const nameCard = document.createElement('div');
        nameCard.className = 'name-card';
        nameCard.innerHTML = `<p>${ amigo }</p>`;
        cards.append(nameCard)
    });
}