import React from "react";

type Props = {};
import "../Theme/left_bar.css"

const LeftSideBar = (props: Props) => {
	return (
		<div className="left_bar">
			<a href="#">
				<img
					src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
					alt="linkedin-icon"
				/>
			</a>
			<a href="#">
				<img
					src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
					alt="github-icon"
				/>
			</a>
			<a href="#">
				<img
					src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
					alt="twitter-icon"
				/>
			</a>
			<a href="#">
				<img src="logos/facebook.png" alt="facebook-icon" />
			</a>
			<a href="#">
				<img src="/logos/gmail.png" alt="gmail-icon" />
			</a>
		</div>
	);
};

export default LeftSideBar;
