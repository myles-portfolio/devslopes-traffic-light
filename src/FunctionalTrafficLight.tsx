import { useState } from "react";

export const FunctionalTrafficLight = () => {
	const [activeColor, setActiveColor] = useState("red");

	const changeSignal = () => {
		setActiveColor((prevColor) => {
			if (prevColor === "red") return "green";
			if (prevColor === "green") return "yellow";
			if (prevColor === "yellow") return "red";
			return prevColor;
		});
	};

	return (
		<div className="traffic-light-box">
			<h2>Functional Traffic Light</h2>
			<div className="traffic-light">
				<div
					className={`circle ${activeColor === "red" ? "red" : "black"}`}
				></div>
				<div
					className={`circle ${activeColor === "yellow" ? "yellow" : "black"}`}
				></div>
				<div
					className={`circle ${activeColor === "green" ? "green" : "black"}`}
				></div>
			</div>
			<button className="next-state-button" onClick={changeSignal}>
				Next State
			</button>
		</div>
	);
};
