import {
    FETCH_NEWS_START,
    FETCH_NEWS_COMPLETE,
    FETCH_NEWS_FAIL,
    ADD_FAVORITE_NEWS,
    REMOVE_FAVORITE_NEWS,
} from '../actions/actions'

const initialState = 
        {
            siteData: [],
            isLoading: false,
            error: '',
            users: '',
            favorites: []
        }

export default function reducer(state = initialState, action){
    switch(action.type){
        case FETCH_NEWS_START:
            return {
                ...state, siteData: state.siteData, error: "", users: "", isLoading: true
            }
        case FETCH_NEWS_COMPLETE: 
            return {
                ...state, siteData: action.payload, error: "", users: "", isLoading: false
            }
        case FETCH_NEWS_FAIL:
            return {
                ...state, siteData: state.siteData, error: action.payload, users: "", isLoading: false
            }
        case ADD_FAVORITE_NEWS:
            return {
                ...state, favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE_NEWS:
            let newState = state.favorites.filter(news => news !== action.payload)
            return {
                ...state, favorites: newState,
            }
        default: return state;
    }
}