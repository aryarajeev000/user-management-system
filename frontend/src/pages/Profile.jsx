import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, login } = useContext(AuthContext);

  const [edit, setEdit] = useState(false);
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState("");

  // Change password state
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [pwdMessage, setPwdMessage] = useState("");

  if (!user) return null;

  const isAdmin = user.role === "admin";

  const handleProfileSave = async () => {
    try {
      const res = await api.put("/users/profile", {
        fullName,
        email,
      });

      login(res.data); // update context
      setEdit(false);
      setMessage("Profile updated successfully");
    } catch (err) {
      setMessage(err.response?.data?.message || "Profile update failed");
    }
  };

  const handleChangePassword = async () => {
    try {
      const res = await api.put("/users/change-password", {
        oldPassword,
        newPassword,
      });

      setPwdMessage(res.data.message);
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setPwdMessage(
        err.response?.data?.message || "Password update failed"
      );
    }
  };

  return (
    <div className="profile-card">
      <h2 className="profile-title">Dashboard</h2>

      <p className="profile-subtitle">
        Welcome back, <span>{user.fullName}</span>
      </p>

      {message && <p className="success-msg">{message}</p>}

      {/* Profile Info */}
      <div className="profile-info">
        <div className="profile-row">
          <span className="label">Full Name</span>
          {edit ? (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          ) : (
            <span className="value">{user.fullName}</span>
          )}
        </div>

        <div className="profile-row">
          <span className="label">Email</span>
          {edit ? (
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <span className="value">{user.email}</span>
          )}
        </div>

        <div className="profile-row">
          <span className="label">Role</span>
          <span className="badge">{user.role}</span>
        </div>
      </div>

      {/* Profile Actions */}
      <div className="profile-actions">
        {!edit ? (
          <button onClick={() => setEdit(true)}>Edit Profile</button>
        ) : (
          <>
            <button onClick={handleProfileSave}>Save</button>
            <button
              className="secondary"
              onClick={() => {
                setEdit(false);
                setFullName(user.fullName);
                setEmail(user.email);
              }}
            >
              Cancel
            </button>
          </>
        )}
      </div>

      {/* Admin Section */}
      {isAdmin && (
        <div className="admin-section">
          <h4>Admin Actions</h4>
          <p>You have administrative privileges.</p>
          <Link to="/admin" className="admin-link">
            Go to Admin Dashboard →
          </Link>
        </div>
      )}

      {/* Change Password */}
      <div className="password-card">
        <h4>Change Password</h4>

        {pwdMessage && <p className="success-msg">{pwdMessage}</p>}

        <input
          type="password"
          placeholder="Current password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button onClick={handleChangePassword}>
          Update Password
        </button>
      </div>

      <p className="profile-footer">
        This dashboard is designed to manage your account details securely.
      </p>
    </div>
  );
};

export default Profile;
