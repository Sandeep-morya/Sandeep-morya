import React from "react";

const useVisit = () => {
	return (url: string) => {
		setTimeout(() => {
			window.open(url, "_blank");
		}, 700);
	};
};

export default useVisit;
