import { all } from 'redux-saga/effects';
import login from './login';
import second from './second'

//他负责接收wroker工作者所有的执行结果，而且还必须是成功态的
export default function*(){
    //相当于Promise.all
    yield all([
        login(),
        second()
    ])
}