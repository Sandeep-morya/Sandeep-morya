import Title from "./Title";
import "../Theme/contact.css";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";

const Contact = () => {
	const { color } = useContext(ThemeContext);

	return (
		<div className="contact" id="contact">
			<Title title={"Contact"} />
			<h1 style={{ color: color.main }}>Hire Me</h1>
			<div
				className="contact_body"
				style={{ borderColor: color.main, boxShadow: `0 0 5px  ${color.dimmed}` }}>
				<form className="contact_form">
					<h2>Leave me a Message</h2>
					<input
						type="text"
						placeholder="Your Name"
						style={{
							color: color.main,
							outlineColor: color.main,
							backgroundColor: color.dimmed,
						}}
					/>
					<textarea
						cols={30}
						rows={10}
						style={{
							color: color.main,
							outlineColor: color.main,
							backgroundColor: color.dimmed,
						}}
						placeholder={"Your Message"}></textarea>
					<Button Icon={MdSend} title="Send it to me !" />
				</form>
				<div
					className="contact_details"
					style={{ backgroundColor: color.dimmed }}>
					<img style={{ outlineColor: color.main }} src="/profile.png" alt="" />

					<div className="contact_icons" style={{ color: color.main }}>
						<FaGithub />
						<FaLinkedin />
						<FaFacebook />
						<FaInstagram />
						<FaTwitter />
					</div>

					<h2>Have A Great Day !</h2>
				</div>
			</div>
		</div>
	);
};

export default Contact;
