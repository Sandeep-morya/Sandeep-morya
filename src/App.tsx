import React from "react";
import { useContext, useState, useEffect } from "react";
import Boot from "./Components/Boot";
import Clock from "./Components/Clock";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import MobNav from "./Components/MobNav";
import Navbar from "./Components/Navbar";
const App = () => {
	/* To hide the Loader  */
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setHidden(true);
		}, 1500);
	}, []);

	return (
		<div>
			{!hidden ? (
				<Boot />
			) : (
				<div>
					<Navbar />
					<MobNav />
					<Content />
					<Footer />
				</div>
			)}
		</div>
	);
};

export default App;
