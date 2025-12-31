import { useEffect, useState } from "react";
import api from "../api/axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/user/me").then(res => setUser(res.data));
  }, []);

  if (!user) return null;

  return (
    <div className="profile">
      <h3>{user.fullName}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
