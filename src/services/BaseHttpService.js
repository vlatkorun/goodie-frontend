import axios from 'axios';
import _ from 'lodash';

import { api } from '../config';

class BaseHttpService {
    constructor(options = {}) {

        const params = {
            timeout: options.timeout || api.timeout || null,
        };

        this.httpClient = axios.create(_.pickBy(params, _.identity));
    }
}

export default BaseHttpService;