import {useContext} from "react"
import { ThemeContext } from "../Provider/ThemeContextProvider"
interface Props {
    title:String
}

const Title = ({title}: Props) => {
  const {color} = useContext(ThemeContext)
  return (
    <div className='heading' style={{color:color.main}}>{title}<div style={{backgroundColor:color.main}}></div></div>
  )
}

export default Title