import useTime from "../hooks/useTime";
import {  useTheme } from "../Provider/ThemeContextProvider";
import "../Styles/clock.css";

const Clock = () => {
	const { hour, minutes, seconds } = useTime();
	const { color } = useTheme();

	// const setClock = () => {
	// 	let day = new Date();
	// 	let hh = day.getHours() * 30;
	// 	let mm = day.getMinutes() * 6;
	// 	let ss = day.getSeconds() * 6;

	// 	hourRef.current!.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	// 	minRef.current!.style.transform = `rotateZ(${mm}deg)`;
	// 	secRef.current!.style.transform = `rotateZ(${ss}deg)`;
	// };

	// // first time
	// React.useEffect(() => {
	// 	setClock();
	// }, []);

	// // Update every 1000 ms
	// React.useEffect(() => {
	// 	const id = setInterval(setClock, 1000);
	// 	return () => {
	// 		clearInterval(id);
	// 	};
	// }, []);
	return (
		<div className="clock_parent">
			<div
				style={{ backgroundColor: color.dimmed, borderColor: color.main }}
				className="clock">
				<div
					style={{ transform: `rotateZ(${hour * 30}deg)` }}
					className="hour"></div>
				<div
					style={{ transform: `rotateZ(${minutes * 6}deg)` }}
					className="min"></div>
				<div
					style={{ transform: `rotateZ(${seconds * 6}deg)` }}
					className="sec"></div>
			</div>
		</div>
	);
};

export default Clock;
