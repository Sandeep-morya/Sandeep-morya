import React from "react";
import { useContext, useState, useEffect } from "react";
import Boot from "./Components/Boot";
import Clock from "./Components/Clock";
import Content from "./Components/Content";
import Cursor from "./Components/Cursor";
import Footer from "./Components/Footer";
import MobNav from "./Components/MobNav";
import Navbar from "./Components/Navbar";
const App = () => {
	/* To hide the Loader  */
	const [hidden, setHidden] = useState(false);
	const cursorRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		const id = setTimeout(() => {
			setHidden(true);
		}, 1500);

		return () => {
			clearTimeout(id);
		};
	}, []);

	return (
		<div>
			{!hidden ? (
				<Boot />
			) : (
				<div
					onMouseMove={(e) =>
						(cursorRef.current!.style.transform = `translate3d(${e.pageX}px, ${
							e.pageY + 5
						}px, 0)`)
					}>
					<Cursor refs={cursorRef} />
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
