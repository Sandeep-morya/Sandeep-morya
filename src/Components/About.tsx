import { MdDownload } from "react-icons/md";
import "../Styles/about.css";
// import Button from "./Button";
import Highlight from "./Highlight";
import Title from "./Title";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";
import { GiStarShuriken } from "react-icons/gi";
import Button from "./BubbleButton";
import useVisit from "../hooks/useVisit";

const About = () => {
	const { color } = useContext(ThemeContext);
	const visit = useVisit();
	return (
		<div className="about" id="about">
			<Title title={"about me"} />
			<div className="about_description">
				<div
					className="texts"
					style={{ backgroundColor: color.dimmed, borderColor: color.main }}>
					<div className="past">
						Hello, my name is Sandeep Morya.I{" "}
						<Highlight>live in Ludhiana, Punjab</Highlight>.I build things for
						the WEB. I enjoy creating things that live on the internet. I have
						completed my graduations in Bachelor of Computer Applications{" "}
						<Highlight>{"(BCA)"}</Highlight> from{" "}
						<Highlight>Integral University</Highlight> Lucknow. But as we know
						degree in not sufficient, so i joined an Masai School for learning
						web development.
					</div>

					<div className="today">
						Today, I am a qualified and professional web developer with great
						knowledge of <Highlight>MERN stack</Highlight>, & some frameworks
						like <Highlight>React, Next, Express</Highlight>. But still
						exploring other technologies and frameworks that catch my interest!
						If you're looking for a web developer to add to your team, I'd love
						to hear from you!
						<br />
						<br /> <GiStarShuriken color={color.main} /> I have a good
						experience in HTML5 & CSS3, JavaScript &{" "}
						<Highlight>TypeScript</Highlight>, React & Next.js, Express &
						<Highlight> MongoDB</Highlight>.
						<br /> <GiStarShuriken color={color.main} /> I have created so many
						fully functional, <Highlight>bugs free websites </Highlight>
						with attractive designs.
						<br />
						<GiStarShuriken color={color.main} /> I like to do my work deeply &
						sincerely.
						<br /> <GiStarShuriken color={color.main} /> I would love to answers
						all the queries if you have any, without any hesitation.
					</div>
				</div>
				<div className="profile">
					<div className="profile_pic" style={{ backgroundColor: color.main }}>
						<img src="/vector.png" alt="sandeep-morya-profile-pic" />
						<div
							style={{
								borderColor: color.main,
								backgroundColor: color.dimmed,
							}}></div>
					</div>
					<div>
						{/* <Button
							url="https://drive.google.com/file/d/1ZWoc4PciPTIc9PYDCt0P5oP-cp15h6c1/view?usp=share_link"
							Icon={MdDownload}
							title="Download Resume"
						/> */}
						<Button
							onClick={() =>
								visit(
									"https://drive.google.com/file/d/1ZWoc4PciPTIc9PYDCt0P5oP-cp15h6c1/view?usp=share_link",
								)
							}
							size="lg"
							leftIcon={<MdDownload />}
							colorScheme={color.main}>
							Download Resume
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
