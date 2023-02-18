import React from 'react'
import Title from './Title'
import "../Theme/contact.css"
import Button from './Button';


import { FaFacebook, FaGithub,FaInstagram,FaLinkedin, FaTwitter} from "react-icons/fa"

const Contact = () => {
  return (
		<div className="contact" id="contact">
			<Title title={"Contact"} />
			<h1>Hire Me</h1>
			<div className="contact_body">
				<form className="contact_form">
					<h2>Leave me a Message</h2>
					<input type="text" placeholder="Your Name" />
					<textarea
						name=""
						id=""
						cols={30}
						rows={10}
						placeholder={"Your Message"}></textarea>
					<Button title="Send it to me !" />
				</form>
				<div className="contact_details">
					<img src="/profile.png" alt="" />

					<div className="contact_icons">
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
}

export default Contact