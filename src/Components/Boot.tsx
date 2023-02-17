import React from "react";
import "../Theme/boot.css";

type Props = {};

const Boot = (props: Props) => {

	return (
		// <!-- SPINNING SQUARES -->
		<div className="boot_shield">
			<div className="boot_loader">
				<div className="configure-border-1">
					<div className="configure-core">
						{" "}
						<h1>SM</h1>
					</div>
				</div>
				<div className="configure-border-2">
					<div className="configure-core"> </div>
				</div>
			</div>
		</div>
	);
};

export default Boot;
