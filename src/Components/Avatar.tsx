import React from "react";
import "../Styles/avatar.css";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

const Avatar = () => {
	const { color } = useContext(ThemeContext);
	return (
		<div
			className="avatar"
			style={{
				backgroundColor: color.main,
				borderRadius: "50%",
			}}>
			<img style={{ outlineColor: color.main }} src="/vector.png" alt="" />
		</div>
	);
};

export default Avatar;
