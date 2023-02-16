import React from 'react'

import "../Theme/intro.css"

const Intro = () => {
  return (
		<div className='intro'>
			<div className="content_intro">
				<span>Hi, my name is</span>
				<span>Sandeep Morya.</span>
				<span>
					I build things for <br /> the web.
				</span>
			</div>
			<div className='intro_desc'>
				I’m a software engineer specializing in building (and occasionally
				designing) exceptional digital experiences. Currently, I’m focused on
				building accessible, human-centered products at Upstatement.
			</div>
		</div>
	);
}

export default Intro