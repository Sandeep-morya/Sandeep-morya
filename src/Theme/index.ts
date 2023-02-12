export type mode = "dark" | "light";

export const colors = {
	dark: "#112",
	light: "#eed",
	primary: "#dc143c",
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
