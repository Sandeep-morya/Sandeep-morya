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
import colorPalettes, { randomColor } from "../Styles/colorPalette";
import { colorsArray } from "../Styles/colorPalette";
import { ThemeContext } from "../Provider/ThemeContextProvider";

const Skills = () => {
	const { color } = React.useContext(ThemeContext);

	return (
		<div className="skills" id="skills">
			<Title title={"Skills"} />
			<div className="cards">
				<HexCard
					title="UI DESIGN"
					colorScheme={color}
					Icons={[
						SiHtml5,
						SiCss3,
						SiFigma,
						SiChakraui,
						SiMaterialui,
						SiTailwindcss,
					]}
				/>
				<HexCard
					title="FRONTEND"
					colorScheme={
						colorPalettes.orange_fish.main === color.main
							?{ main: "rgba(255, 255, 255, 1)",
									dimmed: "rgba(255, 255, 255, 0.1)",}
							: colorPalettes.orange_fish
					}
					Icons={[
						SiJavascript,
						SiReact,
						SiNextdotjs,
						SiTypescript,
						SiJquery,
						SiRedux,
					]}
				/>
				<HexCard
					title="BACKEND"
					colorScheme={
						colorPalettes.green_hacker.main === color.main
							? {
									main: "rgba(255, 255, 255, 1)",
									dimmed: "rgba(255, 255, 255, 0.1)",
							  }
							: colorPalettes.green_hacker
					}
					Icons={[
						SiNodedotjs,
						SiExpress,
						SiMongodb,
						SiSwagger,
						SiSocketdotio,
						SiCypress,
					]}
				/>

				{/* <Card
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
					techNames={["jquery", "figma"]}></Card> */}
			</div>
		</div>
	);
};

export default Skills;
