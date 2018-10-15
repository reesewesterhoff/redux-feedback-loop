import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// bring in redux, react-redux, and logger
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// feedback reducer
const feedback = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return {...state, feeling: action.payload};
        case 'ADD_UNDERSTANDING':
            return {...state, understanding: action.payload};
        case 'ADD_SUPPORT':
            return {...state, support: action.payload};
        case 'ADD_COMMENTS':
            return {...state, comments: action.payload};
        default:
            return state;
    }
}

// combine reducers
const allReducers = combineReducers({
    feedback,
});

// create the redux store
const store = createStore(
    allReducers,
    // use redux logger
    applyMiddleware(logger),
);

// wrap the app with the provider and pass prop of redux store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
