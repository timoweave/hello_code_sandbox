import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";
import Header from "./header";

import "./styles.css";

const App = () => (
	<div className="App">
		<Header />
		<Form />
	</div>
);

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
