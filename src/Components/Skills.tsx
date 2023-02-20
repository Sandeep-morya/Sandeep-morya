import "../Styles/skills.css";
import Title from "./Title";
import Card from "./Card";
import { MdStyle } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";
import { FaDatabase, FaLaptopCode, FaTools, FaCode } from "react-icons/fa";

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
	SiTestinglibrary,
	SiCypress,
	SiEslint,
	SiTypescript,
	SiJquery,
	SiRedux,
	SiGit,
	SiNpm,
	SiFigma,
	SiMocha,
	SiChai,
} from "react-icons/si";

const Skills = () => {
	return (
		<div className="skills" id="skills">
			<Title title={"Skills"} />
			<div className="cards">
				<Card
					title={"ui design"}
					Icon={MdStyle}
					techIcons={[SiCss3, SiChakraui, SiMaterialui, SiTailwindcss]}
					techNames={["CSS3", "Chakra UI", "MUI", "Tailwind"]}></Card>
				<Card
					title={"frontend"}
					Icon={FaLaptopCode}
					techIcons={[SiHtml5, SiJavascript, SiReact, SiNextdotjs]}
					techNames={["HTML5", "javascript", "react", "nextjs"]}></Card>

				<Card
					title={"backend"}
					Icon={FaDatabase}
					techIcons={[SiNodedotjs, SiExpress, SiMongodb, SiSwagger]}
					techNames={["nodejs", "express", "mongodb", "swagger"]}></Card>

				<Card
					title={"Optimizing"}
					Icon={FaCode}
					techIcons={[SiTypescript, SiRedux, SiGit, SiNpm]}
					techNames={["typescript", "redux", "git", "npm"]}></Card>

				<Card
					title={"testing"}
					Icon={BiTestTube}
					techIcons={[SiCypress, SiTestinglibrary, SiMocha, SiChai]}
					techNames={["cypress", "rt library", "mocha", "chai"]}></Card>
				<Card
					title={"extra"}
					Icon={FaTools}
					techIcons={[SiEslint, SiJquery, SiFigma]}
					techNames={["eslint", "jquery", "figma"]}></Card>
			</div>
		</div>
	);
};

export default Skills;
