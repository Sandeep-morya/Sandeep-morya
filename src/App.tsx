import React from "react";
import { useContext, useState, useEffect } from "react";
import Boot from "./Components/Boot";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
const App = () => {
	/* To hide the Loader  */
	const [hidden, setHidden] = useState(false);


	useEffect(() => {
		setTimeout(() => {
			setHidden(true);
		}, 2000);
	}, []);

	return (
		<div>
			
			{!hidden ? (
				<Boot />
			) : (
				<div>
					<Navbar />
					<Content />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default App;
