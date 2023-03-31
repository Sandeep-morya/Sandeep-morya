import React from "react";

type Props = {};

const useObserver = () => {
	const ref = React.useRef<any>(null);
	const [inView, setInView] = React.useState(false);
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			setInView(entries[0].isIntersecting);
		});
		observer.observe(ref.current as Element);
	}, []);
	return { ref, inView };
};

export default useObserver;
