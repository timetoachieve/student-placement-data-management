import { COMPANY_LIST_REQUEST, COMPANY_LIST_SUCCESS, COMPANY_LIST_FAIL } from 'redux/constants/companyConstants';

const companyListReducer = (state = { loading: true, companies: []}, action) => {
    switch (action.type) {
        case COMPANY_LIST_REQUEST: return {loading: true};
        case COMPANY_LIST_SUCCESS: return {loading: false, companies: action.payload};
        case COMPANY_LIST_FAIL: return {loading: false, error: action.payload};
        default: return state;
    }
};

export {
    companyListReducer
}
