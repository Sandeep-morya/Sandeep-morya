import { IconType } from "react-icons/lib/esm/iconBase";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import "../Styles/card.css";

interface Props {
	title: String;
	Icon: IconType;
	techIcons: IconType[];
	techNames: String[];
}

const Card = ({ Icon, title, techIcons, techNames }: Props) => {
	const { color } = useContext(ThemeContext);

	return (
		<div className="container">
			<div
				className="front"
				style={{
					border: "0.1rem solid " + color.main,
					background: color.main,
				}}>
				<div className="inner">
					<div>
						<Icon size={80} color={color.main} />
					</div>
					<span>{title}</span>
				</div>
			</div>
			<div
				className="back"
				style={{ background: "url(https://unsplash.it/502/502/)" }}>
				<div className="inner">
					<div className="tech_skills">
						{techIcons.map((LeftIcon, index) => (
							<div key={index + Date.now()}>
								<LeftIcon />
								<div>{techNames[index]}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
