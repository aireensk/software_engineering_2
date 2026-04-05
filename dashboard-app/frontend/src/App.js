import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Todos from "./components/TodoApp";
import Register from "./components/Authentication/Register";
import Profile from "./components/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;