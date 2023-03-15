import { IconType } from "react-icons/lib/esm/iconBase";
import { useState, useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

interface Props {
	title: string;
	Icon: IconType;
	url?: string;
}

const Button = ({ title, Icon, url }: Props) => {
	const { color } = useContext(ThemeContext);
	const [isHover, setIsHover] = useState(false);
	return (
		<div
			className="global_button"
			style={{
				backgroundColor: color.dimmed,
				color: isHover ? "rgba(255, 255, 255, 1)" : color.main,
				borderColor: color.main,
			}}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={() => window.open(url, "_blank")}>
			<Icon />
			{title}
		</div>
	);
};

export default Button;
