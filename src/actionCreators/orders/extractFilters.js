import _ from 'lodash';

export default function extractFilters(filtersFromInput) {

    const filters = {
        customer: null,
        number: null,
    };

    if(!_.isEmpty(filtersFromInput)) {
        for(const param in filtersFromInput) {
            if(Object.keys(filters).indexOf(param) !== -1) {
                filters[param] = filtersFromInput[param];
            }
        }
    }

    return filters;
};