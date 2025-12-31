import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      login(res.data.user);
      navigate("/profile");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={submit}>
      <h3 style={{ marginBottom: "12px" }}>Login</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button>Login</button>

      {/* 👇 IMPORTANT */}
      <p style={{ marginTop: "12px", textAlign: "center" }}>
        New user? <Link to="/signup">Create an account</Link>
      </p>
    </form>
  );
};

export default Login;
