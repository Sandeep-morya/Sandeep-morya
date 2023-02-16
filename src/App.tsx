import { useContext, useState } from "react";
import Boot from "./Components/Boot";
import Footer from "./Components/Footer";
import MiddleComp from "./Components/MiddleComp";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./Provider/ThemeContextProvider";
const App = () => {
	/* To hide the Loader  */
	const [hidden, setHidden] = useState(false);
	setTimeout(() => {
		setHidden(true);
	}, 2000);

	/* Theme consumer */
	const { theme, colorMode, toggleColorMode } = useContext(ThemeContext);
	/* Rendering */
	return (
		<div style={{ backgroundColor: theme.bg, color: theme.c }}>
			{!hidden ? (
				<Boot />
			) : (
				<div>
					<Navbar />
					<MiddleComp />
					{/* <Footer /> */}
				</div>
			)}
		</div>
	);
};

export default App;
