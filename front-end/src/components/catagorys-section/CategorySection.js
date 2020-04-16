import React, { useState } from "react";
import "./catagory.styles.css";
import CatagoryBlock from "../catagory-block/CatagoryBlock";

const CategorySection = () => {
	const [catagory, setCatagory] = useState([
		{
			name: "HTML Interview Question and Answer",
			thumbnail:
				"https://farm5.staticflickr.com/4077/4773108810_a56fb1cbd9_b.jpg",
			linkUrl: "/interview-html",
			totalQuestion: 101,
			coverText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure qui dolorum ad nisi, odio dolore? Modi earum deserunt sequi nisi.",
			student: 161,
		},
		{
			name: "CSS,CSS Animation Interview Questions",
			thumbnail:
				"https://www.motocms.com/blog/wp-content/uploads/2018/07/css-main-image.jpg",
			linkUrl: "/interview-html",
			totalQuestion: 101,
			coverText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure qui dolorum ad nisi, odio dolore? Modi earum deserunt sequi nisi.",
			student: 161,
		},
		{
			name: "Bootstarp Interview Question",
			thumbnail:
				"https://www.bootstrapdash.com/wp-content/uploads/2017/08/bootstrap-4-beta-whats-new.jpg",
			linkUrl: "/interview-html",
			totalQuestion: 101,
			coverText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure qui dolorum ad nisi, odio dolore? Modi earum deserunt sequi nisi.",
			student: 161,
		},
		{
			name: "Javascript",
			thumbnail:
				"https://cdn.acodez.in/wp-content/uploads/2019/08/What-is-Javascript-used-for.jpg",
			linkUrl: "/interview-html",
			totalQuestion: 101,
			coverText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure qui dolorum ad nisi, odio dolore? Modi earum deserunt sequi nisi.",
			student: 161,
		},
		{
			name: "React Interview Question",
			thumbnail:
				"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN",
			linkUrl: "/interview-html",
			totalQuestion: 101,
			coverText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure qui dolorum ad nisi, odio dolore? Modi earum deserunt sequi nisi.",
			student: 161,
		},
		{
			name: "Redux Question ",
			thumbnail:
				"https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg",
			linkUrl: "/interview-html",
			totalQuestion: 101,
			coverText:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure qui dolorum ad nisi, odio dolore? Modi earum deserunt sequi nisi.",
			student: 161,
		},
	]);
	return (
		<div className="catagories-section">
			<div className="row">
				{catagory.map((x, i) => (
					<div className="col-md-4">
						<CatagoryBlock data={x} />
					</div>
				))}
			</div>
		</div>
	);
};

export default CategorySection;
