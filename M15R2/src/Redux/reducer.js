import * as types from "./actionTypes"

const init = {    
    isAuth: false,
}

export const AuthReducer = (state = init, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false
            };       
        default:
            return state;
    }
}