
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({});

  const login = async () => {
    const res = await axios.post("http://127.0.0.1:8000/api/token/", data);
    localStorage.setItem("token", res.data.access);
    window.location.href = "/dashboard";
  };

  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <input placeholder="username" onChange={e => setData({...data, username: e.target.value})}/>
      <input type="password" placeholder="password" onChange={e => setData({...data, password: e.target.value})}/>
      <button onClick={login}>Login</button>
    </div>
  );
}
