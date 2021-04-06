import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import logger from "redux-logger";
import ReduxThunk from 'redux-thunk';

// Midleware



const store = createStore(reducers, applyMiddleware(logger,ReduxThunk));


export default store;