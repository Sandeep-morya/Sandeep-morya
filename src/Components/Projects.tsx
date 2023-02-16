import React from 'react'

import "../Theme/projects.css"
import Title from './Title'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <Title title={"projects"}/>
        <div className='sub_heading'>Here, are some <span className='highlight'>projects</span> that i have worked on:</div>
    </div>
  )
}

export default Projects