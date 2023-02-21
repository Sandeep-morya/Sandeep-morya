import { MdDownload } from "react-icons/md";
import "../Styles/about.css";
import Button from "./Button";
import Highlight from "./Highlight";
import Title from "./Title";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

const About = () => {
	const { color } = useContext(ThemeContext);
	return (
		<div className="about" id="about">
			<Title title={"about me"} />
			<div className="about_description">
				<div className="texts">
					<div className="past">
						Hello, my name is Sandeep Morya. I{" "}
						<Highlight>live in Ludhiana, Punjab</Highlight>. I enjoy creating
						things that live on the internet. My interest in web development
						started back in <Highlight>2015</Highlight>, when i was in
						intermidiate with commerce as my stream. Later, i decided to get
						knowldege about web develomment. So, I thought to complete my
						graduations in <Highlight>Computer Science</Highlight>.
					</div>
					<div className="studies">
						I have completed my graduations in Bachelor of Computer Applications{" "}
						<Highlight>{"(BCA)"}</Highlight> from{" "}
						<Highlight>Integral University</Highlight> Lucknow. But as we know
						degree in not sufficient, so i joined an Masai School for learning
						web development.
					</div>

					<div className="today">
						Fast-forward to today, i am a
						<Highlight> Full Stack Web Developer</Highlight>. I have created 10+
						web sites build using HTML, Css, & JavaScript. I 20+
						projects/websites using frameworks, that you can find below in my
						projects section.
					</div>

					<div className="closing">
						Currently, Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Doloribus tenetur quos maxime nemo harum optio eum culpa temporibus
						aliquid quaerat.
					</div>
				</div>
				<div className="profile">
					<div className="profile_pic" style={{backgroundColor:color.main}}>
						<img src="/vector.png" alt="sandeep-morya-profile-pic" />
						<div style={{ borderColor: color.main }}></div>
					</div>
					<div>
						<Button Icon={MdDownload} title="Download Resume" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
