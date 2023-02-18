interface Props {
    title:String
}

const Title = ({title}: Props) => {
  return (
    <div className='heading'>{title}</div>
  )
}

export default Title