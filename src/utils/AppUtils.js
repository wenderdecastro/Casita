import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";


export const AppUtils = {
    formatNumToCurrency: formatNumToCurrency
}

function formatNumToCurrency(amount = 0) {
    return formatCurrency({amount: amount, code: 'BRL'})[0]
}