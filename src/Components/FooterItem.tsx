import { IconType } from "react-icons/lib/esm/iconBase";
import "../Styles/footer_item.css";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

interface Props {
	title: String;
	val: String;
	Icon: IconType;
}

const FooterItem = ({ title, val, Icon }: Props) => {
	const { color } = useContext(ThemeContext);
	return (
		<div className="footer_item">
			<Icon size={40} color={color.main} />
			<div>
				<h3 style={{ color: color.main }}>{title}</h3>
				<p>{val}</p>
			</div>
		</div>
	);
};

export default FooterItem;
