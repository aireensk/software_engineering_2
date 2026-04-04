
import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("posts/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => setPosts(res.data));
  }, []);

  return (
    <div style={{display:"flex"}}>
      <div style={{width:200, background:"#d8f3dc", padding:20, height:"100vh"}}>
        <h3>Dashboard</h3>
      </div>
      <div style={{padding:20, flex:1}}>
        <h1>Posts</h1>
        <div>Total Posts: {posts.length}</div>
        {posts.map(p => (
          <div key={p.id} style={{border:"1px solid #ccc", marginTop:10, padding:10}}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
