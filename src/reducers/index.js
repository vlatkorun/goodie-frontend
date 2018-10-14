import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { polyglotReducer } from 'redux-polyglot';
import { reducer as notificationsReducer } from 'reapop';

import orders from './orders';

const defaultNotification = {
    status: 'info',
    position: 'br',
    dismissible: true,
    dismissAfter: 3000,
    allowHTML: true,
    closeButton: true
};

const rootReducer = combineReducers({
    form: formReducer,
    polyglot: polyglotReducer,
    notifications: notificationsReducer(defaultNotification),
    orders
});

export default rootReducer;