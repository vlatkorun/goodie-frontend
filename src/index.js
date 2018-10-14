import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { setLanguage } from 'redux-polyglot';

import { store, persistor } from './store';
import history from './createHistory';

import { detectLanguage, translations } from './trans';

import App from './App';
import * as serviceWorker from './serviceWorker';

const lang = detectLanguage();

store.dispatch(setLanguage(lang, translations(lang)));

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>    
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();