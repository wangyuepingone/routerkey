import React from 'react';
import dva, { connect } from 'dva';
import { Router,Route } from 'dva/router'
import keymaster from 'keymaster';

let app = dva();

let delay = ms => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },ms)
});
app.model({
    namespace: 'counter1',
    state: { number: 0 },
    reducers: {
        add(state) {
            return { number: state.number + 1 }
        },
        miuns(state) {
            return { number: state.number - 1 }
        }
    },
    effects:{
        *asyncAdd(action,{ put,call }){
            yield call(delay,1000);
            yield put({type:'add'})
        }
    },
    subscriptions:{
        changeTile({history}){
            history.listen((location)=>{
                console.log(location);
                document.title = location.pathname;
            })
        },
        keyboard({dispatch}){
            keymaster('space',()=>{
                dispatch({type:'add'})
            })
        }
    }
});

app.model({
    namespace: 'counter2',
    state: { number: 0 },
    reducers: {
        add(state) {
            return { number: state.number + 1 }
        },
        miuns(state) {
            return { number: state.number - 1 }
        }
    }
});

function Counter1(props) {
    return (
        <div>
            <p>{props.number}</p>
            <button onClick={() => props.dispatch({ type: 'counter1/add' })}>+1</button>
            <button onClick={() => props.dispatch({ type: 'counter1/asyncAdd' })}>异步+1</button>
            <button onClick={() => props.dispatch({ type: 'counter1/miuns' })}>-1</button>
        </div>
    )
}
let ConnectedCounter1 = connect(state => state.counter1)(Counter1);

function Counter2(props) {
    return (
        <div>
            <p>{props.number}</p>
            <button onClick={() => props.dispatch({ type: 'counter2/add' })}>+1</button>
            <button onClick={() => props.dispatch({ type: 'counter2/miuns' })}>-1</button>
        </div>
    )
}
let ConnectedCounter2 = connect(state => state.counter2)(Counter2);

app.router(({history}) => (
    <Router history={history}>
        <> 
            <Route path="/" component={ConnectedCounter1} exact/>
            <Route path="/counter2" component={ConnectedCounter2}/>
        </>
    </Router>
))
app.start('#root');