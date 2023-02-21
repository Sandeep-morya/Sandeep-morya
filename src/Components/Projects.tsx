import "../Styles/projects.css";
import Button from "./Button";
import ProjectCard from "./ProjectCard";
import ProjectDesc from "./ProjectDesc";
import Title from "./Title";
import { FaLink, FaGitAlt } from "react-icons/fa";
import Highlight from "./Highlight";

export interface ProjectItem {
	title: String;
	desc_body: String;
	features: String[];
	tech_stack: Number[];
}

const projectDescList: ProjectItem[] = [
	{
		title: "Railman",
		desc_body:
			"Railman is an unofficial, IRCTC unauthorized travel agent where train ticket bookings can be done online. Since everything is online on your website you need not call or email anyone. But neither IRCTC nor Railman will ever charge you anything and then confirm your ticket.",
		features: [
			"Online Ticket Booking",
			"Pnr Stauts Enquiry",
			"Check Trains Between Stations",
			"Track Train Running Status",
		],
		tech_stack: [0, 2, 7, 8, 9, 10, 11],
	},
	{
		title: "Youtube Clone",
		desc_body:
			"This is an open-source YouTube clone that lets you play YouTube videos on your smartphone and PC. It can be helpful for users want Ad free Youtube Experience",
		features: [
			"Youtube Clone",
			"Pure HTML, CSS, JavaScript",
			"Ad Free Experience",
			"Light-weight",
		],
		tech_stack: [0, 8],
	},
	{
		title: "Disney + Hotstar Clone",
		desc_body:
			"Disney+ Hotstar Clone (also known as Hotstar) is a subscription video on-demand over-the-top streaming service owned by The Walt Disney Company India and operated by Disney Entertainment, both divisions of The Walt Disney Company, featuring domestic Indian film, television and sport content for India itself and its worldwide diaspora.",
		features: ["Light weight", "Fast", "Video Stream"],
		tech_stack: [0, 8],
	},
];



const Projects = () => {
	return (
		<div className="projects" id="projects">
			<Title title={"projects"} />
			<div className="sub_heading">
				Here, are some <Highlight>projects</Highlight> that i have worked on:
			</div>

			{/*  CARD 1 */}
			<div className="project one">
				<div className="project_left">
					<ProjectCard
						url={"https://railman.netlify.app/"}
						imageUrl={"/railman.png"}
						imageTitle={"Railman"}
					/>
					<div className="project_btns">
						<Button
							url="https://railman.netlify.app/"
							Icon={FaLink}
							title="Visit to the Website"
						/>
						<Button Icon={FaGitAlt} title="Github Repository Link" />
					</div>
				</div>
				<ProjectDesc project_data={projectDescList[0]} />
			</div>

			{/*  CARD 2 */}
			<div className="project two">
				<ProjectDesc project_data={projectDescList[1]} />
				<div className="project_left">
					<ProjectCard
						url={"https://sandeepmorya.netlify.app/youtube_clone/"}
						imageUrl={"/youtube_clone.png"}
						imageTitle={"youtube_clone"}
					/>
					<div className="project_btns">
						<Button
							url={"https://sandeepmorya.netlify.app/youtube_clone/"}
							Icon={FaLink}
							title="Visit to the Website"
						/>
						<Button Icon={FaGitAlt} title="Github Repository Link" />
					</div>
				</div>
			</div>

			{/*  CARD 3 */}
			<div className="project three">
				<div className="project_left">
					<ProjectCard
						url={"https://sandeepmorya.netlify.app/disney_plus-hotstar_clone/"}
						imageUrl={"/hotstar_clone.png"}
						imageTitle={"hotstar_clone"}
					/>
					<div className="project_btns">
						<Button
							url="https://sandeepmorya.netlify.app/disney_plus-hotstar_clone/"
							Icon={FaLink}
							title="Visit to the Website"
						/>
						<Button Icon={FaGitAlt} title="Github Repository Link" />
					</div>
				</div>
				<ProjectDesc project_data={projectDescList[2]} />
			</div>
		</div>
	);
};

export default Projects;
