import React from 'react'

import "../Theme/intro.css"

const Intro = () => {
  return (
		<div className="intro">
			<div className="content_intro">
				<span>Hi, my name is</span>
				<span>Sandeep Morya</span>
				<span>
					I build things for the <br /> web.
				</span>
			</div>
			<div className="intro_desc">
				An engineer or developer who works on both the front end (client-side) and the back end (server-side) of a website or application is called a full-stack developer. They may handle projects involving databases, APIs, or designing user-facing websites, as well as interacting with clients during development.
			</div>
		</div>
	);
}

export default Intro