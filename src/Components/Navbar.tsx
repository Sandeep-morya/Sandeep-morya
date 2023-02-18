import React, { useContext, useState } from "react";
import Button from "./Button";
import "../Theme/navbar.css";
import Avatar from "./Avatar";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import { MdOutlineWbSunny, MdNightlight, MdPalette } from "react-icons/md";
import { colorPalettes } from "../Theme";

const Navbar = () => {
	const { theme, colorMode, toggleColorMode } = useContext(ThemeContext);
	const [hidden, setHidden] = useState(true);

	return (
		<div className="navbar">
			<Avatar title="sm" />
			<div className="navlinks">
				<a href="#">intro</a>
				<a href="#about">about me</a>
				<a href="#skills">skills</a>
				<a href="#projects">projects</a>
				<a href="#contact">contact</a>
			</div>
			<div className="themeIcon" style={{ color: theme.primary }}>
				<MdPalette size={30} onClick={() => setHidden(!hidden)} />

				<div
					className="colorPalettes"
					style={{ display: hidden ? "none" : "flex" }}>
					<div
						className="pink_Queen"
						style={{ backgroundColor: colorPalettes.orange_shadow }}></div>
					<div
						className="red_dragon"
						style={{ backgroundColor: colorPalettes.blue_whale }}></div>
					<div
						className="blue_whale"
						style={{ backgroundColor: colorPalettes.green_hacker }}></div>
					<div
						className="green_hacker"
						style={{ backgroundColor: colorPalettes.pink_Queen }}></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
