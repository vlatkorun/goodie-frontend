import {
    SET_ORDERS_PAGINATION,
} from '../../actions/orders';

import extractPagination from './extractPagination';

export default function setPagination(pagination) {
    return (dispatch, getState) => {
        dispatch({ type: SET_ORDERS_PAGINATION, payload: { pagination: extractPagination(pagination) } });
    }
}