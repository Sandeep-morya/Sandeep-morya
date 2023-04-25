﻿import { useContext, useEffect, useMemo, useState } from "react";
import Avatar from "./Avatar";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import colorPalettes from "../colorPalette";
import { MdClose, MdMenu } from "react-icons/md";

import "../Styles/mobnav.css";
import { generateStyles } from "./Navbar";

const MobNav = () => {
	const { color, setColor } = useContext(ThemeContext);
	const [hidden, setHidden] = useState(true);
	const [isScrolled, setIsScrolled] = useState(false);
	const styles = useMemo(
		() => generateStyles(isScrolled, color),
		[isScrolled, color],
	);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.pageYOffset > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="mobnav" style={{ ...styles, color: color.main }}>
			<div className="mobnav_top">
				<Avatar />
				{hidden ? (
					<MdMenu size={40} onClick={() => setHidden(!hidden)} />
				) : (
					<MdClose size={40} onClick={() => setHidden(!hidden)} />
				)}
			</div>
			<div
				className="mobnav_bottom"
				style={{
					opacity: hidden ? "0" : "1",
					padding: hidden ? "0px" : "2rem",
					height: hidden ? "0px" : "auto",
					marginBottom: hidden ? "-100%" : "0",
				}}>
				<a href="#" onClick={() => setHidden(!hidden)}>
					intro
				</a>
				<a href="#about" onClick={() => setHidden(!hidden)}>
					about me
				</a>
				<a href="#skills" onClick={() => setHidden(!hidden)}>
					skills
				</a>
				<a href="#projects" onClick={() => setHidden(!hidden)}>
					projects
				</a>
				<a href="#contact" onClick={() => setHidden(!hidden)}>
					contact
				</a>
				<div className="accent_colors">
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

export default MobNav;
