import "../Styles/avatar.css";
import { useTheme } from "../Provider/ThemeContextProvider";

const Avatar = () => {
	const { color } = useTheme();
	return (
		<div
			className="avatar"
			style={{
				backgroundColor: color.main,
				borderRadius: "50%",
			}}
			onClick={() => window.scrollTo(0, 0)}>
			<img
				style={{ outlineColor: color.main }}
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680098809/uevnv967xka4pcxzcfky.png"
				alt=""
			/>
		</div>
	);
};

export default Avatar;
