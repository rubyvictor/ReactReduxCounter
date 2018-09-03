import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const App = (props) => {
  return (
    <div>
      <Counter count={72}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
