import React from "react";
import Button from "./Button";
import "../Theme/navbar.css";
import Avatar from "./Avatar";
type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="navbar">
			<Avatar />
			<div className="navlinks">
				<a href="#">intro</a>
				<a href="#about">about me</a>
				<a href="#skills">skills</a>
				<a href="#skills">dev tools</a>
				<a href="#projects">projects</a>
				<a href="#">contact</a>
			</div>
			<Button title="Download Resume" />
		</div>
	);
};

export default Navbar;
