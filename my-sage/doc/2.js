import * as types from '../action-types';
import { login,setItem,clearItem } from '../../api';
import { take,call,put } from 'redux-saga/effects'

function* LoginRequst(userInfo){
    //等login异步请求执行成功成功之后拿取到返回的登录信息给token，然后把token返回出去
    let token = yield call(login,userInfo);
    return token;
}

export default function* (){
    while(true){
        //监听登录请求的action
        //拿去到登录成功的返回值
        let action = yield take(types.LOGIN_REQUEST);
        let token = yield LoginRequst(action.payload);
        //拿到登录成功的返回结果，然后判断是否登录成功，如果登录成功，那么就发送一个保存登录信息的acton
        //然后把最新的用户信息储存到payload对象上
        if(token){
            yield put({
                type:types.LOGIN_SESSION,
                payload:action.payload.username
            });
            setItem('token',token)
            //此时最新的用户信息以及储存到payload上面了，然后继续监听退出登录的action
            //如果用户触发了退出登录的action之后，就立即派发一个退出登录的action
            //当退出登录发送成功之后，立即清除payload对象的值
            yield take(types.LOGOUT_REQUEST);
            clearItem('token')
            yield put({
                type:types.LOGIN_SESSION,
                payload:null
            })
        }
    }
}