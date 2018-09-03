import React, { Component } from 'react';
import "./Counter.css";

class Counter extends Component {
  state = { count: 10 };

  increment = () => {
    //   this.setState({count:this.state.count + 1})
  }

  decrement = () => {
    //   this.setState({count:this.state.count - 1})
  }

  render() {
    return (
      <div className="counter">
        <h1>Counter</h1>
        <button className="minus-button" onClick={this.decrement}>-</button>
        <span className="count">{this.props.count}</span>
        <button className="plus-button" onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter
