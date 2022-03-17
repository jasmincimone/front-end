import { 
    FETCH_SITE_START, 
    FETCH_SITE_COMPLETE, 
    FETCH_SITE_FAIL, 
    REGISTER_START, 
    REGISTER_COMPLETE,
    REGISTER_FAIL, 
    LOGIN_START, 
    LOGIN_COMPLETE, 
    LOGIN_FAIL, } from "../actions/actions";
import dummyData from '../dummyData';

const initialState = {
    siteData: dummyData,
    isLoading: false,
    error: '',
    users: ''
}

console.log(dummyData)

export default function reducer(state = initialState, action){
    switch(action.type){
        case FETCH_SITE_START:
            return {
                ...state, siteData: state.siteData, error: "", users: "", isLoading: true
            }
        case FETCH_SITE_COMPLETE: 
            return {
                ...state, siteData: action.payload, error: "", users: "", isLoading: false
            }
        case FETCH_SITE_FAIL:
            return {
                ...state, siteData: state.siteData, error: action.payload, users: "", isLoading: false
            }
        case REGISTER_START:
            console.log(action.payload)
            return {
                ...state, siteData: state.siteData, error: "", users: "", isLoading: true
            }
        case REGISTER_COMPLETE:
            return {
                ...state, siteData: state.siteData, error: "", users: action.payload, isLoading: false
            }
        case REGISTER_FAIL: 
            return {
                ...state, siteData: state.siteData, error: action.payload, users: "", isLoading: false
            }
        case LOGIN_START:
            return{
                ...state, siteData: state.siteData, error: "", users: "", isLoading: true
            }
        case LOGIN_COMPLETE:
            return{
                ...state, siteData: state.siteData, error: "", users: action.payload, isLoading: false
            }
        case LOGIN_FAIL:
            return{
                ...state, siteData: state.siteData, error: action.payload, users: "", isLoading: false
            }
        default: return state;
    }
}

