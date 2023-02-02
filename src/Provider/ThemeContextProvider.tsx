import React from "react";
import createTheme, { mode, themeType } from "../Theme";

let ThemeContext: React.Context<{
	theme: themeType;
	colorMode: mode;
	toggleColorMode: () => void;
}>;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [colorMode, setColorMode] = React.useState<mode>("light");

	const theme = React.useMemo(() => {
		return createTheme(colorMode);
	}, [colorMode]);
	

	const context = {
		theme: theme,
		colorMode: colorMode,
		toggleColorMode: () =>
			setColorMode((x) => (x === "dark" ? "light" : "dark")),
	};

	ThemeContext = React.createContext(context);

	return (
		<ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
	);
};

export { ThemeContext };

export default ThemeProvider;
