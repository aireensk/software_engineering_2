
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [data, setData] = useState({});

  const register = async () => {
    await axios.post("http://127.0.0.1:8000/api/register/", data);
    alert("User created");
    window.location.href = "/";
  };

  return (
    <div style={{padding:20}}>
      <h2>Register</h2>
      <input placeholder="username" onChange={e => setData({...data, username: e.target.value})}/>
      <input type="password" placeholder="password" onChange={e => setData({...data, password: e.target.value})}/>
      <button onClick={register}>Register</button>
    </div>
  );
}
