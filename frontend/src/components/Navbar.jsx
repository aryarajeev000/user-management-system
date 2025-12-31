import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <nav>
      <span>{user.fullName} ({user.role})</span>
      <Link to="/profile">Profile</Link>
      {user.role === "admin" && <Link to="/admin">Admin</Link>}
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
