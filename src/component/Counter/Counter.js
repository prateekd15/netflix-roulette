import React from "react";
import "./Counter.css";
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

	createCounterButton = (button, clickHandler) => {
		return React.createElement(
			"button",
			{
				onClick: clickHandler,
				className: "counter__btn",
			},
			button
		)
	};

	render() {
		return React.createElement(
			"div",
			{ className: "counter" },
			React.createElement(
				"h1",
				{ className: "counter__title" },
				`Counter: ${this.state.count}`
			),
			React.createElement(
				"div",
				{ className: "counter__btns" },
				this.createCounterButton(DECREMENT_SYMBOL, this.handleDecrement),
				this.createCounterButton(INCREMENT_SYMBOL, this.handleIncrement),
			)
		);
	}
}

export default Counter;