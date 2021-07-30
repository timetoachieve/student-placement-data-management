import axios from 'axios';
import { COMPANY_LIST_FAIL, COMPANY_LIST_REQUEST, COMPANY_LIST_SUCCESS } from 'redux/constants/companyConstants';

const listCompanies = () => async (dispatch) => {
    dispatch({ type: COMPANY_LIST_REQUEST });
    try {
        const { data } = await axios.get('/api/companies');
        console.log('data', data);
        dispatch({
            type: COMPANY_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: COMPANY_LIST_FAIL,
            payload: error.message
        });
    }
};

export {
    listCompanies
}
