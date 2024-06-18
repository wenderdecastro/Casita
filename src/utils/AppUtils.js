import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";


export const AppUtils = {
    formatNumToCurrency: formatNumToCurrency
}

function formatNumToCurrency(amount = 0) {
    return formatCurrency({ amount: amount, code: 'BRL' })[0]
}

export const AppMonths = Object.freeze({
    JANEIRO: 1,
    FEVEREIRO: 2,
    MARCO: 3,
    ABRIL: 4,
    MAIO: 5,
    JUNHO: 6,
    JULHO: 7,
    AGOSTO: 8,
    SETEMBRO: 9,
    OUTUBRO: 10,
    NOVEMBRO: 11,
    DEZEMBRO: 12
});
