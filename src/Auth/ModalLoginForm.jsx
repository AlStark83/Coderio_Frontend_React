import LoginForm from "./LoginForm";
import { useState, useEffect } from "react";

function ModalLoginForm() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [token, setToken] = useState(null);

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		window.location.reload();
	};

	let textButton = "";
	const loginButtonText = (isLoggedIn) => {
		isLoggedIn ? (textButton = "Logout") : (textButton = "Login");
		return textButton;
	};

	return (
		<div>
			{!token ? (
				<>
					<div>
						<button className="p-2 bg-gray-600 text-white rounded" onClick={openModal}>{loginButtonText()}</button>
						<LoginForm isOpen={modalIsOpen} onRequestClose={closeModal} />
					</div>
				</>
			) : (
				<p className="text-sm hidden md:block">Good to have you back</p>
			)}
		</div>
	);
}

export default ModalLoginForm;
