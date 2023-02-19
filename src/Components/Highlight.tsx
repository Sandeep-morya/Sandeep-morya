import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

interface Props {
	children: String;
}

const Highlight = ({ children }: Props) => {
	const { color } = useContext(ThemeContext);
	return (
		<span style={{ color: color.main, fontSize: "1rem", fontWeight: "bold" }}>
			{children}
		</span>
	);
};

export default Highlight;
