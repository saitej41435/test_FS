import {createStore, combineReducers,applyMiddleware} from 'redux';
import { UsersReducer } from './users'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { TasksReducer } from './tasks';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            users:UsersReducer,
            tasks:TasksReducer
        }),
        applyMiddleware(thunk,logger)
    )
    return store
}