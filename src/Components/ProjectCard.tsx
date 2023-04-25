import "../Styles/project_card.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Styles from "../Styles/observer.module.css";
import useObserver from "../hooks/useObserver";
import { NavbarContext } from "../Provider/NavbarStateProvider";
import useVisit from "../hooks/useVisit";

interface Props {
	imageUrl: string;
	imageTitle: string;
	url: string;
}

const ProjectCard = (props: Props) => {
	const { color } = useContext(ThemeContext);
	const { ref, inView } = useObserver();
	const visit = useVisit();

	return (
		<div
			ref={ref}
			className={`project_card`}
			style={{
				color: color.main,
				filter: `drop-shadow(0 0 2px ${color.dimmed}`,
			}}>
			<div
				className="head"
				style={{ backgroundColor: color.dimmed, borderColor: color.main }}>
				<div className="arrows">
					<BsArrowLeftCircle />
					<BsArrowRightCircle />
				</div>
				<div className="url" onClick={() => visit(props.url)}>
					{props.url}
				</div>
				<div className="dots">
					<div style={{ backgroundColor: color.main }}></div>
					<div style={{ backgroundColor: color.main }}></div>
					<div style={{ backgroundColor: color.main }}></div>
				</div>
			</div>
			<div style={{ borderColor: color.main }} className="body">
				<img src={props.imageUrl} alt={props.imageTitle} />
				<div
					className="frame"
					style={{ backgroundColor: color.main, opacity: 0.3 }}></div>
			</div>
		</div>
	);
};

export default ProjectCard;
