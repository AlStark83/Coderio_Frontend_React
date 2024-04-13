import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login } from "./view/index";
import { Header } from "./components/index";

function App() {
	return (
		<Router>
			<>
				<Header />
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/login" element={<Login/>} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
