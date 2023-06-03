import { Component } from "react";

type State = {
	colors: string[];
	activeColor: string;
};

export class ClassTrafficLight extends Component<object, State> {
	constructor(props: object) {
		super(props);
		this.state = { colors: ["red", "green", "yellow"], activeColor: "red" };
	}

	changeSignal = () => {
		const { colors, activeColor } = this.state;
		const currentIndex = colors.indexOf(activeColor);
		const nextIndex = (currentIndex + 1) % colors.length;
		const nextColor = colors[nextIndex];
		this.setState({ activeColor: nextColor });
	};

	render() {
		return (
			<div className="traffic-light-box">
				<h2>Class Traffic Light</h2>
				<div className="traffic-light">
					<div
						className={`circle ${
							this.state.activeColor === "red" ? "red" : "black"
						}`}
					></div>
					<div
						className={`circle ${
							this.state.activeColor === "yellow" ? "yellow" : "black"
						}`}
					></div>
					<div
						className={`circle ${
							this.state.activeColor === "green" ? "green" : "black"
						}`}
					></div>
				</div>
				<button className="next-state-button" onClick={this.changeSignal}>
					Next State
				</button>
			</div>
		);
	}
}
