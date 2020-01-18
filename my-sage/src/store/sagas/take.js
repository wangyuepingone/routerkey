import * as types from '../action-types';
import { takeEvery ,delay,put,take } from 'redux-saga/effects';

function* delayAdd(action){
    yield delay(1000);
    yield put({type:types.ADD})
}

//takeEvery,每一次派发都会执行，一直在等；
//take只执行一次，只等待一次
export default function* whtcherDelayAdd(){
    //take的思路流程
    let action =yield take(types.ADDPLAY);
    yield delayAdd(action);
    action =yield take(types.ADDPLAY);
    yield delayAdd(action);
    action =yield take(types.ADDPLAY);
    yield delayAdd(action);

    //takeEvery的思路流程
    //takeEvery会开启一个子进程，单独去执行while循环代码，所以他不会阻塞其他代码运行
    while(true){
        let action =yield take(types.ADDPLAY);
        yield delayAdd(action);
    }
}