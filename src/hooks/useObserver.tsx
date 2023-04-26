import React from "react";

const useObserver = () => {
	const ref = React.useRef<any>(null);
	const [inView, setInView] = React.useState(false);
	
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			setInView(entries[0].isIntersecting);
		});

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);
	return { ref, inView };
};

export default useObserver;
