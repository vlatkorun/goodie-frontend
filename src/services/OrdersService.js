import _ from 'lodash';

import BaseHttpService from './BaseHttpService';

class OrdersService extends BaseHttpService {

    getOrders(options = {}) {

        let params = {
            first_name: options.first_name || null,
            last_name: options.last_name || null,
            email: options.email || null,
            password: options.password || null,
            password_confirmation: options.password_confirmation || null,
            role: options.role || null,
        };

        return this.httpClient.get('/', _.pickBy(params, _.identity));
    }
}

export default OrdersService;