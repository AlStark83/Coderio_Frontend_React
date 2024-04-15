import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import Modal from "react-modal";

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
<Modal isOpen={isOpen} onRequestClose={onRequestClose} className="bg-white rounded-lg p-8 shadow-md w-96">
  <h2 className="text-2xl font-bold mb-4">Login</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-semibold">User:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-semibold">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    {error && <div className="text-red-500 mb-4">{error}</div>}
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
  </form>
</Modal>
	);
}

LoginForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default LoginForm;
