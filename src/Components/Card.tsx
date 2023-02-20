import { IconType } from "react-icons/lib/esm/iconBase";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import "../Styles/card.css";

interface Props {
	title: String;
	Icon: IconType;
}

const Card = ({ Icon, title }: Props) => {
	const { color } = useContext(ThemeContext);

	return (
		// <div
		// 	className="card"
		// 	style={{
		// 		color: color.main,
		// 		borderColor: color.main,
		// 		backgroundColor: color.dimmed,
		// 	}}>
		// 	<div className="card_icon">
		// 		<Icon />
		// 	</div>
		// 	<div className="card_text">{title}</div>
		// </div>
		<div className="container">
			<div className="front" style={{ background: color.main }}>
				<div className="inner">
					<div>
						<Icon size={80} color={color.main} />
					</div>
					<span>{title}</span>
				</div>
			</div>
			<div className="back" style={{ background:"url(https://unsplash.it/502/502/)" }}>
				<div className="inner">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum
						repellat velit quae suscipit c.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
