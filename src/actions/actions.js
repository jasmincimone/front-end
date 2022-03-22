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
export const LOGOUT_START = "LOGOUT_START"
export const LOGOUT_COMPLETE = "LOGOUT_COMPLETE"
export const LOGOUT_FAIL = "LOGOUT_FAIL"
export const FETCH_USER = "FETCH_USER"

// NEWS ACTIONS
export const FETCH_NEWS_START = "FETCH_NEWS_START"
export const FETCH_NEWS_COMPLETE = "FETCH_NEWS_COMPLETE"
export const FETCH_NEWS_FAIL = "FETCH_NEWS_FAIL"

// FOREX ACTIONS
export const FETCH_FOREX_START = "FETCH_FOREX_START"
export const FETCH_FOREX_COMPLETE = "FETCH_FOREX_COMPLETE"
export const FETCH_FOREX_FAIL = "FETCH_FOREX_FAIL"

// FAVORITE NEWS LIST ACTIONS
export const ADD_FAVORITE_NEWS = "ADD_FAVORITE_NEWS"
export const REMOVE_FAVORITE_NEWS = "REMOVE_FAVORITE_NEWS"

const token = ('; '+ document.cookie).split(`; token=`).pop().split(';')[0];

const instance = axios.create({ 
    baseURL:'http://localhost:8000',   
    timeout: 1000,  
    Cookies :{ 'token': `Bearer ${token}`},
    withCredentials: true,
})

export const fetchUser = () => (dispatch) => {
    dispatch({type: FETCH_SITE_START})
    instance
    .get('https://fullstack-trading-app.herokuapp.com/mynews')
    .then(data => {
        dispatch({type: FETCH_USER, payload: data.data})
        console.log(data)
    })
    .catch(err=> {
        dispatch({type: FETCH_SITE_FAIL, payload: err.message})
    })
}

export const fetchSite = () => (dispatch) => {
    dispatch({type: FETCH_SITE_START})
    instance
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
    instance.post('/auth/register', reg)
    .then(data => {
        dispatch({type: REGISTER_COMPLETE, payload: reg})
    })
    .catch(err => dispatch({type: REGISTER_FAIL, payload: err.message})) 
}

export const loginUser = (newLogin) => (dispatch) => {
    dispatch({type: FETCH_SITE_START})
    console.log(newLogin);
    instance
    .post('/auth/login', newLogin, {withCredentials: true})
    .then(data => {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('username', data.data.username);
    })
}

export const logOut = () => (dispatch) => {
    dispatch({type: LOGOUT_START})
    instance
    .post (`/logout`, { withCredentials: true})
    .then(data => {dispatch({type: LOGIN_COMPLETE, payload: data})
        console.log(data)})
    .catch(err => {
        dispatch({type: LOGOUT_FAIL, payload: err.message})
        console.log(err.message)
    })
}

export const fetchNews = () => (dispatch) => {
    dispatch({type: FETCH_NEWS_START})
    axios
    .get('https://finnhub.io/api/v1/news?category=general&minId=10&token=c8ofbuaad3iatn99j4qg')
    .then(data => {
        dispatch({type: FETCH_NEWS_COMPLETE, payload: data.data})
    })
    .catch(err => {
        dispatch({type: FETCH_NEWS_FAIL, payload: err.message})
    })
}

export const addFavoriteNews = (newsId) => (dispatch) => {
    dispatch({type: FETCH_SITE_START})
    instance.put(`/mynews/${newsId}`, newsId)
    .then(data => {
        dispatch({type: ADD_FAVORITE_NEWS, payload: data})
        console.log(data);
    })
    .catch(err => dispatch({type: FETCH_SITE_FAIL, payload: err.message})) 
}

export const removeFavoriteNews = (news) => (dispatch) => {
    dispatch({type: REMOVE_FAVORITE_NEWS, payload: news})
}

export const fetchForex = () => (dispatch) => {
    dispatch({type: FETCH_FOREX_START})
    axios
    .get('https://finnhub.io/api/v1/forex/symbol?exchange=oanda&token=c8ofbuaad3iatn99j4qg')
    .then(data => {
        dispatch({type: FETCH_FOREX_COMPLETE, payload: data.data})
    })
    .catch(err => {
        dispatch({type: FETCH_NEWS_FAIL, payload: err.message})
    })
}