import { IconType } from "react-icons/lib/esm/iconBase";

import "../Theme/card.css";
interface Props {
	title: String;
	Icon: IconType;
}

const Card = ({ Icon, title }: Props) => {
	return (
		<div className="card">
				<div className="card_icon">
					<Icon/>
				</div>
				<div className="card_text">{title}</div>

		</div>
	);
};

export default Card;
