import React from 'react'
import Title from './Title'
import "../Theme/contact.css"

interface Props {}

const Contact = (props: Props) => {
  return (
		<div className="contact" id="contact">
			<Title title={"Contact"} />
			<div className='contact_body'>
				<h1>Hire Me</h1>
			</div>
		</div>
	);
}

export default Contact