import axios from "axios"

// // CURRENCY ACTIONS
// export const FETCH_CURRENCIES_START = "FETCH_CURRENCIES_START"
// export const FETCH_CURRENCIES_COMPLETE = "FETCH_CURRENCIES_COMPLETE"
// export const FETCH_CURRENCIES_FAIL = "FETCH_CURRENCIES_FAIL"
export const REGISTER_COMPLETE = "REGISTER_COMPLETE"
export const REGISTER_START = "REGISTER_START"
export const REGISTER_FAIL = "REGISTER_FAIL"

export const LOGIN_USER = "LOGIN_USER"

// // FAVORITES ACTIONS
// export const ADD_FAVORITE = "ADD_FAVORITE"
// export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

// USER ACTIONS
export const registerUser = (reg) => (dispatch) => {
    dispatch({type: REGISTER_START})
    axios.post()
    .then(data => console.log(data))
    .catch(err => dispatch({type: REGISTER_FAIL, payload: err.message})) 
}

// // export const functionName = (params) => (dispatch) => {}
// export const fetchCurrencies = 
