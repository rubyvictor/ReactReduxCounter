import React, { Component } from 'react';
import { connect } from "react-redux";
import "./Counter.css";

class Counter extends Component {
  state = { count: 0 };

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


const mapStateToProps = (state) => ({
  count: state.count
});
// export the connected component, not the component.
// tell connect what data you need in the first parameter
export default connect(mapStateToProps)(Counter)
