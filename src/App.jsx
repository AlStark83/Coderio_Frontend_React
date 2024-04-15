import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./UIComponents/Header";
import { Home, Cart, CheckOut  } from "./view/index";


function App() {
	return (
		<Router>
			<>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<CheckOut />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
