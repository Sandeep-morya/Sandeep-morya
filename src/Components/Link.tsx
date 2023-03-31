import React from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

type Props = {
	children: React.ReactNode;
	to: string;
	isActive: boolean;
};

const Link = ({ children, to, isActive }: Props) => {
	const { color } = React.useContext(ThemeContext);
	return (
		<div className="navlink">
			<a href={to}>{children}</a>
			<div
				style={{
					width: isActive ? "100%" : "0",
					backgroundImage: `linear-gradient(to left, ${color.main} , white)`,
				}}
				className="navlink_botttom_slider"></div>
		</div>
	);
};

export default Link;
