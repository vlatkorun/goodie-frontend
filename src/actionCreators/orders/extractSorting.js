import _ from 'lodash';

export default function extractSorting(sortingFromInput) {

    const sorting = {
        created_at: null,
    };

    for(const param in sortingFromInput) {
        if(Object.keys(sorting).indexOf(param) !== -1 && ['desc', 'asc'].indexOf(sortingFromInput[param]) !== -1) {
            sorting[param] = sortingFromInput[param];
        }
    }

    return sorting;
};