import "../Theme/boot.css";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeContextProvider";

const Boot = () => {
	const { color } = useContext(ThemeContext);
	return (
		// <!-- SPINNING SQUARES -->
		<div className="boot_shield">
			<div className="boot_loader">
				<div className="configure-border-1" style={{ background: color.main }}>
					<div className="configure-core">
						{" "}
						<h1 style={{ color: color.main }}>SM</h1>
					</div>
				</div>
				<div className="configure-border-2" style={{ background: color.main }}>
					<div className="configure-core"> </div>
				</div>
			</div>
		</div>
	);
};

export default Boot;
