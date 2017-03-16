import { GET_INITIAL_NEWS } from '../constant/actionType';
import { CHANGE_INITIAL_NEWS_TYPE } from '../constant/actionType';

export function getInitialNews(payload) {
    return {
        type: GET_INITIAL_NEWS,
        payload
    }
}
export function changeInitialNewsType(payload) {
    return {
        type: CHANGE_INITIAL_NEWS_TYPE,
        payload
    }
}