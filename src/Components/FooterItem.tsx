import React from 'react'
import { IconType } from "react-icons/lib/esm/iconBase";
import "../Theme/footer_item.css"


interface Props {
    title:String;
    val:String;
    Icon:IconType;
}


const FooterItem = ({title,val,Icon}: Props) => {
  return (
		<div className='footer_item'>
			<Icon size={40} />
			<div>
				<h3>{title}</h3>
				<p>{val}</p>
			</div>
		</div>
	);
}

export default FooterItem