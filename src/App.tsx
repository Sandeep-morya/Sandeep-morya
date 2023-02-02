import { useContext } from "react";
import { ThemeContext } from "./Provider/ThemeContextProvider";
const App = () => {
	const { theme, colorMode, toggleColorMode } = useContext(ThemeContext);
	return (
		<div style={{ backgroundColor: theme.bg, color: theme.c }}>
			Hello world <br />
			<button
				style={{ backgroundColor: theme.bg, color: theme.c }}
				onClick={toggleColorMode}>
				Toggle
			</button>
		</div>
	);
};

export default App;
