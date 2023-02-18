import "../Theme/about.css";
import Button from "./Button";
import Title from "./Title";

const About = () => {
	return (
		<div className="about" id="about">
			<Title title={"about me"} />
			<div className="about_description">
				<div className="texts">
					<div className="past">
						Hello, I am Sandeep Morya. I{" "}
						<span className="highlight">live in Ludhiana, Punjab</span>. I enjoy
						creating things that live on the internet. My interest in web
						development started back in <span className="highlight">2015</span>,
						when i was in intermidiate with commerce as my stream. Later, i
						decided to get knowldege about web develomment. So, I thought to
						complete my graduations in{" "}
						<span className="highlight">Computer Science</span>.
					</div>
					<div className="studies">
						I have completed my graduations in Bachelor of Computer Applications{" "}
						<span className="highlight">{"(BCA)"}</span> from{" "}
						<span className="highlight">Integral University</span> Lucknow. But
						as we know degree in not sufficient, so i joined an Masai School for
						learning web development.
					</div>

					<div className="today">
						Fast-forward to today, i am a
						<span className="highlight"> Full Stack Web Developer</span>. I have
						created 10+ web sites build using HTML, Css, & JavaScript. I 20+
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
					<div className="profile_pic">
						<img src="/profile.png" alt="sandeep-morya-profile-pic" />
						<div></div>
					</div>
					<div>
						<Button title="Download Resume"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
