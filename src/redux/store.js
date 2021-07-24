import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root.reducer';
import creatSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga';


const sagaMiddleWare = creatSagaMiddleware();

const middleWares = [sagaMiddleWare];

middleWares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };