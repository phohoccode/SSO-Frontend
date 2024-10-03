import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer/rootReducer';
import { injectStore } from '../custom/axios';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)
));

injectStore(store)

export default store;