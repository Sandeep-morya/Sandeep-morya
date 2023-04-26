import { MdDownload } from "react-icons/md";
import "../Styles/about.css";
// import Button from "./Button";
import Highlight from "./Highlight";
import Title from "./Title";
import { useEffect } from "react";
import { useTheme } from "../Provider/ThemeContextProvider";
import { GiStarShuriken } from "react-icons/gi";
import Button from "./BubbleButton";
import useVisit from "../hooks/useVisit";

import Styles from "../Styles/observer.module.css";
import useObserver from "../hooks/useObserver";
import { useNavLink } from "../Provider/NavbarStateProvider";

const About = () => {
	const { color } = useTheme();

	const visit = useVisit();
	const { ref, inView } = useObserver();
	const { ref: desRef, inView: desInView } = useObserver();
	const { ref: picRef, inView: picInView } = useObserver();

	const { setLinkName } = useNavLink();

	useEffect(() => {
		if (inView) {
			setLinkName("about");
		}
	}, [inView]);

	return (
		<div ref={ref} className="about" id="about">
			<Title title={"about me"} />
			<div className={`about_description`}>

				{/*---:: About Section ::---*/}
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

				{/*---:: Profile Picture ::---*/}
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

						{/*---:: Download Resume Button ::---*/}
						
						<Button
							onClick={() =>
								visit(
									"https://drive.google.com/file/d/1siHlD4n_j4i3-jKvad9kg7uUoiDg8TbA/view?usp=share_link",
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
