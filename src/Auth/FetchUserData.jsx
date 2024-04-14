const fetchUserData = async (userId, token) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("Error al obtener los datos del usuario");
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error:", error.message);
    throw error; 
  }
};

export { fetchUserData };
