import React, { useContext } from "react";
import Button from "./Button";
import "../Theme/navbar.css";
import Avatar from "./Avatar";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import { MdOutlineWbSunny, MdNightlight } from "react-icons/md";

const Navbar = () => {
	const { theme, colorMode, toggleColorMode } = useContext(ThemeContext);
	return (
		<div className="navbar">
			<Avatar title="sm" />
			<div className="navlinks">
				<a href="#">intro</a>
				<a href="#about">about me</a>
				<a href="#skills">skills</a>
				<a href="#dev_tools">dev tools</a>
				<a href="#projects">projects</a>
				<a href="#">contact</a>
				<a href="#">footer</a>
			</div>
			<div className="themeIcon" style={{ color: theme.primary }}>
				{colorMode === "dark" ? (
					<MdNightlight onClick={toggleColorMode} />
				) : (
					<MdOutlineWbSunny onClick={toggleColorMode} />
				)}
			</div>
		</div>
	);
};

export default Navbar;
