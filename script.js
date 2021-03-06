// funcao para tratar o data o parametro rates desestructering o objeto
const handleRates = ({rates}) => {
    const ratesEntries = Object.entries(rates);
    ratesEntries.forEach(([currency, rates])=>{
        //renderizar os elementos na tela
        renderRates(currency,rates);
    });
}

// função para renderizar o titulo h2 #base
const renderBase = ({base: currency}) => {
    const h2 = document.querySelector('#base');
    h2.innerText = `Valores referentes 1 ${currency}`;
}

// funçao para renderizar os elementos li na tela
const renderRates = (currency, rates) => {
    const ul = document.getElementById('currency-list');
    const li = document.createElement('li');
    li.innerHTML = `<b>${currency}</b>: ${rates.toFixed(3)}`;
    ul.appendChild(li);
}

// reagir a iteracao do usuario com o botao 
const setupHandlers = () => {
    const searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', handleSearchEvent);
}

// capturar o que o usuario escreveu e retornar
const handleSearchEvent = () => {
    const currencyValue = document.querySelector('#currency-input');
    clearList();
    fetchCurrency(currencyValue.value);
}
// função para limpar a lista e substituir com a interação atual no botão pesquisar
const clearList = () => {
    const ul = document.getElementById('currency-list');
    ul.innerHTML = '';
}

setupHandlers();