import { IconType } from "react-icons/lib/esm/iconBase";
import { useState,useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

interface Props {
	title: string;
	Icon: IconType;
}

const Button = ({ title, Icon }: Props) => {
	const { color } = useContext(ThemeContext);
	const [isHover,setIsHover] = useState(false)
	return (
		<div
			className="global_button"
			style={{
				backgroundColor: color.dimmed,
				color: color.main,
				borderColor: color.main,
				boxShadow: `0 0 10px 5px ${isHover ? color.dimmed : "rgba(0, 0, 0, 0.1)"}`,
			}}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}>
			<Icon />
			{title}
		</div>
	);
};

export default Button;
