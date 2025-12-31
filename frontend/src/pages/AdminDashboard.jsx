import { useEffect, useState } from "react";
import api from "../api/axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const res = await api.get(`/admin/users?page=${pageNumber}&limit=10`);

      // ✅ Backend returns array
      setUsers(res.data); // <-- FIX
      setPage(pageNumber);
      setTotalPages(1); // temporary (no backend pagination meta)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const toggleStatus = async (id, status) => {
    const ok = window.confirm(
      `Are you sure you want to ${
        status === "active" ? "deactivate" : "activate"
      } this user?`
    );
    if (!ok) return;

    await api.patch(`/admin/users/${id}/status`);
    fetchUsers(page);
  };

  if (loading) return <div className="profile-card">Loading users...</div>;

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <p>Manage users and control account status</p>
      </div>

      {/* Table */}
      <div className="admin-table-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users?.length > 0 ? (
              users.map((u) => (
                <tr key={u._id}>
                  <td>{u.email}</td>
                  <td>{u.fullName}</td>
                  <td>
                    <span className={`role-pill ${u.role}`}>{u.role}</span>
                  </td>
                  <td>
                    <span className={`status-pill ${u.status}`}>
                      {u.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className={`action-btn ${u.status}`}
                      onClick={() => toggleStatus(u._id, u.status)}
                    >
                      {u.status === "active" ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
