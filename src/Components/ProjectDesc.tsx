import React from "react";

import "../Theme/project_desc.css";
interface Props {
	title: String;
}

const ProjectDesc = (props: Props) => {
	return (
		<div className="project_desc">
			<h1>{props.title}</h1>
			<div className="desc_body">
				Railman is an unofficial, IRCTC unauthorized travel agent where train
				ticket bookings can be done online. Since everything is online on your
				website you need not call or email anyone. But neither IRCTC nor Railman
				will ever charge you anything and then confirm your ticket.
			</div>
			<div className="desc_features">
				<h3>Top Features of Railman Website</h3>
				<ul>
					<li>Online Ticket Booking</li>
					<li>Pnr Stauts Enquiry</li>
					<li>Check Trains Between Stations</li>
					<li>Track Train Running Status</li>
				</ul>
			</div>
			<div className="desc_tech">
				<h3>Technoloy Stack</h3>
				<ul>
                    <li>HTML Css JavaScript</li>
					<li>React JS</li>
					<li>Chakra UI</li>
					<li>Express</li>
					<li>Mongoose</li>
					<li>MongoDB</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectDesc;
