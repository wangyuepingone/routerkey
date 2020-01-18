import * as types from '../action-types';
import { login,setItem,clearItem } from '../../api';
import { take,call,put,fork,cancel } from 'redux-saga/effects'

function* LoginRequst(userInfo){
    let token = yield call(login,userInfo);
    try{
        yield put({
            type:types.LOGIN_SESSION,
            payload:userInfo.username
        });
        setItem('token',token);
    }catch(error){
        yield put({
            type:types.LOGIN_ERROR,
            payload:error
        });
    }
}

export default function* (){
    while(true){
        let action = yield take(types.LOGIN_REQUEST);
        let task = yield fork(LoginRequst,action.payload);
        action = yield take([types.LOGOUT_REQUEST,types.LOGIN_ERROR]);
        if(action.type === types.LOGOUT_REQUEST){
            yield cancel(task);
        }
        yield put({
            type:types.LOGIN_SESSION,
            payload:null
        });
        clearItem('token');

    }
}