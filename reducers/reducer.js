import { CHANGE_HEADER_RED } from '../constant/actionType';

export function changeHeaderToRed(state, action) {
    switch(action.type) {
        case CHANGE_HEADER_RED:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}