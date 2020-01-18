import * as types from '../action-types';

export default {
    add(){
        return {type:types.ADD};
    },
    addplay(){
        return {type:types.ADDPLAY};
    },
    stop(){
        return {type:types.CANCEL_SECOND}
    }
}
