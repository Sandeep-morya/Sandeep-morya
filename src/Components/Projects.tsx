import "../Styles/projects.css";
import Button from "./BubbleButton";
import ProjectCard from "./ProjectCard";
import ProjectDesc from "./ProjectDesc";
import Title from "./Title";
import { FaLink, FaGitAlt, FaAngleDoubleRight } from "react-icons/fa";
import Highlight from "./Highlight";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import useVisit from "../hooks/useVisit";
import ProjectMobileCard from "./ProjectMobileCard";

export interface ProjectItem {
	title: String;
	desc_body: String;
	features: String[];
	tech_stack: Number[];
}

const projectDescList: ProjectItem[] = [
	{
		title: "CloudyNest",
		desc_body:
			"CloudyNest is an online shopping prototype website. This website is made by taking litte bit insperation from Meesho.com. Which is famous as India's largest and most trusted marketplace for Resellers, who sell products online through WhatsApp and Facebook." /* Trusted by over 50,000 Resellers, Meesho helps them grow their online business by providing, Hit products at Lowest prices. */,
		features: [
			"Online Products sell and purchase",
			"Cart and Filter Options avialable",
			"Full Stack website (MERN used)",
			"Fast and Reliable",
		],

		tech_stack: [0, 1, 3, 4, 6, 8, 9, 10, 11, 12],
	},
	{
		title: "Auraly",
		desc_body:
			"This is an open-source YouTube clone that lets you play YouTube videos on your smartphone and PC. It can be helpful for users want Ad free Youtube Experience",
		features: [
			"Youtube Clone",
			"Pure HTML, CSS, JavaScript",
			"Ad Free Experience",
			"Light-weight",
		],

		tech_stack: [0, 1, 3, 4, 5, 7, 13, 14],
	},
	{
		title: "03. Disney + Hotstar Clone",
		desc_body:
			"Disney+ Hotstar Clone (also known as Hotstar) is a subscription video on-demand over-the-top streaming service owned by The Walt Disney Company India and operated by Disney Entertainment, both divisions of The Walt Disney Company, featuring domestic Indian film, television and sport content for India itself and its worldwide diaspora.",
		features: ["Light weight", "Fast", "Video Stream"],
		tech_stack: [0, 8],
	},
];

const Projects = () => {
	const { color } = useContext(ThemeContext);
	const visit = useVisit();
	return (
		<div className="projects" id="projects">
			<Title title={"projects"} />

			{/*  CARD 1 */}
			<div className="project">
				<h1 style={{ color: color.main }}>{"01 - CloudyNest"}</h1>

				<div className="project_view">
					<ProjectCard
						url={"https://cloudynest.vercel.app/"}
						imageUrl={"/CloudyNest-Shopping.png"}
						imageTitle={"CloudyNest-Shopping"}
					/>

					<ProjectMobileCard imageUrl={"/CloudyNest-Shopping-mobile.png"} />
				</div>

				<ProjectDesc project_data={projectDescList[0]} />
			</div>

			{/*  CARD 2 */}
			<div className="project">
				<h1 style={{ color: color.main }}>{"02 - Auraly"}</h1>

				<div className="project_view">
					<ProjectCard
						url={"https://sandeep-auraly.vercel.app/"}
						imageUrl={"/Auraly.png"}
						imageTitle={"Auraly"}
					/>

					<ProjectMobileCard imageUrl={"/Auraly-mobile-1.png"} />
				</div>

				<ProjectDesc project_data={projectDescList[1]} />
			</div>

			{/*  CARD 3 */}
			{/* <div className="project">
				<h1 style={{ color: color.main }}>{"03 - CloudyNest"}</h1>
				<div className="project_view">
					<ProjectCard
						url={"https://cloudynest.vercel.app/"}
						imageUrl={"/CloudyNest-Shopping.png"}
						imageTitle={"CloudyNest-Shopping"}
					/>

					<ProjectMobileCard imageUrl={"/Auraly-mobile-2.png"} />
				</div>

				<ProjectDesc project_data={projectDescList[0]} />
			</div> */}

			<h1
				onClick={() => visit("https://sandeepmorya.netlify.app/")}
				className="more_link">
				<FaAngleDoubleRight />
				More
			</h1>
		</div>
	);
};

export default Projects;

/*
<div className="projects" id="projects">
			<Title title={"projects"} />


			<div className="project one">
				<div className="project_left">
					<ProjectCard
						url={"https://cloudynest.vercel.app/"}
						imageUrl={"/CloudyNest-Shopping.png"}
						imageTitle={"CloudyNest-Shopping"}
					/>
					<div className="project_btns">
						<Button
							colorScheme={color.main}
							onClick={() => visit("https://cloudynest.vercel.app/")}
							size="lg"
							leftIcon={<FaLink />}>
							Visit to the Website
						</Button>
						<Button size="lg" leftIcon={<FaGitAlt />} colorScheme={color.main}>
							Github Repository Link
						</Button>
					</div>
				</div>
				<ProjectDesc project_data={projectDescList[0]} />
				<ProjectMobileCard />
			</div>


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
							colorScheme={color.main}
							onClick={() =>
								visit("https://sandeepmorya.netlify.app/youtube_clone/")
							}
							size="lg"
							leftIcon={<FaLink />}>
							Visit to the Website
						</Button>
						<Button size="lg" leftIcon={<FaGitAlt />} colorScheme={color.main}>
							Github Repository Link
						</Button>
					</div>
				</div>
			</div>


			<div className="project three">
				<div className="project_left">
					<ProjectCard
						url={"https://sandeepmorya.netlify.app/disney_plus-hotstar_clone/"}
						imageUrl={"/hotstar_clone.png"}
						imageTitle={"hotstar_clone"}
					/>
					<div className="project_btns">
						<Button
							colorScheme={color.main}
							onClick={() =>
								visit(
									"https://sandeepmorya.netlify.app/disney_plus-hotstar_clone/",
								)
							}
							size="lg"
							leftIcon={<FaLink />}>
							Visit to the Website
						</Button>
						<Button size="lg" leftIcon={<FaGitAlt />} colorScheme={color.main}>
							Github Repository Link
						</Button>
					</div>
				</div>
				<ProjectDesc project_data={projectDescList[2]} />
			</div>

			<h1
				onClick={() => visit("https://sandeepmorya.netlify.app/")}
				className="more_link">
				<FaAngleDoubleRight />
				More
			</h1>
		</div> */
