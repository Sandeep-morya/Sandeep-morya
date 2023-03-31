import { useContext, useEffect, useState } from "react";
import "../Styles/navbar.css";
import Avatar from "./Avatar";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import { HiColorSwatch } from "react-icons/hi";
import colorPalettes from "../colorPalette";

const Navbar = () => {
	const { color, setColor } = useContext(ThemeContext);
	const [hidden, setHidden] = useState(true);

	return (
		<div
			className="navbar"
			style={{ backgroundColor: color.dimmed, color: color.main }}>
			<Avatar />
			<div className="navlinks">
				<a href="#">intro</a>
				<a href="#about">about me</a>
				<a href="#skills">skills</a>
				<a href="#projects">projects</a>
				<a href="#contact">contact</a>
			</div>
			<div className="themeIcon" style={{ color: color.main }}>
				<HiColorSwatch size={30} onClick={() => setHidden(!hidden)} />

				<div
					className="colorPalettes"
					style={{ display: hidden ? "none" : "flex" }}>
					<div
						hidden={color.main === colorPalettes.main_shadow.main}
						style={{ backgroundColor: colorPalettes.main_shadow.main }}
						onClick={() => setColor(colorPalettes.main_shadow)}></div>
					<div
						hidden={color.main === colorPalettes.blue_whale.main}
						style={{ backgroundColor: colorPalettes.blue_whale.main }}
						onClick={() => setColor(colorPalettes.blue_whale)}></div>
					<div
						hidden={color.main === colorPalettes.green_hacker.main}
						style={{ backgroundColor: colorPalettes.green_hacker.main }}
						onClick={() => setColor(colorPalettes.green_hacker)}></div>
					<div
						hidden={color.main === colorPalettes.pink_Queen.main}
						style={{ backgroundColor: colorPalettes.pink_Queen.main }}
						onClick={() => setColor(colorPalettes.pink_Queen)}></div>
					<div
						hidden={color.main === colorPalettes.purple_witch.main}
						style={{ backgroundColor: colorPalettes.purple_witch.main }}
						onClick={() => setColor(colorPalettes.purple_witch)}></div>
					<div
						hidden={color.main === colorPalettes.orange_fish.main}
						style={{ backgroundColor: colorPalettes.orange_fish.main }}
						onClick={() => setColor(colorPalettes.orange_fish)}></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
