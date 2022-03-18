import axios from "axios"

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
export const SIGNOUT_START = "SIGNOUT_START"
export const SIGNOUT_COMPLETE = "SIGNOUT_COMPLETE"
export const SIGNOUT_FAIL = "SIGNOUT_FAIL"

// NEWS ACTIONS
export const FETCH_NEWS_START = "FETCH_NEWS_START"
export const FETCH_NEWS_COMPLETE = "FETCH_NEWS_COMPLETE"
export const FETCH_NEWS_FAIL = "FETCH_NEWS_FAIL"

// // CURRENCY LIST ACTIONS
// export const FETCH_CURRENCIES_START = "FETCH_CURRENCIES_START"
// export const FETCH_CURRENCIES_COMPLETE= "FETCH_CURRENCIES_COMPLETE"
// export const FETCH_CURRENCIES_FAIL= "FETCH_CURRENCIES_FAIL"

// FAVORITE NEWS LIST ACTIONS
export const ADD_FAVORITE_NEWS = "ADD_FAVORITE_NEWS"
export const REMOVE_FAVORITE_NEWS = "REMOVE_FAVORITE_NEWS"

export const fetchSite = () => (dispatch) => {
    dispatch({type: FETCH_SITE_START})
    axios
    .get('https://fullstack-trading-app.herokuapp.com/')
    .then(data => {
        dispatch({type: FETCH_SITE_COMPLETE, payload: data.data})
    })
    .catch(err=> {
        dispatch({type: FETCH_SITE_FAIL, payload: err.message})
    })
}

export const registerUser = (reg) => (dispatch) => {
    dispatch({type: REGISTER_START})
    axios.post('https://fullstack-trading-app.herokuapp.com/auth/register', reg)
    .then(data => {
        dispatch({type: REGISTER_COMPLETE, payload: reg})
    })
    .catch(err => dispatch({type: REGISTER_FAIL, payload: err.message})) 
}

export const loginUser = (newLogin) => (dispatch) => {
    dispatch({type: FETCH_SITE_START})
    axios
    .post('https://fullstack-trading-app.herokuapp.com/auth/login', newLogin)
    .then(data => {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('username', data.data.username);
    })
}


export const fetchNews = () => (dispatch) => {
    dispatch({type: FETCH_NEWS_START})
    axios
    .get('https://finnhub.io/api/v1/news?category=forex&minId=10&token=c8ofbuaad3iatn99j4qg')
    .then(data => {
        dispatch({type: FETCH_NEWS_COMPLETE, payload: data.data})
    })
    .catch(err=> {
        dispatch({type: FETCH_NEWS_FAIL, payload: err.message})
    })
}

export const addFavoriteNews = (news) => (dispatch) => {
    dispatch({type: ADD_FAVORITE_NEWS, payload: news})
}

export const removeFavoriteNews = (news) => (dispatch) => {
    dispatch({type: REMOVE_FAVORITE_NEWS, payload: news})
}
