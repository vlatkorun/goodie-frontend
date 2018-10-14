import _ from 'lodash';

export default function extractPagination(paginationFromInput) {

    const pagination = {
        current_page: null,
        from: null,
        to: null,
        last_page: null,
        per_page: null,
        total: null,
    };

    if(!_.isEmpty(paginationFromInput)) {
        for(const param in paginationFromInput) {
            if(Object.keys(pagination).indexOf(param) !== -1) {
                pagination[param] = paginationFromInput[param];
            }
        }
    }

    return pagination;
};