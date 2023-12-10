// Counter.js
import React from "react";
import styles from "./Counter.module.css";
import { INCREMENT_SYMBOL, DECREMENT_SYMBOL } from '../../constants.js';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className={styles.counter}>
        <h1 className={styles.counter__title}>Counter: {this.state.count}</h1>
        <div className={styles.counter__btns}>
          <button
            onClick={this.handleDecrement}
            className={styles.counter__btn}
          >
            {DECREMENT_SYMBOL}
          </button>
          <button
            onClick={this.handleIncrement}
            className={styles.counter__btn}
          >
            {INCREMENT_SYMBOL}
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
