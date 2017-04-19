import { GET_INITIAL_NEWS, CHANGE_INITIAL_NEWS_TYPE, CHANGE_NAV } from '../constant/actionType';

const initialNews = {
    companyNews: {
        heading: 'CompanyNews',
        info: 'CompanyNewsInfo'
    },
    mediaReports: {
        heading: 'MediaReports',
        info: 'MediaReportsInfo'
    },
    industryNews: {
        heading: 'IndustryNews',
        info: 'IndutryNewsInfo'
    },
    police: {
        heading: 'Police',
        info: 'PoliceInfo'
    },
    aviation: {
        heading: 'Aviation',
        info: 'AviationInfo'
    },
    smartCity: {
        heading: 'SmartCity',
        info: 'SmartCityInfo'
    }
};

const pageTwoChoose = 'companyNews';



export function getInitialNews(state = {initialNews}, action) {
    switch(action.type) {
        case GET_INITIAL_NEWS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
export function changeInitialNews(state = pageTwoChoose, action) {

    switch(action.type) {
        case CHANGE_INITIAL_NEWS_TYPE:
            return action.payload;
        case CHANGE_NAV:
            return action.payload;
        default: 
            return state;
    }
}
