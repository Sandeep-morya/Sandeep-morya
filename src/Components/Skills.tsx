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
	SiTypescript,
	SiJquery,
	SiRedux,
	SiGit,
	SiFigma,
	SiMocha,
	SiEslint,
} from "react-icons/si";

const Skills = () => {
	return (
		<div className="skills" id="skills">
			<Title title={"Skills"} />
			<div className="cards">
				<Card
					title={"ui design"}
					Icon={MdStyle}
					techIcons={[SiHtml5, SiCss3, SiChakraui, SiMaterialui]}
					techNames={["HTML5", "CSS3", "Chakra UI", "MUI"]}></Card>
				<Card
					title={"frontend"}
					Icon={FaLaptopCode}
					techIcons={[
						SiJavascript,
						SiReact,
						SiRedux,
						SiTypescript,
						SiNextdotjs,
					]}
					techNames={[
						"javascript",
						"react",
						"redux",
						"typescript",
						"nextjs",
					]}></Card>

				<Card
					title={"backend"}
					Icon={FaDatabase}
					techIcons={[SiNodedotjs, SiExpress, SiMongodb, SiSwagger]}
					techNames={["nodejs", "express", "mongodb", "swagger"]}></Card>

				<Card
					title={"Optimizing"}
					Icon={FaCode}
					techIcons={[SiGit,SiEslint,]}
					techNames={["git","eslint"]}></Card>

				<Card
					title={"testing"}
					Icon={BiTestTube}
					techIcons={[SiCypress, SiMocha, SiTestinglibrary]}
					techNames={["cypress", "mocha", "rt library"]}></Card>
				<Card
					title={"extra"}
					Icon={FaTools}
					techIcons={[SiJquery, SiFigma]}
					techNames={["jquery", "figma"]}></Card>
			</div>
		</div>
	);
};

export default Skills;
