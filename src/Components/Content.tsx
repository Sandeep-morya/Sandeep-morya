import React from "react";
import "../Theme/content.css";
import About from "./About";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./DevSkills"
import DevTools from "./DevTools";
type Props = {};

const Content = (props: Props) => {
	return (
		<div className="content">
			<Intro />
			<About />
			<Skills />
			<DevTools />
			{/* <Projects /> */}
		</div>
	);
};

export default Content;
