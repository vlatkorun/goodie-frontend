import {
    SET_ORDERS_FILTERS,
} from '../../actions/orders';

import extractFilters from './extractFilters';

export default function setFilters(filters) {
    return (dispatch, getState) => {
        dispatch({ type: SET_ORDERS_FILTERS, payload: { filters: extractFilters(filters) } });
    }
}

