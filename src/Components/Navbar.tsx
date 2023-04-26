import { useContext, useEffect, useMemo, useState } from "react";
import "../Styles/navbar.css";
import Avatar from "./Avatar";
import { ColorType, ThemeContext } from "../Provider/ThemeContextProvider";
import { GiSpotedFlower } from "react-icons/gi";
import colorPalettes, { colorsArray } from "../colorPalette";
import { NavbarContext } from "../Provider/NavbarStateProvider";
import Link from "./Link";
import useObserver from "../hooks/useObserver";
import Styles from "../Styles/observer.module.css";
import { FaFilePdf } from "react-icons/fa";

export const generateStyles = (isScrolled: boolean, color: ColorType) =>
	isScrolled
		? {
				backgroundColor: color.dimmed,
				backdropFilter: "brightness(40%) blur(10px)",
				boxShadow: "0 8px 6px -6px black",
		  }
		: {
				background: "none",
		  };

const Navbar = () => {
	const { color, setColor } = useContext(ThemeContext);
	const [hidden, setHidden] = useState(true);
	const { linkname } = useContext(NavbarContext);
	const { ref, inView } = useObserver();

	const [isScrolled, setIsScrolled] = useState(false);

	const Links = ["about", "skills", "projects", "contact"];

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
		<div className="navbar" style={{ ...styles, color: color.main }}>
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
					{/*---:: Theme Colors ::---*/}
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
				</div>
			</div>
		</div>
	);
};

export default Navbar;
