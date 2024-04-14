import { useState } from "react";
import Modal from "react-modal";

// eslint-disable-next-line react/prop-types
function LoginForm({ isOpen, onRequestClose }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch("https://fakestoreapi.com/auth/login", {
				method: "POST",
				headers:{
           "Content-Type": "application/json"
				},
				body: JSON.stringify({ username, password }),
			});

			if (!response.ok) {
				throw new Error("Invalid Credentials");
			}
			
			const data = await response.json();
				
			localStorage.setItem("token", data.token);
			localStorage.setItem("username", data.username);
			onRequestClose();
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Usuario:</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Contraseña:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{error && <div>{error}</div>}
				<button type="submit">Submit</button>
			</form>
		</Modal>
	);
}

export default LoginForm;
