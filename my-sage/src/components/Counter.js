import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/counter';
function Counter(props){
    return (
        <div>
            <p>{props.number}</p>
            <button onClick={()=> props.add()}>点击+1</button>
            <button onClick={()=> props.addplay()}>延迟加1</button>
        </div>
    )
}

export default connect(
    state=>state.counter,
    actions
)(Counter)