import React from "react";
export const colorPalettes = {
	orange_shadow: "rgb(244, 191, 0)",
	blue_whale: "rgb(0, 153, 255)",
	green_hacker: "rgb(2, 235, 2)",
	pink_Queen: "rgb(255, 0, 89)",
};



let ThemeContext: React.Context<{
	color: string;
	setColor: React.Dispatch<React.SetStateAction<string>>;
}>;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [color, setColor] = React.useState(colorPalettes.orange_shadow);

	const theme = {
		color,
		setColor,
	};

	ThemeContext = React.createContext(theme);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

export { ThemeContext };

export default ThemeProvider;
