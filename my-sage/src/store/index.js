import { createStore,applyMiddleware } from 'redux';
import reducers from './reducder';
import createSagaMiddleware from 'redux-saga';
import sagaRoot from './sagas';
let sagaMiddleware = createSagaMiddleware();
let store = applyMiddleware(sagaMiddleware)(createStore)(reducers);
sagaMiddleware.run(sagaRoot);
export default store;


