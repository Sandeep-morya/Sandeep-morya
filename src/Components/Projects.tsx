import React from 'react'

import "../Theme/projects.css"
import ProjectCard from './ProjectCard'
import ProjectDesc from './ProjectDesc'
import Title from './Title'

const Projects = () => {
  return (
		<div className="projects" id="projects">
			<Title title={"projects"} />
			<div className="sub_heading">
				Here, are some <span className="highlight">projects</span> that i have
				worked on:
			</div>
			<div className="project one">
				<ProjectCard
					url={"https://railman.netlify.app/"}
					imageUrl={"/railman.png"}
					imageTitle={"Railman"}
				/>
				<ProjectDesc title="Railman" />
			</div>
			<div className="project two">
				<ProjectDesc title="Railman" />
				<ProjectCard
					url={"https://railman.netlify.app/"}
					imageUrl={"/railman.png"}
					imageTitle={"Railman"}
				/>
			</div>
			<div className="project three">
				<ProjectCard
					url={"https://railman.netlify.app/"}
					imageUrl={"/railman.png"}
					imageTitle={"Railman"}
				/>
				<ProjectDesc title="Railman" />
			</div>
			<div className="more">
				<h2>To see all Projects of my web devlopment journey</h2>
				<br />
				visit : https://sandeepmorya.netlify.app
				<br />
				github link : https://github.com/Sandeep-morya
			</div>
		</div>
	);
}

export default Projects