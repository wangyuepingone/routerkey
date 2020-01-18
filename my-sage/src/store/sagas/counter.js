import * as types from '../action-types';
import { takeEvery ,delay,put } from 'redux-saga/effects';

//实际操作的逻辑wroker工作者
function* delayAdd(){
    //delay实际上是一个promise，他会在promise延迟一秒，然后resolve出去，变成成功态之后再继续执行下面代码
    yield delay(1000);
    //put是派发action.type给reducer，reducer根据派发的action会执行对应的操作
    yield put({type:types.ADD})
}

//监听者，他负责监管wroker工作者的执行
export default function* whtcherDelayAdd(){
    //监听ADDPLAY动作，监听之后会立即执行delayAdd方法
    yield takeEvery(types.ADDPLAY,delayAdd)
}
