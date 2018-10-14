import { notify } from 'reapop';

import {
    GET_ORDERS_SUCCESS,
    GET_ORDER_FAILED,
    GET_ORDERS_START,
} from '../../actions/orders';

import OrdersService from '../../services/OrdersService';

export default function getRoles(options = {}) {

    return (dispatch, getState) => {

        dispatch({ type: GET_ORDERS_START });

        const rolesService = new OrdersService();

        rolesService.getOrders()
            .then((result) => {
                dispatch({type: GET_ORDERS_SUCCESS, payload: { orders: result.orders }});
            })
            .catch((error) => {
                dispatch(notify({ message: '', status: error.http_code }));
                dispatch({ type: GET_ORDER_FAILED });
            });
    }
}