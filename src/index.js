import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer() {
  //return the state with the proper object shape
  return { count: 72 };
}

// 1. create the store using redux
const store = createStore(reducer); // this expects 1 arg, the reducer function

// 2. provide the store to the App using Provider component from react-redux
// by wrapping the root of App with Provider
// 3. pass in redux store into the Provider's store props
const App = props => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
