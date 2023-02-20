﻿import "../Styles/project_desc.css";
import { ProjectItem } from "./Projects";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

interface Props {
	project_data: ProjectItem;
}
const teach_list = [
	"HTML - Css - JavaScript",
	"HTML - Css - TypeScript",
	"React JS",
	"React TS",
	"NextJS JavaScript",
	"NextJS TypeScript",
	"Material UI",
	"Chakra UI",
	"Node JS",
	"Express",
	"Mongoose",
	"MongoDB",
];
const ProjectDesc = (props: Props) => {
	const { color } = useContext(ThemeContext);
	return (
		<div className="project_desc">
			<h1 style={{ color: color.main }}>{props.project_data.title}</h1>
			<div className="desc_body">{props.project_data.desc_body}</div>
			<div className="desc_features">
				<h3 style={{ color: color.main }}>Top Features of Railman Website</h3>
				<ul>
					{props.project_data.features.map((e) => {
						return <li key={e.toString()}>{e}</li>;
					})}
				</ul>
			</div>
			<div className="desc_tech">
				<h3>Technology Stack</h3>
				<ul>
					{props.project_data.tech_stack.map((e) => {
						return <li key={e.toString()}>{teach_list[Number(e)]}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default ProjectDesc;