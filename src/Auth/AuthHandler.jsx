// AuthHandler.js

import  { useState, useEffect } from "react";

function AuthHandler() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.reload();
  };

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error("Error asking for user data");
      }

      const userData = await response.json();
      console.log("User data:", userData);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div>
      {token ? (
        <button className="p-2 bg-gray-600 text-white rounded ml-4" onClick={handleLogout}>Logout</button>
      ) : (
        <p className="text-sm hidden md:block">You must loggin</p>
      )}
    </div>
  );
}

export default AuthHandler;
