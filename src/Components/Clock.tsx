import React from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import "../Styles/clock.css";

const Clock = () => {
	const { color } = React.useContext(ThemeContext);

	const { current: deg } = React.useRef(6);
	const hourRef = React.useRef<HTMLInputElement>(null);
	const minRef = React.useRef<HTMLInputElement>(null);
	const secRef = React.useRef<HTMLInputElement>(null);

	const setClock = () => {
		let day = new Date();
		let hh = day.getHours() * 30;
		let mm = day.getMinutes() * deg;
		let ss = day.getSeconds() * deg;

		hourRef.current!.style.transform = `rotateZ(${hh + mm / 12}deg)`;
		minRef.current!.style.transform = `rotateZ(${mm}deg)`;
		secRef.current!.style.transform = `rotateZ(${ss}deg)`;
	};

	// first time

	// Update every 1000 ms

	React.useEffect(() => {
		setClock();
	}, []);

	React.useEffect(() => {
		const id = setInterval(setClock, 1000);
		return () => {
			clearInterval(id);
		};
	}, []);
	return (
		<div className="clock_parent">
			<div
				style={{ backgroundColor: color.dimmed, borderColor: color.main }}
				className="clock">
				<div ref={hourRef} className="hour"></div>
				<div ref={minRef} className="min"></div>
				<div ref={secRef} className="sec"></div>
			</div>
		</div>
	);
};

export default Clock;
