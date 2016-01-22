import { createStore } from 'redux';
import { counter } from './reducer-global';

const store = createStore(counter);

export default store;