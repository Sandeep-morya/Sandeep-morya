import React from "react";
import Content from "./Content";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

import "../Theme/middle.css"

type Props = {};

const MiddleComp = (props: Props) => {
	return (
		<div className="middle_comp">
			<div className="left_bar_div">
				<LeftSideBar />
			</div>
			<div className="content_div">
				<Content />
			</div>
			<div className="right_bar_div">
				<RightSideBar />
			</div>
		</div>
	);
};

export default MiddleComp;
