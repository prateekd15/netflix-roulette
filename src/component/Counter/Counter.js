import React from "react";
import "./Counter.css";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
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
				React.createElement(
					"button",
					{
						onClick: this.handleDecrement,
						className: "counter__btn",
					},
					"-"
				),
				React.createElement(
					"button",
					{
						onClick: this.handleIncrement,
						className: "counter__btn",
					},
					"+"
				)
			)
		);
	}
}

export default Counter;