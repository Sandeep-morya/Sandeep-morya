import { useTheme } from "../Provider/ThemeContextProvider";

interface Props {
	children: String;
}

const Highlight = ({ children }: Props) => {
	const { color } = useTheme();
	return (
		<span style={{ color: color.main, fontSize: "1rem", fontWeight: "bold" }}>
			{children}
		</span>
	);
};

export default Highlight;
