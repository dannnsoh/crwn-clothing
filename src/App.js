import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

function App() {
	return (
		<div className="test">
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
