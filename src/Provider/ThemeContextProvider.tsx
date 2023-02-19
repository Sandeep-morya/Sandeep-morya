import React from "react";

/*  All Colors */
export const colorPalettes = {
	orange_shadow: {
		main: "rgb(244, 191, 0)",
		dimmed: "rgba(244, 191, 0,0.1)",
	},
	blue_whale: {
		main: "rgb(0, 153, 255)",
		dimmed: "rgba(0, 153, 255,0.1)",
	},
	green_hacker: {
		main: "rgb(65, 209, 3)",
		dimmed: "rgb(65, 209, 3,0.1)",
	},
	pink_Queen: {
		main: "rgb(255, 0, 89)",
		dimmed: "rgba(255, 0, 89,0.1)",
	},
	purple_witch: {
		main: "rgb(230, 0, 255)",
		dimmed: "rgba(230, 0, 255,0.1)",
	},
};

/* Context initialized */

let ThemeContext: React.Context<{
	color: {
		main: string;
		dimmed: string;
	};
	setColor: React.Dispatch<
		React.SetStateAction<{
			main: string;
			dimmed: string;
		}>
	>;
}>;

/* Getting Inital value from localStorage */
const initialValue:{
		main: string;
		dimmed: string;
	} = JSON.parse(localStorage.getItem('theme') as string) || colorPalettes.orange_shadow;

/* Component */
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [color, setColor] = React.useState(initialValue);

	const theme = {
		color,
		setColor,
	};

	ThemeContext = React.createContext(theme);

	React.useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(color));
	}, [color]);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

export { ThemeContext };

export default ThemeProvider;
