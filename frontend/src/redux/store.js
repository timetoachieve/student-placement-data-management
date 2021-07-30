import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { companyListReducer, scheduleListReducer } from 'redux/reducers/companyReducers';

const initState = {};
const reducer = combineReducers({
    companyList: companyListReducer,
    schedule: scheduleListReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
