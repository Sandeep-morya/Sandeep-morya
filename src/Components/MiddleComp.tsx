import React from "react";
import Content from "./Content";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

type Props = {};

const MiddleComp = (props: Props) => {
	return (
		<div className="main">
			<div className="left-bar">
				<LeftSideBar />
			</div>
			<div className="content-div">
				<Content />
			</div>
			<div className="right-bar">
				<RightSideBar />
			</div>
		</div>
	);
};

export default MiddleComp;
