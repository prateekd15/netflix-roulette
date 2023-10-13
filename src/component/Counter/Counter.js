import React from "react";
import "./Counter.css";
import { incrementButton } from '../../constants.js';
import { decrementButton } from '../../constants.js'

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
				this.createCounterButton(decrementButton, this.handleDecrement),
				this.createCounterButton(incrementButton, this.handleIncrement),
			)
		);
	}
}

export default Counter;