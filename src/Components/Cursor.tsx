import React from 'react'
import { ThemeContext } from '../Provider/ThemeContextProvider';

type Props = {
	refs: React.RefObject<HTMLDivElement>;
};

const Cursor = ({refs}: Props) => {
    const {color} = React.useContext(ThemeContext)
  return (
    <div ref={refs} className={'cursor'} style={{backgroundColor:color.main}} ></div>
  )
}

export default Cursor