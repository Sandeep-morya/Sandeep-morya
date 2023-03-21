import React from "react";
import colorPalettes from "../Styles/colorPalette";
/*  All Colors */

interface ThemeContextType {
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
}
/* Context initialized */
export const ThemeContext = React.createContext({} as ThemeContextType);

/* Getting Inital value from localStorage */
const initialValue: {
	main: string;
	dimmed: string;
} =
	JSON.parse(localStorage.getItem("theme") as string) ||
	colorPalettes.main_shadow;

/* Component */
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [color, setColor] = React.useState(initialValue);

	const theme = {
		color,
		setColor,
	};

	React.useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(color));
	}, [color]);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
