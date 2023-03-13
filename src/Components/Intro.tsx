import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import "../Styles/intro.css";
import Clock from "./Clock";

const Intro = () => {
	const { color } = useContext(ThemeContext);
	return (
		<div className="intro" style={{ color: color.main }}>
			<div className="intro_text">
				<h1>SANDEEP MORYA</h1>
			</div>
			<div>
				<Clock />
			</div>
		</div>
	);
};

export default Intro;
