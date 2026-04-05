import { useState } from "react";
import { register } from "../../services/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await register(username, email, password);
      alert("Registered successfully!");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}