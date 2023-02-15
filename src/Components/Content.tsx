import React from "react";
import "../Theme/content.css";
import About from "./About";
import Button from "./Button";
type Props = {};

const Content = (props: Props) => {
	return (
		<div className="content">
			<div className="content_intro">
				<span>Hi, my name is</span>
				<span>Sandeep Morya.</span>
				<span>I build things for <br /> the web.</span>
			</div>
			<div>
				I’m a software engineer specializing in building (and occasionally
				designing) exceptional digital experiences. Currently, I’m focused on
				building accessible, human-centered products at Upstatement.
			</div>
<About />
		</div>
	);
};

export default Content;
