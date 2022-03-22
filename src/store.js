import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';
import apiReducers from './reducers/apiReducers';

const rootReducer = combineReducers({reducer, apiReducers})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; 