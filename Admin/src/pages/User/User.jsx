import "./User.css";
import { useEffect, useState } from "react";
import axios from "axios";

const User = ({ url }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url + "/api/user/user"); // Assuming this is your endpoint
        if (response.data.success) {
          setUsers(response.data.users);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-container">
      <h1>User List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user._id} className="user-item">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
