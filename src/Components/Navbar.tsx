import { useContext, useEffect, useState } from "react";
import "../Styles/navbar.css";
import Avatar from "./Avatar";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import { GiSpotedFlower } from "react-icons/gi";
import colorPalettes, { colorsArray } from "../colorPalette";
import { NavbarContext } from "../Provider/NavbarStateProvider";
import Link from "./Link";
import useObserver from "../hooks/useObserver";
import Styles from "../Styles/observer.module.css";
import { FaFilePdf } from "react-icons/fa";

const Navbar = () => {
	const { color, setColor } = useContext(ThemeContext);
	const [hidden, setHidden] = useState(true);
	const { linkname } = useContext(NavbarContext);
	const { ref, inView } = useObserver();

	const Links = ["about", "skills", "projects", "contact"];

	return (
		<div
			className="navbar"
			style={{ backgroundColor: color.dimmed, color: color.main }}>
			<Avatar />
			<div className="navlinks">
				<Link isActive={linkname === ""} to="#">
					intro
				</Link>
				{Links.map((link) => (
					<Link key={link} isActive={linkname === link} to={`#${link}`}>
						{link}
					</Link>
				))}
				<div style={{ display: "flex", gap: "0.5rem" }}>
					<Link isActive={linkname === "resume"} to="#about">
						Resume
					</Link>
					<FaFilePdf />
				</div>
			</div>
			<div className="themeIcon" style={{ color: color.main }}>
				<GiSpotedFlower
					title="Theme"
					size={35}
					className="flower_icon"
					onClick={() => setHidden(!hidden)}
				/>{" "}
				<br />
				<div
					className="colorPalettes"
					ref={ref}
					style={{ display: hidden ? "none" : "flex" }}>
					{colorsArray.map((palette, index) => (
						<GiSpotedFlower
							size={35}
							key={palette.main}
							className={`${inView && Styles.base}`}
							style={{
								display: color.main === palette.main ? "none" : "block",
								color: palette.main,
								opacity: "0",
								transform: `translateY(-${100}%)`,
								transitionDelay: `${(index + 1) * 0.02}s`,
							}}
							onClick={() => setColor(palette)}
						/>
					))}
					{/* <div
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
						onClick={() => setColor(colorPalettes.orange_fish)}></div> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
