import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import * as reducerGlobal from './reducer-global';
import * as reducerPage1 from './reducer-page1';

const reducer = combineReducers(Object.assign({}, 
	reducerGlobal,
	reducerPage1,
	{ routing: routeReducer }
));

const reduxRouterMiddleware = syncHistory(browserHistory);
const createDevStore = compose(applyMiddleware(reduxRouterMiddleware), typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f)(createStore);
const createProdStore = applyMiddleware(reduxRouterMiddleware)(createStore);

let store;
if(process.env.NODE_ENV == 'development') {
	store = createDevStore(reducer);
} else {
	store = createProdStore(reducer);
}

reduxRouterMiddleware.listenForReplays(store);
export default store;