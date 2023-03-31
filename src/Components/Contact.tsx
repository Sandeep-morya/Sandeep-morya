import Title from "./Title";
import "../Styles/contact.css";
import Button from "./BubbleButton";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdSend } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import useVisit from "../hooks/useVisit";

import Styles from "../Styles/observer.module.css";
import useObserver from "../hooks/useObserver";
import { NavbarContext } from "../Provider/NavbarStateProvider";

const initialValue = {
	name: "",
	message: "",
};

const Contact = () => {
	const { color } = useContext(ThemeContext);
	const [formData, setFormData] = useState(initialValue);
	const visit = useVisit();
	const { ref, inView } = useObserver();

	const { setLinkName } = useContext(NavbarContext);

	useEffect(() => {
		if (inView) {
			setLinkName("contact");
		}
	}, [inView]);

	return (
		<div className="contact" id="contact">
			<Title title={"Contact"} />
			<h1 style={{ color: color.main }}>Hire Me</h1>
			<div
				className={`contact_body ${Styles.from_left} ${inView && Styles.base}`}
				ref={ref}
				style={{
					borderColor: color.main,
					boxShadow: `0 0 5px  ${color.dimmed}`,
				}}>
				<form className="contact_form">
					<h2>Leave me a Message</h2>
					<input
						type="text"
						placeholder="Your Name"
						value={formData.name}
						style={{
							color: color.main,
							outlineColor: color.main,
							backgroundColor: color.dimmed,
						}}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					/>
					<textarea
						cols={30}
						rows={10}
						value={formData.message}
						style={{
							color: color.main,
							outlineColor: color.main,
							backgroundColor: color.dimmed,
							resize: "none",
						}}
						placeholder={"Your Message"}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}></textarea>

					<Button
						onClick={() =>
							visit(
								`mailto:saabmaurya@gmail.com?subject=${formData.name}&body=${formData.message}`,
							)
						}
						size="lg"
						colorScheme={color.main}
						leftIcon={<MdSend />}>
						Send it to me !
					</Button>
				</form>
				<div
					className="contact_details"
					style={{ backgroundColor: color.dimmed }}>
					<div
						style={{
							backgroundColor: color.main,
							borderRadius: "50%",
							height: "8rem",
						}}>
						<img
							style={{ outlineColor: color.main }}
							src="https://res.cloudinary.com/due9pi68z/image/upload/v1680098809/uevnv967xka4pcxzcfky.png"
							alt=""
						/>
					</div>

					<div className="contact_icons" style={{ color: color.main }}>
						<FaGithub
							onClick={() =>
								visit("https://github.com/Sandeep-morya/Sandeep-morya")
							}
						/>
						<FaLinkedin
							onClick={() =>
								visit("https://www.linkedin.com/in/sandeep-morya-7896ba111/")
							}
						/>
						<SiUpwork
							onClick={() =>
								visit("https://www.upwork.com/workwith/sandeepm13")
							}
						/>
						<FaFacebook
							onClick={() => visit("https://www.facebook.com/Sandeepmaurya13/")}
						/>
						<RiWhatsappFill
							onClick={() =>
								visit("https://api.whatsapp.com/send?phone=919988885304")
							}
						/>
					</div>

					<h2>Have A Great Day !</h2>
				</div>
			</div>
		</div>
	);
};

export default Contact;
