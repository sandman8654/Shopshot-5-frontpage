import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//const localStore = (typeof localStorage !== 'undefined' && localStorage.getItem('reduxState')) ? JSON.parse(localStorage.getItem('reduxState')) : {};

export default function (initialState = {}) {
  const store = createStore(
    rootReducer,
    //localStore || initialState,
    initialState,
    applyMiddleware(thunk)
  );

  store.subscribe(()=>{
    if(typeof localStorage !== 'undefined')
      localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  });

  return store;
}
