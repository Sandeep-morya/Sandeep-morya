import { useTheme } from "../Provider/ThemeContextProvider";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import "../Styles/footer.css";
import FooterItem from "./FooterItem";

const footerItems = [
	{
		Icon: MdLocationOn,
		title: "Find Me",
		val: "#104, Jaspal Colony, Kakowal, Ludhiana",
	},
	{ Icon: MdPhone, title: "Call Me", val: "+91 | 998888-5304" },
	{ Icon: MdEmail, title: "Mail Me", val: "saabmaurya@gmail.com" },
];

const Footer = () => {
	const { color } = useTheme();

	return (
		<footer className="footer">
			<div className="footer_top">
				{footerItems.map((item, index) => (
					<FooterItem
						key={item.title}
						{...item}
						style={{
							transform: `translate(-${(index + 1) * 30}%)`,
							opacity: "0",
							transitionDelay: `${(index + 1) * 0.1}s`,
						}}
					/>
				))}
			</div>

			<div className="footer_bottom" style={{ borderColor: color.dimmed }}>
				<p>
					© Copyright 2023. &nbsp;&nbsp;
					<span>
						Designed by -{" "}
						<a href="https://github.com/Sandeep-morya/Sandeep-morya">
							Sandeep Morya
						</a>
					</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
