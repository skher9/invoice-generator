import { createStore } from 'redux';
import rootReducer from './Invoice/rootReducer'

const store = createStore(rootReducer);

export default store;