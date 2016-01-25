import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';

import { device, count } from './reducer-global';
import { page1Word } from './reducer-page1';

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