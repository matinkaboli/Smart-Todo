import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const todo = () => {
  let func = JSON.stringify(store.getState().todo);
  localStorage.setItem('todo', func);
};
store.subscribe(todo);

window.store = store;

export default store;
