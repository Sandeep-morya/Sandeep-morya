﻿import "../Styles/projects.css";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import useVisit from "../hooks/useVisit";
import Project from "./Project";

export interface ProjectItem {
	title: string;
	desc_body: string;
	features: string[];
	tech_stack: number[];
	laptop_image: string;
	mobile_image: string;
	liveUrl: string;
	githubUrl: string;
}

const projectList: ProjectItem[] = [
	{
		title: "CloudyNest",
		laptop_image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1680072768/xq2lm0tr6bxcnnuotgoy.png",
		mobile_image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1680072767/a7fhtc3whkx77kypaogx.png",
		liveUrl: "https://cloudynest.vercel.app/",
		githubUrl: "https://github.com/Sandeep-morya/Auraly",
		desc_body:
			"CloudyNest is an online shopping prototype website. This website is made by taking litte bit insperation from Meesho.com. Which is famous as India's largest and most trusted marketplace for Resellers, who sell products online through WhatsApp and Facebook.",
		features: [
			"Online Products sell and purchase",
			"Cart and Filter Options avialable",
			"Full Stack website (MERN used)",
			"Using Custom API server",
			"Manupulate Order Status",
			"Supplier & user can see their orders",
		],

		tech_stack: [0, 1, 3, 4, 6, 8, 9, 10, 11, 12],
	},
	{
		title: "Auraly",
		laptop_image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1680072768/gvsuekdx3wt7pyjkpzpn.png",
		mobile_image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1680072768/e44roo2hyreonhinqxzt.png",
		liveUrl: "https://sandeep-auraly.vercel.app/",
		githubUrl: "https://github.com/Sandeep-morya/Auraly",
		desc_body:
			"This is an open-source website for watching and downloading videos & music in HD quality. It can be helpful for peoples who wants an ad-free experience while watching movies and music",
		features: [
			"Watch Video & Movies",
			"Listen Music Online & Offline",
			"Ad Free Experience",
			"Single click downlaod",
			"Free HD content",
			"No need to install any plugin",
		],
		tech_stack: [0, 1, 3, 4, 5, 7, 13, 14],
	},
	{
		title: "Giphy-Clone",
		laptop_image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1680098697/rgurecagu4n1lyzk4ppt.png",
		mobile_image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1680098696/lunp0rbzqvs5uci5vriy.png",
		liveUrl: " https://giphy-clone-sage.vercel.app",
		githubUrl: "https://github.com/Sandeep-morya/Giphy_clone",
		desc_body:
			"Giphy, styled as GIPHY, is an American online database and search engine that allows users to search for and share short looping videos with no sound that resemble animated GIF files",
		features: [
			"Copy Animated Gifs",
			"Share Stickers & emoji",
			"High Quality gifs",
			"Looping video with no audio",
		],

		tech_stack: [0, 1, 2],
	},
];

const Projects = () => {
	const visit = useVisit();
	return (
		<div className="projects" id="projects">
			<Title title={"projects"} />

			{/*--->  All Projects  <---*/}

			{projectList.map((project) => (
				<Project key={project.title} {...{ project }} />
			))}

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
