import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import history from '../services/history';

const middleWares = [
  thunk,
  routerMiddleware(history)
];

const persistConfig = {
  key: "root",
  storage,
 // whitelist: ['process'],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
// eslint-disable-next-line
export default () => {
  const store = createStore(connectRouter(history)(persistedReducer), applyMiddleware(...middleWares));
  const persistor = persistStore(store);
  return { store, persistor };
};