import React from "react";
import { IconType } from "react-icons/lib";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import colorPalettes from "../Styles/colorPalette";
import HexPill from "./HexPill";
import "../Styles/hex_card.css"

type Props = {
	title: string;
	colorScheme: { main: string; dimmed: string };
	Icons: IconType[];
};

const HexCard = ({ title, colorScheme, Icons }: Props) => {
	const [First, Second, Third, Fourth, Fifth, Sixth] = Icons;
	const {color} = React.useContext(ThemeContext)
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
			<h1 className="hex_skill_title" style={{ color: colorScheme.main }}>
				{title}
			</h1>
			<div className="hexes">
				<div className="hex_line hex1">
					<div className="each_icon">
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme}></HexPill>
						</div>
						<div className="icon_1" style={{ color: colorScheme.main }}>
							{<First />}
						</div>
					</div>
				</div>
				<div className="hex_line hex2">
					<div className="each_icon">
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon_1" style={{ color: colorScheme.main }}>
							{<Second />}
						</div>
					</div>
					<div className="each_icon">
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon_1" style={{ color: colorScheme.main }}>
							{<Third />}
						</div>
					</div>
				</div>
				<div className="hex_line hex2">
					<div className="each_icon">
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon_1" style={{ color: colorScheme.main }}>
							{<Fourth />}
						</div>
					</div>
					<div className="each_icon">
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon_1" style={{ color: colorScheme.main }}>
							{<Fifth />}
						</div>
					</div>
					<div className="each_icon">
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon_1" style={{ color: colorScheme.main }}>
							{<Sixth />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HexCard;
