import * as types from '../action-types';
let initialState = {
    username:null,
    error:null
}
export default function(state = initialState,action){
    switch(action.type){
        case types.LOGIN_SESSION:
            return {
                ...state,
                username:action.payload,
            };
        default:
            return state
    }
}
