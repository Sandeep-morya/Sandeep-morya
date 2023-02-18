interface Props {
	title: string;
}

const Button = (props: Props) => {
	return <button className="global_button">{props.title}</button>;
};

export default Button;
