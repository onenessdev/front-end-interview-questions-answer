import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HeaderSection from "./components/header-section/HeaderSection";

function App() {
	return (
		<Fragment>
			<HeaderSection />
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</Fragment>
	);
}

export default App;
