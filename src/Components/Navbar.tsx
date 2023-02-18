import React, { useContext, useState } from "react";
import Button from "./Button";
import "../Theme/navbar.css";
import Avatar from "./Avatar";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import { MdOutlineWbSunny, MdNightlight, MdPalette } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

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
					<div className="orange_shadow"></div>
					<div className="red_dragon"></div>
					<div className="blue_whale"></div>
					<div className="green_hacker"></div>
					<div className="pink_Queen"></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
