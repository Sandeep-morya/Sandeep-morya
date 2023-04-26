import { RefObject } from "react";
import { useTheme } from "../Provider/ThemeContextProvider";

type Props = {
	refs: RefObject<HTMLDivElement>[];
};

const Cursor = ({ refs }: Props) => {
	const { color } = useTheme();
	return (
		<>
			<div
				ref={refs[0]}
				className={"cursor"}
				style={{ backgroundColor: color.main }}></div>
			{/* <div
				ref={refs[1]}
				className={"follower"}
				style={{ backgroundColor: color.main }}></div> */}
		</>
	);
};

export default Cursor;
