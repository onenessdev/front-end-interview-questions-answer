import React from "react";
import "./create-question-form.styles.css";
import CustomTitle from "../custom-title/CustomTitle";

const CreateQuestionForm = () => {
	return (
		<div className="create-question-form py-5 mt-5">
			<div className="row">
				<div className="col-md-10 offset-1">
					<CustomTitle
						thin="Set new Question"
						tagline="Spread your knowledged"
						medium
					/>
					<form action="" className="mt-5">
						<input type="email" name="email" placeholder="Email optionl" />
						<input type="text" name="question" placeholder="Question Title" />
						<textarea name="answer" id="" cols="30" rows="10">
							Answer in English
						</textarea>
						<input type="submit" value="Set Question" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateQuestionForm;
