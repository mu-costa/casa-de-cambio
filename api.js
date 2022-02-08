//função para acessar o endpoint da API
// o endpoint : https://api.exchangerate.host/latest#/
const fetchCurrency = async () => {
    // espera o resultado do endpoint
    const result = await fetch(`https://api.exchangerate.host/latest?=USD`);
    // transforma o retorondo do endoint em objeto utilizando o metodo json()
    const data = await result.json();
    // invoca a funcao handleRates para manipular o data
    handleRates(data);
}
fetchCurrency();