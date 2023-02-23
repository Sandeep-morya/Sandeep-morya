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
				backgroundColor: isHover ? color.main : color.dimmed,
				color: isHover ? "rgba(255, 255, 255, 1)" : color.main,
				borderColor: color.main,
				boxShadow: `0 0 10px 5px ${
					isHover ? color.dimmed : "rgba(0, 0, 0, 0.1)"
				}`,
			}}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={() => location.assign(url || "/")}>
			<Icon />
			{title}
		</div>
	);
};

export default Button;
