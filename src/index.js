import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer_2 from './store/reducer_2';
import reducer_1 from './store/reducer_1';

let saveToLocalStorage = (state) => {
    try {
        let serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);
    } catch (error) {
        console.log(error);
    }
}

let loadFromLocalStorage = () => {
    try {
     let serializedState = localStorage.getItem('state');
     if(!serializedState){
         return {};
     }
     return JSON.parse(serializedState);
    } catch(error) {
        console.log(error);
        return {};
    }
}

const persistedState = loadFromLocalStorage();

const rootReducer = combineReducers({ reducer_1, reducer_2 });

const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

