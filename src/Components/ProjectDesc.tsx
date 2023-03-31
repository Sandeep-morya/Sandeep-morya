import "../Styles/project_desc.css";
import { ProjectItem } from "./Projects";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import Styles from "../Styles/observer.module.css";
// import { useInView } from "react-intersection-observer";
import useObserver from "../hooks/useObserver";

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
	"React Redux",
	"Google Oauth2",
	"JQuery",
];
const ProjectDesc = (props: Props) => {
	const { color } = useContext(ThemeContext);
	const { ref, inView } = useObserver();
	return (
		<div ref={ref} className="project_desc">
			<div
				style={{
					borderColor: color.main,
					backgroundColor: color.dimmed,
					transform: "translateX(-30%)",
					transitionDelay: "0.15s",
					opacity: "0",
				}}
				className={`desc_body ${inView && Styles.base}`}>
				<h3 style={{ color: color.main }}>
					What is <q>{props.project_data.title}</q>
				</h3>
				<p>{props.project_data.desc_body}</p>
			</div>
			<div
				style={{
					borderColor: color.main,
					backgroundColor: color.dimmed,
					transform: "translateX(-60%)",
					transitionDelay: "0.3s",
					opacity: "0",
				}}
				className={`desc_features ${inView && Styles.base}`}>
				<h3 style={{ color: color.main }}>
					Features in <q>{props.project_data.title}</q> Website
				</h3>
				<ul>
					{props.project_data.features.map((e) => {
						return <li key={e.toString()}>{e}</li>;
					})}
				</ul>
			</div>
			<div
				style={{
					borderColor: color.main,
					backgroundColor: color.dimmed,
					transform: "translateX(-90%)",
					transitionDelay: "0.5s",
					opacity: "0",
				}}
				className={`desc_tech ${inView && Styles.base}`}>
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
