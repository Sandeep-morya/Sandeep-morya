import { useCallback, useEffect, useRef, useState } from "react";

export interface Time {
	hour: number;
	minutes: number;
	seconds: number;
}

function useTime() {
	const [time, setTime] = useState<Time>(() => {
		const date = new Date(Date.now());
		return {
			hour: date.getHours(),
			minutes: date.getMinutes(),
			seconds: date.getSeconds(),
		};
	});
	// :: Using Request Animation frame ::
	// const requestRef = useRef<number>();

	// const animate = useCallback(() => {
	// 	const date = new Date(Date.now());
	// 	setTime({
	// 		hour: date.getHours(),
	// 		minutes: date.getMinutes(),
	// 		seconds: date.getSeconds(),
	// 	});
	// 	requestRef.current = requestAnimationFrame(animate);
	// }, []);

	// useEffect(() => {
	// 	requestRef.current = requestAnimationFrame(animate);
	// 	return () => cancelAnimationFrame(requestRef.current!);
	// }, []);

	useEffect(() => {
		// :: Using Interval ::
		const id = setInterval(() => {
			const date = new Date(Date.now());
			setTime({
				hour: date.getHours(),
				minutes: date.getMinutes(),
				seconds: date.getSeconds(),
			});
		}, 1000);
		return () => clearInterval(id);
	}, []);

	return time;
}

export default useTime;
