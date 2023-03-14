﻿import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import "../Styles/intro.css";
import Clock from "./Clock";

const Intro = () => {
	const { color } = useContext(ThemeContext);
	return (
		<div className="intro" style={{ color: color.main }}>
			<div className="big">
				<div className="intro_text">
					<h1 className="part_one">Sandeep</h1>
					<h1 className="part_two">Morya</h1>
				</div>
				<div>
					<Clock />
				</div>
			</div>
			<h1 className="part_three">A MERN STACK WEB DEVELPOER</h1>
			<div
				className="mouse_scroll"
				onClick={() => {
					window.scrollBy(0, window.innerHeight);
				}}>
				<div
					className="mouse"
					style={{ borderColor: color.main, backgroundColor: color.dimmed }}>
					<div className="wheel" style={{ borderColor: color.main }}></div>
				</div>
				<div>
					<span className="m_scroll_arrows unu"></span>
					<span className="m_scroll_arrows doi"></span>
					<span className="m_scroll_arrows trei"></span>
				</div>
			</div>
		</div>
	);
};

export default Intro;
