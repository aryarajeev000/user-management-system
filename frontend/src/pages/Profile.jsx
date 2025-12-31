import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  const isAdmin = user.role === "admin";

  return (
    <div className="profile-card">
      <h2 className="profile-title">Dashboard</h2>

      <p className="profile-subtitle">
        Welcome back, <span>{user.fullName}</span>
      </p>

      <div className="profile-info">
        <div className="profile-row">
          <span className="label">Name</span>
          <span className="value">{user.fullName}</span>
        </div>

        <div className="profile-row">
          <span className="label">Email</span>
          <span className="value">{user.email}</span>
        </div>

        <div className="profile-row">
          <span className="label">Role</span>
          <span className="badge">{user.role}</span>
        </div>
      </div>

      {/* ✅ ADMIN ONLY SECTION */}
      {isAdmin && (
        <div className="admin-section">
          <h4>Admin Actions</h4>
          <p>You have administrative privileges.</p>

          <Link to="/admin" className="admin-link">
            Go to Admin Dashboard →
          </Link>
        </div>
      )}

      <p className="profile-footer">
        This is your account dashboard. More features such as password change,
        activity logs, and security settings can be added here.
      </p>
    </div>
  );
};

export default Profile;
