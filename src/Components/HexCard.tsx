import { IconType } from "react-icons/lib";
import HexPill from "./HexPill";
import "../Styles/hex_card.css";

import Styles from "../Styles/observer.module.css";
import useObserver from "../hooks/useObserver";

type Props = {
	title: string;
	colorScheme: { main: string; dimmed: string };
	Icons: IconType[];
	skillNames: string[];
};

const HexCard = ({ title, colorScheme, Icons, skillNames }: Props) => {
	const [First, Second, Third, Fourth, Fifth, Sixth] = Icons;
	const { ref, inView } = useObserver();
	return (
		<div
			className={`hex_card`}
			style={{
				backgroundColor: colorScheme.dimmed,
				borderColor: colorScheme.main,
			}}>
			<div
				style={{ backgroundColor: colorScheme.main }}
				className={`hex_card_top`}></div>
			<h1 className="hex_skill_title" style={{ color: "white" }}>
				{title}
			</h1>
			<div ref={ref} className="hexes">
				<div className="hex_line hex1">
					<div
						style={{ opacity: "0", transitionDelay: `0.1s` }}
						className={`each_icon ${inView && Styles.base}`}
						data-title={skillNames[0]}>
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div
							className="icon"
							style={{
								color: "white",
								// cursor:
								// 	"url(https://icons.iconarchive.com/icons/graphics-vibe/developer/128/html-icon.png), auto",
							}}>
							{<First data-title={skillNames[0]} />}
						</div>
					</div>
				</div>
				<div className="hex_line hex2">
					<div
						style={{ opacity: "0", transitionDelay: `0.25s` }}
						className={`each_icon ${inView && Styles.base}`}
						data-title={skillNames[1]}>
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon" style={{ color: "white" }}>
							{<Second data-title={skillNames[1]} />}
						</div>
					</div>
					<div
						style={{ opacity: "0", transitionDelay: `0.4s` }}
						className={`each_icon ${inView && Styles.base}`}
						data-title={skillNames[2]}>
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon" style={{ color: "white" }}>
							{<Third data-title={skillNames[2]} />}
						</div>
					</div>
				</div>
				<div className="hex_line hex2">
					<div
						style={{ opacity: "0", transitionDelay: `0.65s` }}
						className={`each_icon ${inView && Styles.base}`}
						data-title={skillNames[3]}>
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon" style={{ color: "white" }}>
							{<Fourth data-title={skillNames[3]} />}
						</div>
					</div>
					<div
						style={{ opacity: "0", transitionDelay: `0.8s` }}
						className={`each_icon ${inView && Styles.base}`}
						data-title={skillNames[4]}>
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon" style={{ color: "white" }}>
							{<Fifth data-title={skillNames[4]} />}
						</div>
					</div>
					<div
						style={{ opacity: "0", transitionDelay: `1s` }}
						className={`each_icon ${inView && Styles.base}`}
						data-title={skillNames[5]}>
						<div className="hex_pill">
							<HexPill colorScheme={colorScheme} />
						</div>
						<div className="icon" style={{ color: "white" }}>
							{<Sixth data-title={skillNames[5]} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HexCard;
