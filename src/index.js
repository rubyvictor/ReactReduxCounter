import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  //   console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 10 };
    case 'DECREMENT':
      return { count: state.count - 10 };
    default:
      return state;
  }
}

const store = createStore(reducer);
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' });

const App = props => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
