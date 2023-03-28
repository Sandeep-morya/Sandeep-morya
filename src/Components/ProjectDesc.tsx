import "../Styles/project_desc.css";
import { ProjectItem } from "./Projects";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

interface Props {
	project_data: ProjectItem;
}
const teach_list = [
	"HTML 5",
	"CSS 3",
	"JavaScript",
	"TypeScript",
	"React",
	"Vite",
	"NextJS",
	"Material UI",
	"Chakra UI",
	"Node JS",
	"Express",
	"Mongoose",
	"MongoDB",
	"Redux",
	"Google Oauth2",
	"JQuery",
];
const ProjectDesc = (props: Props) => {
	const { color } = useContext(ThemeContext);
	return (
		<div className="project_desc">
			<div
				style={{ borderColor: color.main, backgroundColor: color.dimmed }}
				className="desc_body">
				<h3 style={{ color: color.main }}>
					What is <q>{props.project_data.title}</q>
				</h3>
				<p>{props.project_data.desc_body}</p>
			</div>
			<div
				style={{ borderColor: color.main, backgroundColor: color.dimmed }}
				className="desc_features">
				<h3 style={{ color: color.main }}>Top Features of Railman Website</h3>
				<ul>
					{props.project_data.features.map((e) => {
						return <li key={e.toString()}>{e}</li>;
					})}
				</ul>
			</div>
			<div
				style={{ borderColor: color.main, backgroundColor: color.dimmed }}
				className="desc_tech">
				<h3 style={{ color: color.main }}>Technology Stack</h3>
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
