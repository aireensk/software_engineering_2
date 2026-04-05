import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await login(username, password);

      console.log("Login success:", data);

      navigate("/todos");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Check username/password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}