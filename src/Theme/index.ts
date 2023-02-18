export type mode = "dark" | "light";

export const colorPalettes = {
	orange_shadow: "rgb(244, 191, 0)",
	blue_whale: "rgb(0, 153, 255)",
	green_hacker: "rgb(2, 235, 2)",
	pink_Queen: "rgb(255, 0, 89)",
};

export const colors = {
	dark: "#1a1a19",
	light: "#eed",
	primary: "rgb(244, 191, 0)",
	secondary: "#ff4400",
} as const;

const createTheme = (mode: mode) => ({
	bg: mode === "dark" ? colors.dark : colors.light,
	c: mode === "dark" ? colors.light : colors.dark,
	primary: colors.primary,
	secondary: colors.secondary,
});

export type themeType = ReturnType<typeof createTheme>;

export default createTheme;
