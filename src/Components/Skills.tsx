import "../Styles/skills.css";
import Title from "./Title";
import Card from "./Card";
import { MdStyle } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { FaDatabase, FaLaptopCode, FaTools, FaCode } from "react-icons/fa";
import React from "react";
import {
	SiChakraui,
	SiCss3,
	SiMaterialui,
	SiTailwindcss,
	SiHtml5,
	SiJavascript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiSwagger,
	SiSocketdotio,
	SiCypress,
	SiTypescript,
	SiJquery,
	SiRedux,
	SiGit,
	SiFigma,
	SiMocha,
	SiEslint,
} from "react-icons/si";
import HexCard from "./HexCard";
import colorPalettes, { randomColor } from "../colorPalette";
import { colorsArray } from "../colorPalette";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import { useInView } from "react-intersection-observer";
import Styles from "../Styles/observer.module.css";

const skillsData = [
	{
		title: "UI DESIGN",
		skillNames: [
			"HTML5",
			"CSS3",
			"Figma",
			"Chakra-UI",
			"Material-UI",
			"Tailwind-CSS",
		],
		Icons: [SiHtml5, SiCss3, SiFigma, SiChakraui, SiMaterialui, SiTailwindcss],
	},
	{
		title: "FRONTEND",
		skillNames: [
			"JavaScript",
			"React",
			"NextJS",
			"TypeScript",
			"JQuery",
			"Redux",
		],
		Icons: [
			SiJavascript,
			SiReact,
			SiNextdotjs,
			SiTypescript,
			SiJquery,
			SiRedux,
		],
	},
	{
		title: "BACKEND",
		skillNames: [
			"NodeJS",
			"ExpressJS",
			"MongoDB",
			"Swagger",
			"Socket.io",
			"Cypress",
		],
		Icons: [
			SiNodedotjs,
			SiExpress,
			SiMongodb,
			SiSwagger,
			SiSocketdotio,
			SiCypress,
		],
	},
];

const Skills = () => {
	const { color } = React.useContext(ThemeContext);
	const { ref, inView } = useInView();

	return (
		<div className="skills" id="skills">
			<Title title={"Skills"} />
			<div ref={ref} className="cards">
				{skillsData.map((skill, index) => (
					<div
						style={{
							transform: "rotateZ(-10deg)",
							transitionDelay: `${(index + 1) * 0.1}s`,
						}}
						key={skill.title}
						className={`${inView && Styles.base}`}>
						<HexCard colorScheme={color} {...skill} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;

/* 				<Card
					title={"Optimizing"}
					Icon={FaCode}
					techIcons={[SiGit,SiEslint,]}
					techNames={["git","eslint"]}></Card>

				<Card
					title={"testing"}
					Icon={BiTestTube}
					techIcons={[SiCypress, SiMocha, SiSocketdotio]}
					techNames={["cypress", "mocha", "rt library"]}></Card>

				<Card
					title={"extra"}
					Icon={FaTools}
					techIcons={[SiJquery, SiFigma]}
					techNames={["jquery", "figma"]}></Card> */
