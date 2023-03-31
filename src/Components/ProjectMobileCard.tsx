import React from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import "../Styles/project_mobile_card.css";
import Styles from "../Styles/observer.module.css";

import useObserver from "../hooks/useObserver";
import { NavbarContext } from "../Provider/NavbarStateProvider";

type Props = {
	imageUrl: string;
};

const ProjectMobileCard = ({ imageUrl }: Props) => {
	const { color } = React.useContext(ThemeContext);
	const { ref, inView } = useObserver();

	return (
		<div
			ref={ref}
			style={{ borderColor: color.main, transitionDelay: "0.5s" }}
			className={`project_mobile_card_div  ${Styles.from_right} ${
				inView && Styles.base
			}`}>
			<div style={{ backgroundColor: color.main }} className="mobile_head">
				<div className="camera"></div>
			</div>
			<img src={imageUrl} alt={imageUrl} />
			<div className="frame" style={{ backgroundColor: color.dimmed }}></div>
		</div>
	);
};

export default ProjectMobileCard;
