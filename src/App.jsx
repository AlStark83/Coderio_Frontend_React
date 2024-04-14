import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header  from "./UIComponents/Header";
import  ModalLoginForm  from "./Auth/ModalLoginForm";
import  AuthHandler  from "./Auth/AuthHandler";
import { Home, CheckOut } from "./view/index";

function App() {

	return (
		<Router>
			<>
				<Header />
				
				<ModalLoginForm />
				<AuthHandler/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<CheckOut />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
