import React from "react";
import "./teacher-card.styles.css";
import CustomTitle from "../custom-title/CustomTitle";

const TeacherCard = () => {
	return (
		<div className="teacher-card-wrapper">
			<div className="row py-5 mt-5">
				<div className="col-md-12 text-center">
					<CustomTitle thin="Jobayer Hossain" tagline="Contributors Profile" />
					<div className="teacher-card">
						<div className="teacher-avater">
							<img
								src="http://jthemes.org/html/genius-course/assets/img/teacher/tb-1.png"
								alt=""
							/>
							<div className="dark-overlay"></div>
							<div className="hover-content">
								<div className="teacher-link">
									<a href="/">
										<i className="fa fa-facebook"></i>
									</a>
									<a href="/">
										<i className="fa fa-twitter"></i>
									</a>
									<a href="/">
										<i className="fa fa-github"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="teacher-meta">
							<p>Front-End Developer</p>
							<h4>
								"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
								distinctio. Autem sequi pariatur magnam ratione illum alias vel
								dicta tempora."
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeacherCard;
