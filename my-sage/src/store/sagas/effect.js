import { call,apply,cps } from 'redux-saga/effects';
import { delay } from '../../utils';

export default function* callFn(){
    // try{
    //     let result = yield call(delay,1000,true);
    //     console.log(result);
    // }catch(error){
    //     console.error(error)
    // }
    let result = yield call(delay,1000,true);
    if(result.code==0){
        console.log(result.success);
    }else{
        console.log(result.error);
    }
}