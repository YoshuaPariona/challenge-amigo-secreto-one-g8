export const renderResult = ( result ) => {

    const resultTitle = document.querySelector('.result-title');
    resultTitle.innerHTML = `Tu amigo secreto es 
        <span class="result">${ result }</span>` ;
    
    result.append(resultTitle);
}
