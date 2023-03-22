import React from "react";
import { IconType } from "react-icons/lib";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import colorPalettes from "../Styles/colorPalette";
import HexPill from "./HexPill";
import "../Styles/hex_card.css";

type Props = {
	title: string;
	colorScheme: { main: string; dimmed: string };
	Icons: IconType[];
	skillNames: string[];
};

const HexCard = ({ title, colorScheme, Icons, skillNames }: Props) => {
	const [First, Second, Third, Fourth, Fifth, Sixth] = Icons;
	const { color } = React.useContext(ThemeContext);
	return (
		<div
			className="hex_card"
			style={{
				backgroundColor: colorScheme.dimmed,
				borderColor: colorScheme.main,
			}}>
			<div
				style={{ backgroundColor: colorScheme.main }}
				className="hex_card_top"></div>
			<h1 className="hex_skill_title" style={{ color: "white" }}>
				{title}
			</h1>
			<div className="hexes">
				<div className="hex_line hex1">
					<div className="each_icon" title={skillNames[0]}>
						<div className="hex_pill">
							<HexPill colorScheme={{ main: "rgb(255,255,255)", dimmed: "" }} />
						</div>
						<div className="icon_1" style={{ color: "white" }}>
							{<First title={skillNames[0]} />}
						</div>
					</div>
				</div>
				<div className="hex_line hex2">
					<div className="each_icon" title={skillNames[1]}>
						<div className="hex_pill">
							<HexPill colorScheme={{ main: "rgb(255,255,255)", dimmed: "" }} />
						</div>
						<div className="icon_1" style={{ color: "white" }}>
							{<Second title={skillNames[1]} />}
						</div>
					</div>
					<div className="each_icon" title={skillNames[2]}>
						<div className="hex_pill">
							<HexPill colorScheme={{ main: "rgb(255,255,255)", dimmed: "" }} />
						</div>
						<div className="icon_1" style={{ color: "white" }}>
							{<Third title={skillNames[2]} />}
						</div>
					</div>
				</div>
				<div className="hex_line hex2">
					<div className="each_icon" title={skillNames[3]}>
						<div className="hex_pill">
							<HexPill colorScheme={{ main: "rgb(255,255,255)", dimmed: "" }} />
						</div>
						<div className="icon_1" style={{ color: "white" }}>
							{<Fourth title={skillNames[3]} />}
						</div>
					</div>
					<div className="each_icon" title={skillNames[4]}>
						<div className="hex_pill">
							<HexPill colorScheme={{ main: "rgb(255,255,255)", dimmed: "" }} />
						</div>
						<div className="icon_1" style={{ color: "white" }}>
							{<Fifth title={skillNames[4]} />}
						</div>
					</div>
					<div className="each_icon" title={skillNames[5]}>
						<div className="hex_pill">
							<HexPill colorScheme={{ main: "rgb(255,255,255)", dimmed: "" }} />
						</div>
						<div className="icon_1" style={{ color: "white" }}>
							{<Sixth title={skillNames[5]} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HexCard;
