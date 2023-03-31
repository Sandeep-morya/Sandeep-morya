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
// import { useInView } from "react-intersection-observer";
import Styles from "../Styles/observer.module.css";
import useObserver from "../hooks/useObserver";

const About = () => {
	const { color } = useContext(ThemeContext);
	const visit = useVisit();
	const { ref: desRef, inView: desInView } = useObserver();
	const { ref: picRef, inView: picInView } = useObserver();
	return (
		<div className="about" id="about">
			<Title title={"about me"} />
			<div className={`about_description`}>
				<div
					ref={desRef}
					className={`texts ${Styles.from_left} ${desInView && Styles.base}`}
					style={{
						backgroundColor: color.dimmed,
						borderColor: color.main,
						transitionDelay: "0.2s",
					}}>
					<div className="past">
						Hello, my name is Sandeep Morya. I{" "}
						<Highlight>live in Ludhiana, Punjab</Highlight>. I build things for
						the WEB and I enjoy creating things that live on the internet.
						<br />I have completed my graduations in Bachelor of Computer
						Applications <Highlight>{"(BCA)"}</Highlight> from{" "}
						<Highlight>Integral University</Highlight>, Lucknow. After that, I
						joined Masai School{" "}
						<Highlight>{"(Online coding bootcamp)"}</Highlight> for learning web
						development
					</div>
					<div className="today">
						Today, I am a qualified and professional web developer with good
						knowledge of <Highlight>MERN stack</Highlight>, and some frameworks
						like <Highlight>React, Next, Express</Highlight>. But still
						exploring other technologies and frameworks that catch my interest.
						If you're looking for a web developer to add to your team, I'd love
						to hear from you!
						<br />
						<br /> <GiStarShuriken color={color.main} /> Have a good experience
						in HTML5 & CSS3, JavaScript & <Highlight>TypeScript</Highlight>,
						React & Next.js, Express &<Highlight> MongoDB</Highlight>.
						<br /> <GiStarShuriken color={color.main} /> Had created so many
						fully functional, <Highlight>bugs free websites </Highlight>
						with attractive designs.
						<br />
						<GiStarShuriken color={color.main} /> Likes to do my work deeply &
						sincerely.
						<br /> <GiStarShuriken color={color.main} /> Would love to answers
						all the queries if you have any, without any hesitation.
					</div>
				</div>
				<div
					ref={picRef}
					style={{ transitionDelay: "0.5s" }}
					className={`profile ${Styles.from_right} ${
						picInView && Styles.base
					}`}>
					<div className="profile_pic" style={{ backgroundColor: color.main }}>
						<img
							src="https://res.cloudinary.com/due9pi68z/image/upload/v1680098809/uevnv967xka4pcxzcfky.png"
							alt="sandeep-morya-profile-pic"
						/>
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
									"https://drive.google.com/file/d/1FSQ16a1AHMkgIXVCLge8AfnGUjVMU3ni/view?usp=share_link",
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
