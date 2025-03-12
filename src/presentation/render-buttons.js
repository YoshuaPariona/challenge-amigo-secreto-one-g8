export const renderButtons = ( buttons, drawNames, eraseNames ) => {
    const drawBtn = document.createElement('button');
    const resetBtn = document.createElement('button');

    drawBtn.innerText = 'Sortear!';
    drawBtn.className = 'sort-button';
    
    resetBtn.innerText = 'Borrar todo';
    resetBtn.className = 'sort-button';

    buttons.append( drawBtn, resetBtn );

    drawBtn.addEventListener('click', () => {
        drawNames();
    })
    resetBtn.addEventListener('click', () => {
        eraseNames();
    })
}