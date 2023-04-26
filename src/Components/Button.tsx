import { IconType } from "react-icons/lib/esm/iconBase";
import { useState } from "react";
import { useTheme } from "../Provider/ThemeContextProvider";

interface Props {
	title: string;
	Icon: IconType;
	url?: string;
}

const Button = ({ title, Icon, url }: Props) => {
	const { color } = useTheme();
	const [isHover, setIsHover] = useState(false);
	return (
		<div
			className="global_button"
			style={{
				backgroundColor: color.dimmed,
				color: isHover ? "rgba(255, 255, 255, 1)" : color.main,
				borderColor: color.main,
			}}
			onClick={() => window.open(url, "_blank")}>
			<Icon />
			{title}
		</div>
	);
};

export default Button;
