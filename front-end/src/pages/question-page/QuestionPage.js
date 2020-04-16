import React from "react";
import "./question-page.styles.css";
import CustomTitle from "../../components/custom-title/CustomTitle";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CreateQuestionForm from "../../components/create-question-form/CreateQuestionForm";

const QuestionPage = () => {
	return (
		<div className="question-page">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="question-block-intro">
							<h1>Redux Complected Interview Question and answer</h1>
							<button>Set a Question</button>
						</div>
					</div>
				</div>
				<div className="question-answer-block py-5 mt-5">
					<div className="row">
						<div className="col-md-10 offset-1">
							<Accordion defaultActiveKey="0">
								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="0">
										<span className="question-number">01</span>
										What were some of the key goals and motivations for the
										HTML5 specification?
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											<span className="question-ans">Ans:</span>
											HTML5 was designed to replace both HTML 4, XHTML, and the
											HTML DOM Level 2. Major goals of the HTML specification
											were to: Deliver rich content (graphics, movies, etc.)
											without the need for additional plugins (e.g., Flash).
											Provide better semantic support for web page structure
											through the introduction of new structural element tags.
											Provide a stricter parsing standard to simplify error
											handling, ensure more consistent cross-browser behavior,
											and simplify backward compatibility with documents written
											to older standards. Provide better cross-platform support
											(i.e., to work well whether running on a PC, Tablet, or
											Smartphone).
										</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card>
									<Accordion.Toggle as={Card.Header} eventKey="1">
										What were some of the key goals and motivations for the
										HTML5 specification?
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="1">
										<Card.Body>
											HTML5 was designed to replace both HTML 4, XHTML, and the
											HTML DOM Level 2. Major goals of the HTML specification
											were to: Deliver rich content (graphics, movies, etc.)
											without the need for additional plugins (e.g., Flash).
											Provide better semantic support for web page structure
											through the introduction of new structural element tags.
											Provide a stricter parsing standard to simplify error
											handling, ensure more consistent cross-browser behavior,
											and simplify backward compatibility with documents written
											to older standards. Provide better cross-platform support
											(i.e., to work well whether running on a PC, Tablet, or
											Smartphone).
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</div>
					</div>
				</div>
				<div className="create-question-block">
					<CreateQuestionForm />
				</div>
			</div>
		</div>
	);
};

export default QuestionPage;
