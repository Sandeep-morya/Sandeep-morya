import React from "react";
import "../Theme/content.css";
import About from "./About";
import Button from "./Button";
import Intro from "./Intro";
import Projects from "./Projects";
import Tech from "./Tech";
type Props = {};

const Content = (props: Props) => {
	return (
		<div className="content">
			<Intro />
			<About />
			{/* <Tech /> */}
			<Projects />
		</div>
	);
};

export default Content;
