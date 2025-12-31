import { useEffect, useState } from "react";
import api from "../api/axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users").then(res => setUsers(res.data));
  }, []);

  const toggle = async (id) => {
    await api.patch(`/admin/users/${id}/status`);
    setUsers(users.map(u =>
      u._id === id ? { ...u, status: u.status === "active" ? "inactive" : "active" } : u
    ));
  };

  return (
    <table>
      <tbody>
        {users.map(u => (
          <tr key={u._id}>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>{u.status}</td>
            <td>
              <button onClick={() => toggle(u._id)}>
                Toggle
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminDashboard;
