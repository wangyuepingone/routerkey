import * as types from '../action-types';
import { take,call,put,race,delay } from 'redux-saga/effects'

function* start(){
    while(true){
        yield delay(1000);
        yield put({type:types.ADD});
    }
}

export default function*(){
    yield race({
        start:call(start),
        stop:take(types.CANCEL_SECOND)
    })
}