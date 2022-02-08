// funcao para tratar o data o parametro rates desestructering o objeto
const handleRates = ({rates}) => {
    const ratesEntries = Object.entries(rates);
    ratesEntries.forEach(([currency, rates])=>{
        //renderizar os elementos na tela
        renderRates(currency,rates);
    });
}
// funçao para renderizar os elementos li na tela
const renderRates = (currency, rates) => {
    const ul = document.getElementById('currency-list');
    const li = document.createElement('li');
    li.innerHTML = `<b>${currency}</b>: ${rates.toFixed(3)}`;
    ul.appendChild(li);
}

const setupHandlers = () => {
    const searchButton = document.querySelector('#search-button');
}