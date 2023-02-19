import { IconType } from "react-icons/lib/esm/iconBase";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import "../Theme/card.css";

interface Props {
	title: String;
	Icon: IconType;
}

const Card = ({ Icon, title }: Props) => {
	const { color } = useContext(ThemeContext);

	return (
		<div
			className="card"
			style={{ color: color.main, borderColor: color.main }}>
			<div className="card_icon">
				<Icon />
			</div>
			<div className="card_text">{title}</div>
		</div>
	);
};

export default Card;
