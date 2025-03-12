export const renderButtons = ( buttons, drawNames, resetNames ) => {
    const drawBtn = document.createElement('button');
    const resetBtn = document.createElement('button');

    drawBtn.innerText = 'Sortear amigos!';
    drawBtn.className = 'sort-button';
    
    resetBtn.innerText = 'Borrar todo';
    resetBtn.className = 'reset-button';

    buttons.append( drawBtn, resetBtn );

    drawBtn.addEventListener('click', () => {
        drawNames();
    })
    
    resetBtn.addEventListener('click', () => {
        resetNames();
    })
}