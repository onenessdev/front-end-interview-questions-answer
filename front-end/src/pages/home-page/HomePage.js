import React from "react";
import CategorySection from "../../components/catagorys-section/CategorySection";
import TeacherCard from "../../components/teacher-card/TeacherCard";

const HomePage = () => {
	return (
		<div className="home-page">
			<div className="container">
				<CategorySection />
				<TeacherCard />
			</div>
		</div>
	);
};

export default HomePage;
