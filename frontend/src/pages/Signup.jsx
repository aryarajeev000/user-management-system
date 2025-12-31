import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/auth/signup", form);
    navigate("/login");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Full Name" onChange={e => setForm({...form, fullName: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button>Signup</button>
    </form>
  );
};

export default Signup;
