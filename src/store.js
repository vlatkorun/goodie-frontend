import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import history from './createHistory';
import rootReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

middlewares.push(routerMiddleware(history));

if(process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');  
    middlewares.push(logger);
}

middlewares.push(thunk);

const composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose;

const store = createStore(connectRouter(history)(persistedReducer), {}, composeEnhancers(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

export {
    store,
    persistor,
}