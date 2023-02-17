import React from 'react'
import Title from './Title'
import "../Theme/dev_tools.css"

interface Props {}

const DevTools = (props: Props) => {
  return (
		<div className="dev_tools" id="dev_tools">
			<Title title={"dev tools"} />
            <div className='sub_heading'>Here are Some tools that i learn in my web developing journey: </div>
		</div>
	);
}

export default DevTools