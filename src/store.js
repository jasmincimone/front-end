import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';
import newsReducers from './reducers/newsReducers';

const rootReducer = combineReducers({reducer, newsReducers})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; 