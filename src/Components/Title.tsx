import { useTheme } from "../Provider/ThemeContextProvider";
interface Props {
	title: String;
}

const Title = ({ title }: Props) => {
	const { color } = useTheme();
	return (
		<div style={{ color: color.main }} className="seven">
			<h1>{`< ${title} />`}</h1>
		</div>
	);
};

export default Title;
