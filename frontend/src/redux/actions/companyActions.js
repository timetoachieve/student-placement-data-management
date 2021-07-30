import axios from 'axios';
import { COMPANY_LIST_FAIL, COMPANY_LIST_REQUEST, COMPANY_LIST_SUCCESS, SCHEDULE_LIST_FAIL, SCHEDULE_LIST_REQUEST } from 'redux/constants/companyConstants';
import { SCHEDULE_LIST_SUCCESS } from './../constants/companyConstants';

const listCompanies = () => async (dispatch) => {
    dispatch({ type: COMPANY_LIST_REQUEST });
    try {
        const { data } = await axios.get('/api/companies');
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

const listSchedule = () => async (dispatch) => {
    dispatch({ type: SCHEDULE_LIST_REQUEST });
    try {
        const { data } = await axios.get('/api/schedules');
        dispatch({
            type: SCHEDULE_LIST_SUCCESS,
            payload: data            
        });
    } catch (error) {
        dispatch({
            type: SCHEDULE_LIST_FAIL,
            payload: error.message
        });
    }
};

export {
    listCompanies,
    listSchedule
}
