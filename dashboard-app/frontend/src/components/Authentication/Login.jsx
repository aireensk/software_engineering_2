import { useState } from "react";
import { loginUser } from "../../services/api";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await loginUser(username, password);
    login(res.data.access);
    navigate("/todos");
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e) => setUsername(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}