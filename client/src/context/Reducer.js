export const initialState = {
    isLoggedIn: false,
    isWalletConnected:false,
    account:""
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
            }
            case "SET_LOGOUT":
                return {
                    ...state,
                    isLoggedIn:action.payload.isLoggedIn
                }
                case "SET_WALLET_CONNECTED":
                    return {
                        ...state,
                        isWalletConnected:action.payload.isWalletConnected,
                        account:action.payload.account
                    }
        default:
            return state;
    }
}
