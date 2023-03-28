import React from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import "../Styles/project_mobile_card.css";
type Props = {
	imageUrl: string;
};

const ProjectMobileCard = ({ imageUrl }: Props) => {
	const { color } = React.useContext(ThemeContext);

	return (
		<div
			style={{ borderColor: color.main }}
			className="project_mobile_card_div">
			<div style={{ backgroundColor: color.main }} className="mobile_head">
				<div className="camera"></div>
			</div>
			<img src={imageUrl} alt={imageUrl} />
			<div className="frame" style={{ backgroundColor: color.dimmed }}></div>
		</div>
	);
};

export default ProjectMobileCard;
