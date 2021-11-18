import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
	return (
		<div className="test">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
		</div>
	);
}

export default App;
