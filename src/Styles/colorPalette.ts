﻿const colorPalettes = {
	orange_shadow: {
		main: "rgb(244, 191, 0)",
		dimmed: "rgba(244, 191, 0,0.1)",
	},
	blue_whale: {
		main: "rgb(0, 153, 255)",
		dimmed: "rgba(0, 153, 255,0.1)",
	},
	green_hacker: {
		main: "rgb(143, 216, 8)",
		dimmed: "rgb(143, 216, 8,0.1)",
	},
	pink_Queen: {
		main: "rgb(238, 10, 181)",
		dimmed: "rgba(238, 10, 181,0.1)",
	},
	orange_fish: {
		main: "rgb(255, 94, 0)",
		dimmed: "rgba(255, 94, 0,0.1)",
	},
	purple_witch: {
		main: "rgb(139, 42, 250)",
		dimmed: "rgba(139, 42, 250,0.1)",
	},
};
export default colorPalettes;

export const colorsArray = [
	{
		main: "rgb(244, 191, 0)",
		dimmed: "rgba(244, 191, 0,0.1)",
	},
	{
		main: "rgb(0, 153, 255)",
		dimmed: "rgba(0, 153, 255,0.1)",
	},
	{
		main: "rgb(143, 216, 8)",
		dimmed: "rgb(143, 216, 8,0.1)",
	},
	{
		main: "rgb(238, 10, 181)",
		dimmed: "rgba(238, 10, 181,0.1)",
	},
	{
		main: "rgb(255, 94, 0)",
		dimmed: "rgba(255, 94, 0,0.1)",
	},
	{
		main: "rgb(139, 42, 250)",
		dimmed: "rgba(139, 42, 250,0.1)",
	},
];

export function randomColor() {
	const val1 = Math.floor(Math.random() * 256);
	const val2 = Math.floor(Math.random() * 256);
	const val3 = Math.floor(Math.random() * 256);
	return {
		main: `rgba(${val1},${val2},${val3},1)`,
		dimmed: `rgba(${val1},${val2},${val3},0.1)`,
	};
}