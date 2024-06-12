import { decode, encode } from 'base-64'
import { AppStorage, AppStorageKeys } from '../utils/AppStorage';
import { jwtDecode } from 'jwt-decode';

if (!global.atob) {
    global.atob = decode
}

if (!global.btoa) {
    global.btoa = encode
}

export async function tokenDecode() {


    const token = await AppStorage.read(AppStorageKeys.token)

    if (token === null) {
        return;
    }

    const decoded = jwtDecode(token)

    
    return {
        monthlyIcome: decoded.MonthlyIncome,
        necessities: decoded.Necessities,
        savings: decoded.Savings,
        wants: decoded.Wants,
        email: decoded.email,
        name: decoded.name,
        id: decoded.jti,
    }
}
