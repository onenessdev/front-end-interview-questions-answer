import React from "react";
import "./header-section.styles.css";
import CustomTitle from "../custom-title/CustomTitle";

const HeaderSection = () => {
	return (
		<div className="header-section text-center mb-5">
			<div className="container">
				<div className="row  py-5">
					<div className="col-md-12">
						<CustomTitle
							tagline="Now it's your turn get ready  to  hired as a web developer"
							thin="Codein Interview Question"
							medium
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderSection;
