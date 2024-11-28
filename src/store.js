import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import mainRedux from "./Services/Redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(mainRedux, composeEnhancers(applyMiddleware(thunk)));

export default store