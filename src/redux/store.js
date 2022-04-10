import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import userReducer from './reducers/user.reducer';
import appReducer from './reducers/app.reducer';
import rootSaga from './sagas/root.saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({userReducer, appReducer});

const Store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export {Store};
