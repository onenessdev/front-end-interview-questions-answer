import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import HeaderSection from "./components/header-section/HeaderSection";
import QuestionPage from "./pages/question-page/QuestionPage";

function App() {
	return (
		<Fragment>
			<HeaderSection />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/interview" component={QuestionPage} />
			</Switch>
		</Fragment>
	);
}

export default App;
