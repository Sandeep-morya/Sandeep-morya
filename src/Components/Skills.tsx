import "../Styles/skills.css";
import Title from "./Title";
import { useEffect } from "react";
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
	SiRedux,
	SiWebrtc,
} from "react-icons/si";
import HexCard from "./HexCard";
import MantineLogo from "./MantineLogo";
import { useTheme } from "../Provider/ThemeContextProvider";

import Styles from "../Styles/observer.module.css";
import useObserver from "../hooks/useObserver";
import { useNavLink } from "../Provider/NavbarStateProvider";

const skillsData = [
	{
		title: "UI DESIGN",
		skillNames: [
			"HTML5",
			"CSS3",
			"Chakra-UI",
			"Material-UI",
			"Mantine-UI",
			"Tailwind-CSS",
		],
		Icons: [
			SiHtml5,
			SiCss3,
			SiChakraui,
			SiMaterialui,
			MantineLogo,
			SiTailwindcss,
		],
	},
	{
		title: "FRONTEND",
		skillNames: [
			"JavaScript",
			"React",
			"NextJS",
			"TypeScript",
			"Redux",
			"Cypress.io",
		],
		Icons: [
			SiJavascript,
			SiReact,
			SiNextdotjs,
			SiTypescript,
			SiRedux,
			SiCypress,
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
			"Web-RTC",
		],
		Icons: [
			SiNodedotjs,
			SiExpress,
			SiMongodb,
			SiSwagger,
			SiSocketdotio,
			SiWebrtc,
		],
	},
];

const Skills = () => {
	const { color } = useTheme();
	const { ref, inView } = useObserver();

	const { setLinkName } = useNavLink();

	useEffect(() => {
		if (inView) {
			setLinkName("skills");
		}
		//console.log("skills", inView);
	}, [inView]);

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

