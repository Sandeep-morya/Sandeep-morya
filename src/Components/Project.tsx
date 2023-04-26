import { FaGitAlt, FaLink } from "react-icons/fa";
import Button from "./BubbleButton";
import ProjectCard from "./ProjectCard";
import ProjectDesc from "./ProjectDesc";
import ProjectMobileCard from "./ProjectMobileCard";
import "../Styles/projects.css";
import { ProjectItem } from "./Projects";
import useVisit from "../hooks/useVisit";
import { useTheme } from "../Provider/ThemeContextProvider";
type Props = {
	project: ProjectItem;
};

const Project = ({ project }: Props) => {
	const { color } = useTheme()
	const visit = useVisit();

	return (
		<div className="project">


			<div className="project_view">
				<ProjectCard
					url={project.liveUrl}
					imageUrl={project.laptop_image}
					imageTitle={project.title}
				/>

				<ProjectMobileCard imageUrl={project.mobile_image} />
			</div>

			<ProjectDesc project_data={project} />
			<div className="project_btns">
				<div className="left_line"></div>
				<Button
					colorScheme={color.main}
					onClick={() => visit(project.liveUrl)}
					size="lg"
					leftIcon={<FaLink />}>
					Visit to the Website
				</Button>
				<Button
					onClick={() => visit(project.githubUrl)}
					size="lg"
					leftIcon={<FaGitAlt />}
					colorScheme={color.main}>
					Github Repository Link
				</Button>
				<div className="right_line"></div>
			</div>
		</div>
	);
};

export default Project;
