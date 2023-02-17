import React from "react";
import "../Theme/avatar.css";
import { IconType } from "react-icons/lib/esm/iconBase";

interface Props{
	title:String|React.ReactNode
};

const Avatar = ({title}:Props) => {
	return (
		<div className="avatar">
			<div className="box_1"></div>
			<div className="box_2">{title}</div>
		</div>
	);
};

export default Avatar;
