import { createStore, combineReducers, applyMiddleware } from 'redux';
import { device, url, count } from './reducer-global';
import { page1Word } from './reducer-page1';
import { syncHistory, routeReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

const reducer = combineReducers({
	routing: routeReducer,
	device,
	count,
	page1Word
});

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
reduxRouterMiddleware.listenForReplays(store);

export default store;