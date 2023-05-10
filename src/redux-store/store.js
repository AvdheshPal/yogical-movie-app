import {combineReducers , createStore , applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {movieReducer} from '../redux/reducer'


export const store = createStore(movieReducer,composeWithDevTools(applyMiddleware(thunk)));
