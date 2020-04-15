import React from "react";
import "./category-block.styles.css";

const CatagoryBlock = ({ data }) => {
	const { name, thumbnail, linkUrl, totalQuestion, coverText, student } = data;
	return (
		<div className="category-block">
			<div className="cat-img">
				<img src={thumbnail} alt="" />
			</div>
			<div className="cat-content">
				<h1>{name}</h1>
				<p>{coverText}</p>
				<div className="meta">
					<span>Question : {totalQuestion}</span>
					<span>Enrolled : {student}</span>
				</div>
			</div>
		</div>
	);
};

export default CatagoryBlock;
