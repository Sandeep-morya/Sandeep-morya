import { useContext } from "react";
import { ThemeContext } from "./Provider/ThemeContextProvider";
const App = () => {
	const { theme, colorMode, toggleColorMode } = useContext(ThemeContext);
	return (
		<div style={{ backgroundColor: theme.bg, color: theme.c }}>
			i will start to create this website after 20 february <br />
			till then :visit <a href="https://sandeepmorya.netlify.app/"> See my Projects create with vanilla js
			</a>
			<button
				style={{ backgroundColor: theme.bg, color: theme.c }}
				onClick={toggleColorMode}>

				Toggle
			</button>
		</div>
	);
};

export default App;
