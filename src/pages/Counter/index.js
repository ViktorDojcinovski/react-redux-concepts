import React from "react";
import { connect } from "react-redux";

import { incrementCounter, decrementCounter } from "../../redux";

function Counter(props) {
  return (
    <div className="App">
      <button onClick={props.increment}>Increment counter</button>
      <button onClick={props.decrement}>Decrement counter</button>
      <p>Counter: {props.counter}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
