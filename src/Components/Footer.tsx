import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import "../Styles/footer.css";
import FooterItem from "./FooterItem";

const Footer = () => {
	const { color } = useContext(ThemeContext);
	return (
		<div className="footer">
			<div className="footer_top">
				<FooterItem
					Icon={MdLocationOn}
					title={"Find Me"}
					val={"#104, Jaspal Colony, Kakowal, Ludhiana"}
				/>

				<FooterItem
					Icon={MdPhone}
					title={"Call Me"}
					val={"+91 | 998888-5304"}
				/>

				<FooterItem
					Icon={MdEmail}
					title={"Mail Me"}
					val={"saabmaurya@gmail.com"}
				/>
			</div>
		
			<div className="footer_bottom" style={{ borderColor: color.dimmed }}>
				<p>
					© Copyright 2023. &nbsp;&nbsp;<span>Made by - Sandeep Morya</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
