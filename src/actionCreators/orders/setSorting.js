import {
    SET_ORDERS_PAGINATION,
} from '../../actions/orders';

import extractSorting from './extractSorting';

export default function setSorting(sorting) {
    return (dispatch, getState) => {
        dispatch({ type: SET_ORDERS_PAGINATION, payload: { sorting: extractSorting(sorting) } });
    }
}