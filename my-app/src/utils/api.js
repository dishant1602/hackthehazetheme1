import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get("https://my-json-server.typicode.com/easygautam/data/users");
    return response.data; // Axios puts the data in `response.data`
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
};