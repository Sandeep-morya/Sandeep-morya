import React from "react";
import "../Styles/avatar.css";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

interface Props {
	title: String | React.ReactNode;
}

const Avatar = ({ title }: Props) => {
	const { color } = useContext(ThemeContext);
	return (
		<div className="avatar" id="#">
			{/* <div className="box_1" style={{borderColor:color.main}}></div>
			<div className="box_2" style={{borderColor:color.main,color:color.main}}>{title}</div> */}
			<h1 style={{ borderColor: color.main, color: color.main }}> _SM_ </h1>
		</div>
	);
};

export default Avatar;
