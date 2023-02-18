import React from "react";

import "../Theme/project_card.css";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
interface Props {
	imageUrl: String;
	imageTitle: String;
	url: String;
}

const ProjectCard = (props: Props) => {
	return (
		<div className="project_card">
			<div className="head">
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
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<img src={props.imageUrl.toString()} alt={props.imageTitle.toString()} />
		</div>
	);
};

export default ProjectCard;
