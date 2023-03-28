import "../Styles/project_card.css";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

interface Props {
	imageUrl: String;
	imageTitle: String;
	url: String;
}

const ProjectCard = (props: Props) => {
	const { color } = useContext(ThemeContext);
	return (
		<div
			className="project_card"
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
				<div
					className="url"
					onClick={() => window.location.assign(props.url.toString())}>
					{props.url}
				</div>
				<div className="dots">
					<div style={{ backgroundColor: color.main }}></div>
					<div style={{ backgroundColor: color.main }}></div>
					<div style={{ backgroundColor: color.main }}></div>
				</div>
			</div>
			<div style={{ borderColor: color.main }} className="body">
				<img
					src={props.imageUrl.toString()}
					alt={props.imageTitle.toString()}
				/>
				<div className="frame" style={{ backgroundColor: color.dimmed }}></div>
			</div>
		</div>
	);
};

export default ProjectCard;
