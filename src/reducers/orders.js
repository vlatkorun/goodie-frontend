import {
    SET_ORDERS_PAGINATION,
    SET_ORDERS_SORTING,
    SET_ORDERS_FILTERS,
} from '../actions/orders';

const defaultState = {
    orders: [],
    order: {},
    isLoadingOrders: false,
    isLoadingOrder: false,
    filters: {
        customer: null,
        number: null,
    },
    sorting: {
        created_at: null
    },
    pagination: {
        current_page: null,
        from: null,
        to: null,
        last_page: null,
        per_page: null,
        total: null,
    }
};

const orders = (state = defaultState, action) => {
    switch(action.type) {
        case(SET_ORDERS_FILTERS) :
            return {
                ...state,
                filters: action.payload.filters
            };
        case(SET_ORDERS_SORTING) :
            return {
                ...state,
                sorting: action.payload.sorting
            };
        case(SET_ORDERS_PAGINATION) :
            return {
                ...state,
                pagination: action.payload.pagination
            };
        default:
            return state;
    }
};

export default orders;