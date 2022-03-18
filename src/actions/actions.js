import axios from "axios"
// import finnhub
// const finnhub = require('finnhub');

// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = "c8ofbuaad3iatn99j4qg"
// const finnhubClient = new finnhub.DefaultApi()

// finnhubClient.forexSymbols("OANDA", (error, data, response) => {
//   console.log(data)
// });


// SITE ACTIONS
export const FETCH_SITE_START = "FETCH_SITE_START"
export const FETCH_SITE_COMPLETE = "FETCH_SITE_COMPLETE"
export const FETCH_SITE_FAIL = "FETCH_SITE_FAIL"

// USER ACTIONS
export const REGISTER_START = "REGISTER_START"
export const REGISTER_COMPLETE = "REGISTER_COMPLETE"
export const REGISTER_FAIL = "REGISTER_FAIL"
export const LOGIN_START = "LOGIN_START"
export const LOGIN_COMPLETE = "LOGIN COMPLETE"
export const LOGIN_FAIL = "LOGIN_FAIL"

// // CURRENCY LIST ACTIONS
// export const FETCH_CURRENCIES_START = "FETCH_CURRENCIES_START"
// export const FETCH_CURRENCIES_COMPLETE= "FETCH_CURRENCIES_COMPLETE"
// export const FETCH_CURRENCIES_FAIL= "FETCH_CURRENCIES_FAIL"

// // FAVORITE CURRENNCY LIST ACTIONS
// export const ADD_FAVORITE = "ADD_MYCURRENCIES"
// export const REMOVE_FAVORITE = "REMOVE_<MYCURRENCIES>"

export const fetchSite = () => (dispatch) => {
    dispatch({type: FETCH_SITE_START})
    axios
    .get('https://fullstack-trading-app.herokuapp.com/')
    .then(data => {
        console.log(data.data.data)
        dispatch({type: FETCH_SITE_COMPLETE, payload: data.data.data})
    })
    .catch(err=> {
        console.log(err.message)
        dispatch({type: FETCH_SITE_FAIL, payload: err.message})
    })
}

export const registerUser = (reg) => (dispatch) => {
    dispatch({type: REGISTER_START})
    axios.post('https://fullstack-trading-app.herokuapp.com/auth/register', reg)
    .then(data => console.log(data))
        dispatch({type: REGISTER_COMPLETE, payload: reg})
    .catch(err => dispatch({type: REGISTER_FAIL, payload: err.message})) 
}

export const loginUser = (newLogin) => (dispatch) => {
    console.log(newLogin);
    dispatch({type: FETCH_SITE_START})
    axios
    .post('https://fullstack-trading-app.herokuapp.com/auth/login', newLogin)
    .then(data => {
        console.log(data.data.token)
        console.log(data.data.username)
        console.log(data.data)

        localStorage.setItem('token', data.data.token);
        localStorage.setItem('username', data.data.username);
    })
}

// export const fetchCurrencies = () => (dispatch) => {
//     dispatch({type: FETCH_CURRENCIES_START})
//     axios
//     .get('')
//     .then(data => {
//         console.log(data.data.data)
//         dispatch({type: FETCH_SITE_COMPLETE, payload: data.data.data})
//     })
//     .catch(err=> {
//         console.log(err.message)
//         dispatch({type: FETCH_SITE_FAIL, payload: err.message})
//     })
// }
