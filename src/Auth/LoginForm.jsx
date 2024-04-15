import { useState, useEffect } from "react";
import Modal from "react-modal";

// eslint-disable-next-line react/prop-types
function LoginForm({ isOpen, onRequestClose }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	useEffect(() => {
    const storedUsername = localStorage.getItem("username");
   console.log("Stored Username", storedUsername);
		if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		localStorage.setItem("username", username);

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
				console.log(username);
			localStorage.setItem("token", data.token);
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
