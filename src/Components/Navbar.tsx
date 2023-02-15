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
				<a href="#">about me</a>
				<a href="#">technologies</a>
				<a href="#">projects</a>
				<a href="#">contact</a>
			</div>
			<Button title="Download Resume" />
		</div>
	);
};

export default Navbar;
