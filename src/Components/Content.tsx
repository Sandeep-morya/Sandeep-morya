import "../Theme/content.css";
import About from "./About";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";


const Content = () => {
	return (
		<div className="content">
			<Intro />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
};

export default Content;
